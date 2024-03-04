import json
import datetime
import functools
import pandas as pd
from app import app

from flask import render_template, request, session
# Flask-PyMongo, Flask-WTF, Flask-Mail, Flask-RestFul, Flask-Uploads, Flask-User, Flask-Login

from app.models.detail.detail import Detail
from app.models.review.review import Review
from app.models.diary.diary import Diary
from app.models.daily_event.daily_event import DailyEvent
from app.models.station.station import Station
from app.models.direction.direction import Direction
from app.models.pub.pub import Pub

from app.static.pythonscripts.dataframes import Dataframes
from app.static.pythonscripts.postgres import PostgresConnection
from app.static.pythonscripts.s3 import S3

from app.static.pythonscripts.pub_get import GetPub
from app.static.pythonscripts.files_pub import FilesPub
from app.static.pythonscripts.files_photo import FilesPhoto
from app.static.pythonscripts.files_daily import FilesDaily
from app.static.pythonscripts.files_counter import FilesCounter

from app.static.pythonscripts.multi_threading import MultiThreadingPub

from logger.logger import Logger
from config import Configurations


class CountCalls:

    def __init__(self, func):
        self.func = func
        self.num_calls = 0

    def __call__(self, *args, **kwargs):
        self.num_calls += 1
        print(f'This is executed {self.num_calls} times')
        return self.func(*args, **kwargs)


@CountCalls
def get_csv_data(model):
    data = GetPub().get_all(model)
    return data


def debug(func):
    @functools.wraps(func)
    def wrapper(*args, **kwargs):
        args_repr = [repr(a) for a in args]
        kwargs_repr = [f"{k}={v!r}" for k, v in kwargs.items()]
        signature = ", ".join(args_repr + kwargs_repr)
        print(f'Calling {func.__name__} with {signature}')
        result = func(*args, **kwargs)
        print(f'Returning {func.__name__!r}')
        # result {result!r}')
        return result
    return wrapper


def my_decorator(statement):
    def print_remarks(func):
        @functools.wraps(func)
        def wrapper(*args, **kwargs):
            # PRE function
            print(f'pre function decorator: {statement}')
            # RUN function
            result = func(*args, **kwargs)
            # POST function
            print(f'post function decorator: {statement}')
            return result
        return wrapper
    return print_remarks


@app.route("/", methods=['GET'])
@app.route("/home/", methods=['GET'])
@debug
@my_decorator(statement='hello world')
def home():
    env_vars = Configurations().get_config2()
    session['KEY_NAME'] = env_vars['session_key']
    print('session')
    print(session)
    # 'k999-zzz-888-yyy'  # stores a key in the web-browser

    logger = Logger().create_logger()

    # # # GET CONFIG # # #
    try:
        t = datetime.datetime.now()
        logger.info(f'{t} : home page OPEN')

        filters = request.args.get('filters')

        # GET DATA FROM DATABASE
        df_dict = MultiThreadingPub().thread_caller()
        df_detail_all = df_dict['df_detail']
        df_review_all = df_dict['df_review']
        df_daily_event_all = df_dict['df_daily_event']
        df_diary_all = df_dict['df_diary']
        df_station_all = df_dict['df_station']
        df_direction_all = df_dict['df_direction']

        # GET DATA FROM CSV
        # df_detail_all = get_csv_data(Detail)
        # df_review_all = get_csv_data(Review())
        # df_daily_event_all = get_csv_data(DailyEvent())
        # df_diary_all = get_csv_data(Diary())
        # df_station_all = get_csv_data(Station())
        # df_direction_all = get_csv_data(Direction())

        stations_directions_list = Dataframes().go_get_stations_directions_list(df_detail_all, df_station_all, df_direction_all)
        directions_list = Dataframes().go_get_directions_list(df_detail_all, df_station_all, df_direction_all)

        # # # GET ALL DATA # # #
        df_pub = FilesPub().get_pub_all(df_detail_all, df_review_all, df_diary_all, df_station_all, df_direction_all)
        df_pub_with_event = pd.merge(df_pub, df_daily_event_all, on='pub_identity', how='left')
        pub_ent_json = df_pub_with_event.to_dict(orient='records')

        # # # GET FEATURED PUB # # #
        daily_id = FilesDaily().go_get_details_daily(df_detail_all)
        df_pub_1 = FilesPub().get_pub_1(df_pub, daily_id)
        pub_1_json = df_pub_1.to_dict(orient='records')
        photos_list = FilesPhoto().go_get_1_photo_request(df_detail_all, daily_id, env_vars)

        # # # GET TIMEOUT LIST # # #
        df_timeout = df_pub.loc[df_pub['timeout'] == '1']
        timeout_json = df_timeout.to_dict(orient='records')

        # # # GET COUNTER TALLY # # #
        if env_vars['env'] == 'qual':
            counter = FilesCounter().go_get_counter()
            new_counter = FilesCounter().go_write_counter(counter + 1)
        else:
            counter = S3().go_get_counter('counter', ['pub_counter'])
            new_counter = counter + 1
            data = {'pub_counter': [new_counter]}
            df_updated_counter = pd.DataFrame(data)
            S3().s3_write(df_updated_counter, 'counter_prod.csv')
        counter6 = str(new_counter).zfill(6)

        # # # GET MODEL METADATA # # #
        review_json = json.loads(json.dumps(Review().__dict__, default=lambda o: o.__dict__))
        diary_json = json.loads(json.dumps(Diary().__dict__, default=lambda o: o.__dict__))
        pub_obj_json = json.loads(json.dumps(Pub().__dict__, default=lambda o: o.__dict__))

        gap = datetime.datetime.now() - t
        t = datetime.datetime.now()
        logger.info(f'{t} : {gap} : home page LOADED')
        return render_template('02_home_.html',
                               env_vars=env_vars,
                               color_theme='#A1BE95',
                               daily_id=daily_id,
                               pub_1=pub_1_json,
                               pub_all=pub_ent_json,
                               review=review_json,
                               diary=diary_json,
                               pub_obj=pub_obj_json,
                               photos_list=photos_list,
                               filters=filters,
                               directions_list=directions_list,
                               stations_directions_list=stations_directions_list,
                               counter=counter6,
                               page='home',
                               timeout_pubs=timeout_json

                               # no_of_review=no_of_reviews
                               )
    except Exception as e:
        gap = datetime.datetime.now() - t
        t = datetime.datetime.now()
        logger.error(f'{t} : {gap} : {e}', exc_info=True)
        return render_template('00_errorhandling_500.html')
