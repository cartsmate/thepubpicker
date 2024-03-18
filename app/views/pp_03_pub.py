import json
from app import app
from flask import render_template, request, session, redirect, url_for
from app.static.pythonscripts.uuid_generater import UuidGenerator
from app.models.detail.detail import Detail
from app.models.review.review import Review
from app.models.diary.diary import Diary
from app.models.station.station import Station
from app.models.direction.direction import Direction
from app.models.daily_event.daily_event import DailyEvent
from app.models.pub_record.pub_record import PubRecord
from app.models.photo.photo import Photo
from app.static.pythonscripts.files_pub import FilesPub
from app.static.pythonscripts.files_photo import FilesPhoto
from app.static.pythonscripts.files_daily import FilesDaily
# from app.static.pythonscripts.files_events import FilesEvent
from app.static.pythonscripts.pub_get import GetPub
from app.static.pythonscripts.dataframes import Dataframes
# from app.static.pythonscripts.controls_list import ControlsList
# from app.static.pythonscripts.objects import Objects
from app.static.pythonscripts.multi_threading import MultiThreadingPub
from config import *


def get_csv_data(model):
    data = GetPub().get_all(model)
    return data


@app.route("/pub/", methods=['GET', 'POST'])
def pub():
    # print('session')
    # print(session)
    # print("Configurations().get_config2()['session_key']")
    # print(Configurations().get_config2()['session_key'])

    env_vars = Configurations.get_config()

    if env_vars['session_key'] in session.values():
        print('included')

        print('START pub')

        filters = request.args.get('filters')

        # # # GET ENVIRONMENTAL VARIABLES
        # env_vars = Configurations().get_config2()

        # # # GET REQUESTED PUB
        pub_id = request.args.get('id')

        if env_vars['source'] == 'db':
            df_dict = MultiThreadingPub().thread_caller()
            # DATABASE FILES
            df_daily_event_all = df_dict['df_daily_event']
            df_station_all = df_dict['df_station']
            df_direction_all = df_dict['df_direction']
            df_pub_record_all = df_dict['df_pub_record']
            # df_detail_all = df_dict['df_detail']
            # df_review_all = df_dict['df_review']
            # df_daily_event_all = df_dict['df_daily_event']
            # df_diary_all = df_dict['df_diary']
            # df_station_all = df_dict['df_station']
            # df_direction_all = df_dict['df_direction']
            df_pub = df_pub_record_all
            photos_list = FilesPhoto().go_get_1_photo_request(df_pub_record_all, pub_id, env_vars)
            stations_directions_list = Dataframes().go_get_stations_directions_list_flat(df_pub_record_all,
                                                                                         df_station_all,
                                                                                         df_direction_all)
            directions_list = Dataframes().go_get_directions_list_flat(df_pub_record_all, df_station_all,
                                                                       df_direction_all)
        elif env_vars['source'] == 'new_csv':
            df_daily_event_all = get_csv_data(DailyEvent())
            df_station_all = get_csv_data(Station())
            df_direction_all = get_csv_data(Direction())
            df_pub_record_all = get_csv_data(PubRecord())

            stations_directions_list = Dataframes().go_get_stations_directions_list_flat(df_pub_record_all,
                                                                                         df_station_all,
                                                                                         df_direction_all)
            directions_list = Dataframes().go_get_directions_list_flat(df_pub_record_all, df_station_all,
                                                                       df_direction_all)
            # # # GET ALL DATA # # #
            df_pub = df_pub_record_all
            # # # GET FEATURED PUB # # #
            daily_id = FilesDaily().go_get_details_daily(df_pub_record_all)
            # # # GET FEATURED PUB PHOTOS # # #
            photos_list = FilesPhoto().go_get_1_photo_request(df_pub_record_all, daily_id, env_vars)
        else:
            # GET DATA FROM CSV
            df_detail_all = get_csv_data(Detail)
            df_review_all = get_csv_data(Review())
            df_daily_event_all = get_csv_data(DailyEvent())
            df_diary_all = get_csv_data(Diary())
            df_station_all = get_csv_data(Station())
            df_direction_all = get_csv_data(Direction())

            df_pub = FilesPub().get_pub_all(df_detail_all, df_review_all, df_diary_all, df_station_all, df_direction_all)
            photos_list = FilesPhoto().go_get_1_photo_request(df_detail_all, pub_id, env_vars)

            stations_directions_list = Dataframes().go_get_stations_directions_list(df_detail_all, df_station_all,
                                                                                    df_direction_all)
            directions_list = Dataframes().go_get_directions_list(df_detail_all, df_station_all, df_direction_all)

        df_1_pub = FilesPub().get_pub_1(df_pub, pub_id)
        pub_json = df_1_pub.to_dict(orient='records')

        # CSV FILES
        # df_1_event = GetPub().get_1(DailyEvent(), pub_id)
        df_1_event = df_daily_event_all.loc[df_daily_event_all['pub_identity'] == pub_id]
        df_1_event_list_json = df_1_event.to_json(orient='records')
        json_loads = json.loads(df_1_event_list_json)

        detail_json = json.loads(json.dumps(Detail().__dict__, default=lambda o: o.__dict__))
        review_json = json.loads(json.dumps(Review().__dict__, default=lambda o: o.__dict__))
        diary_json = json.loads(json.dumps(Diary().__dict__, default=lambda o: o.__dict__))
        station_json = json.loads(json.dumps(Station().__dict__, default=lambda o: o.__dict__))
        direction_json = json.loads(json.dumps(Direction().__dict__, default=lambda o: o.__dict__))
        event_json = json.loads(json.dumps(DailyEvent().__dict__, default=lambda o: o.__dict__))

        print('END pub')
        name = "readonly"
        page = "pub"


        return render_template('03_pub_.html',
                               pub_1=pub_json,
                               events=json_loads,
                               event=event_json,
                               photos_list=photos_list,
                               env_vars=env_vars,
                               detail=detail_json,
                               review=review_json,
                               diary=diary_json,
                               station=station_json,
                               direction=direction_json,
                               directions_list=directions_list,
                               stations_directions_list=stations_directions_list,
                               photo=Photo(),
                               name=name,
                               filters=filters,
                               page=page,)
    else:
        # return render_template('02_home_.html')
        return redirect(url_for('home'))
