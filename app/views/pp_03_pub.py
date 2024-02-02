import json
from app import app
from flask import render_template, request
from app.static.pythonscripts.csv import Csv
from app.models.detail.detail import Detail
from app.models.review.review import Review
from app.models.diary.diary import Diary
from app.models.station.station import Station
from app.models.direction.direction import Direction
from app.models.event.event import Event
from app.models.photo.photo import Photo
from app.static.pythonscripts.files_pub import FilesPub
from app.static.pythonscripts.files_photo import FilesPhoto
from app.static.pythonscripts.files_events import FilesEvent
from app.static.pythonscripts.csv_single import CsvSingle
from app.static.pythonscripts.dataframes import Dataframes
# from app.static.pythonscripts.controls_list import ControlsList
from app.static.pythonscripts.objects import Objects
from config import Configurations


@app.route("/pub/", methods=['GET', 'POST'])
def pub():
    print('START pub')

    filters = request.args.get('filters')
    print('filters: ' + str(filters))

    # # # GET ENVIRONMENTAL VARIABLES
    env_vars = Configurations().get_config2()

    # # # GET MODEL DISPLAY NAMES
    alias = Objects().go_get_alias()
    full_alias = Objects().go_get_full_alias()

    # # # GET REQUESTED PUB
    pub_id = request.args.get('id')
    df_1_pub = FilesPub().go_get_1_pub(pub_id)
    pub_json = Dataframes().df_to_dict(df_1_pub)
    df_1_event = FilesEvent().go_get_1_event(pub_id)
    df_1_event_list_json = df_1_event.to_json(orient='records')
    json_loads = json.loads(df_1_event_list_json)

    # df_photo = CsvSingle().go_get_1_photo(pub_id)
    # photo_json = Dataframes().df_to_dict(df_photo)
    photos_list = FilesPhoto().go_get_1_photo_request(pub_id, env_vars)

    detail_json = json.loads(json.dumps(Detail().__dict__, default=lambda o: o.__dict__))
    review_json = json.loads(json.dumps(Review().__dict__, default=lambda o: o.__dict__))
    diary_json = json.loads(json.dumps(Diary().__dict__, default=lambda o: o.__dict__))
    station_json = json.loads(json.dumps(Station().__dict__, default=lambda o: o.__dict__))
    direction_json = json.loads(json.dumps(Direction().__dict__, default=lambda o: o.__dict__))
    event_json = json.loads(json.dumps(Event().__dict__, default=lambda o: o.__dict__))
    # print(photos_list)
    # # # FOR TESTING PURPOSES ONLY
    # newdf = df_pub.transpose()
    # print(newdf)
    print('END pub')
    name = "readonly"

    stations_directions_list = Dataframes().go_get_stations_directions_list()
    directions_list = Dataframes().go_get_directions_list()
    return render_template('03_pub_.html',
                           pub=pub_json,
                           events=json_loads,
                           event=event_json,
                           photos_list=photos_list,
                           # daily_id=daily_id,
                           env_vars=env_vars,
                           # model_formats=model_formats,
                           alias=alias,
                           full_alias=full_alias,
                           detail=detail_json,
                           # detail_list=detail_list,
                           review=review_json,
                           # review_list=review_list,
                           diary=diary_json,
                           # diary_list=diary_list,
                           station=station_json,
                           # station_list=station_list,
                           direction=direction_json,
                           # direction_list=direction_list,
                           directions_list=directions_list,
                           stations_directions_list=stations_directions_list,
                           photo=Photo(),
                           name=name,
                           # back=back,
                           filters=filters)
