import json
from app import app

from flask import render_template, request
# from app.static.pythonscripts.csv import Csv
from app.models.pub.pub import Pub

from app.models.detail.detail import Detail
from app.models.direction.direction import Direction
from app.models.station.station import Station
from app.models.review.review import Review
from app.models.photo.photo import Photo
from app.models.diary.diary import Diary
from app.models.daily_event.daily_event import DailyEvent

from app.static.pythonscripts.uuid_generater import UuidGenerator
from app.static.pythonscripts.files_pub import FilesPub
from app.static.pythonscripts.files_photo import FilesPhoto
# from app.static.pythonscripts.files_events import FilesEvent
from app.static.pythonscripts.pub_get import GetPub
from app.static.pythonscripts.multi_threading import MultiThreadingPub
from config import *


@app.route("/edit/", methods=['GET'])
def edit():
    print('start EDIT')

    # # # GET REQUESTED PUB
    pub_id = request.args.get('id')
    filters = request.args.get('filters')

    # # # GET ENVIRONMENTAL VARIABLES
    env_vars = Configurations.get_config()

    df_dict = MultiThreadingPub().thread_caller()
    # DATABASE FILES
    df_detail_all = df_dict['df_detail']
    df_review_all = df_dict['df_review']
    df_daily_event_all = df_dict['df_daily_event']
    df_diary_all = df_dict['df_diary']
    df_station_all = df_dict['df_station']
    df_direction_all = df_dict['df_direction']
    df_pub = FilesPub().get_pub_all(df_detail_all, df_review_all, df_diary_all, df_station_all, df_direction_all)
    df_1_pub = FilesPub().get_pub_1(df_pub, pub_id)
    pub_json = df_1_pub.to_dict(orient='records')

    # df_1_event = FilesEvent().get_event_1(pub_id)
    # df_1_event = GetPub().get_1(DailyEvent(), pub_id)
    df_1_event = df_daily_event_all.loc[df_daily_event_all['pub_identity'] == pub_id]

    # days = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday']
    # for day in days:
    #     df = df_1_event[df_1_event['event_day'] == day]
    #     if df.empty:
    #         new_row = {'event_identity': UuidGenerator().get_new_uuid(), 'pub_identity': pub_id, 'event_day': day,
    #                    'event_detail': '', 'event_type': ''}
    #         df_1_event = df_1_event.append(new_row, ignore_index=True)

    print('df_1_event')
    print(df_1_event)

    df_1_event_list_json = df_1_event.to_json(orient='records')
    json_loads = json.loads(df_1_event_list_json)
    print('json_loads')
    print(json_loads)

    detail_json = json.loads(json.dumps(Detail().__dict__, default=lambda o: o.__dict__))
    review_json = json.loads(json.dumps(Review().__dict__, default=lambda o: o.__dict__))
    diary_json = json.loads(json.dumps(Diary().__dict__, default=lambda o: o.__dict__))
    station_json = json.loads(json.dumps(Station().__dict__, default=lambda o: o.__dict__))
    direction_json = json.loads(json.dumps(Direction().__dict__, default=lambda o: o.__dict__))
    event_json = json.loads(json.dumps(DailyEvent().__dict__, default=lambda o: o.__dict__))

    # photos_list = FilesPhoto().go_get_1_photo_request(pub_id, env_vars)
    photos_list = FilesPhoto().go_get_1_photo_request(df_detail_all, pub_id, env_vars)

    print('end EDIT')
    page = "edit"
    return render_template('05_edit_.html',
                           pub_1=pub_json,
                           events=json_loads,
                           photos_list=photos_list,
                           # daily_id=daily_id,
                           env_vars=env_vars,
                           photo=Photo(),
                           station=station_json,
                           direction=direction_json,
                           detail=detail_json,
                           review=review_json,
                           diary=diary_json,
                           event=event_json,
                           filters=filters,
                           page=page
                           )
