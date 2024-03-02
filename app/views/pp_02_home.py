import logging
import time
import datetime
from os import path
from app import app
import json
import pandas as pd
import logging.config
from flask import render_template, request

from app.static.pythonscripts.s3 import S3


from app.models.detail.detail import Detail
from app.models.review.review import Review
from app.models.diary.diary import Diary
from app.models.daily_event.daily_event import DailyEvent
from app.models.station.station import Station
from app.models.direction.direction import Direction
from app.models.pub.pub import Pub

from app.static.pythonscripts.dataframes import Dataframes
from app.static.pythonscripts.postgres import PostgresConnection
from app.static.pythonscripts.pub_get import GetPub
from app.static.pythonscripts.files_pub import FilesPub
from app.static.pythonscripts.files_photo import FilesPhoto
from app.static.pythonscripts.files_daily import FilesDaily
from app.static.pythonscripts.files_counter import FilesCounter


from logger.logger import Logger


from config import Configurations


@app.route("/", methods=['GET'])
@app.route("/home/", methods=['GET'])
def home():
    logger = Logger().create_logger()

    # # # GET CONFIG # # #
    try:
        t = datetime.datetime.now()
        logger.info(f'{t} : home page OPEN')
        env_vars = Configurations().get_config2()
        filters = request.args.get('filters')

        if env_vars['source'] == 'csv':
            df_detail_all = GetPub().get_all(Detail())
            df_review_all = GetPub().get_all(Review())
            df_daily_event_all = GetPub().get_all(DailyEvent())
            df_diary_all = GetPub().get_all(Diary())
            df_station_all = GetPub().get_all(Station())
            df_direction_all = GetPub().get_all(Direction())
        else:
            engine = PostgresConnection().create_engine()
            try:
                df_detail_all = PostgresConnection().read_postgres('detail', engine)
                df_review_all = PostgresConnection().read_postgres('review', engine)
                df_daily_event_all = PostgresConnection().read_postgres('daily_event', engine)
                df_diary_all = PostgresConnection().read_postgres('diary', engine)
                df_station_all = PostgresConnection().read_postgres('station', engine)
                df_direction_all = PostgresConnection().read_postgres('direction', engine)
            except Exception as e:
                gap = datetime.datetime.now() - t
                t = datetime.datetime.now()
                logger.error(f'{t} : {gap} : {e}', exc_info=True)
            finally:
                PostgresConnection.dispose_engine(engine)

        stations_directions_list = Dataframes().go_get_stations_directions_list(df_detail_all, df_station_all, df_direction_all)
        # stations_directions_list = Dataframes().go_get_stations_directions_list()
        directions_list = Dataframes().go_get_directions_list(df_detail_all, df_station_all, df_direction_all)

        # # # GET ALL DATA # # #
        df_pub = FilesPub().get_pub_all(df_detail_all, df_review_all, df_diary_all, df_station_all, df_direction_all)
        # df_event = GetPub().get_all(DailyEvent())
        df_pub_with_event = pd.merge(df_pub, df_daily_event_all, on='pub_identity', how='left')
        pub_ent_json = df_pub_with_event.to_dict(orient='records')

        # # # GET FEATURED PUB # # #
        daily_id = FilesDaily().go_get_details_daily(df_detail_all)
        df_pub_1 = FilesPub().get_pub_1(df_pub, daily_id)
        pub_1_json = df_pub_1.to_dict(orient='records')
        photos_list = FilesPhoto().go_get_1_photo_request(df_detail_all, daily_id, env_vars)

        # # # GET TIMEOUT LIST # # #
        df_timeout = FilesDaily().get_timeout(df_pub)
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
    except Exception as e:
        gap = datetime.datetime.now() - t
        t = datetime.datetime.now()
        logger.error(f'{t} : {gap} : {e}', exc_info=True)

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
