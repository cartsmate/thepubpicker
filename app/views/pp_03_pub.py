import json
from app import app
from flask import render_template, request
# from app.static.pythonscripts.csv import Csv
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
# from app.static.pythonscripts.csv_single import CsvSingle
from app.static.pythonscripts.dataframes import Dataframes
# from app.static.pythonscripts.controls_list import ControlsList
# from app.static.pythonscripts.objects import Objects
from config import Configurations


@app.route("/pub/", methods=['GET', 'POST'])
def pub():
    print('START pub')

    filters = request.args.get('filters')

    # # # GET ENVIRONMENTAL VARIABLES
    env_vars = Configurations().get_config2()

    # # # GET REQUESTED PUB
    pub_id = request.args.get('id')
    df_1_pub = FilesPub().get_pub_1(pub_id)
    pub_json = df_1_pub.to_dict(orient='records')
    print(pub_json)

    df_1_event = FilesEvent().get_event_1(pub_id)
    df_1_event_list_json = df_1_event.to_json(orient='records')
    json_loads = json.loads(df_1_event_list_json)
    print(json_loads)

    photos_list = FilesPhoto().go_get_1_photo_request(pub_id, env_vars)

    detail_json = json.loads(json.dumps(Detail().__dict__, default=lambda o: o.__dict__))
    review_json = json.loads(json.dumps(Review().__dict__, default=lambda o: o.__dict__))
    diary_json = json.loads(json.dumps(Diary().__dict__, default=lambda o: o.__dict__))
    station_json = json.loads(json.dumps(Station().__dict__, default=lambda o: o.__dict__))
    direction_json = json.loads(json.dumps(Direction().__dict__, default=lambda o: o.__dict__))
    event_json = json.loads(json.dumps(Event().__dict__, default=lambda o: o.__dict__))

    print('END pub')
    name = "readonly"
    page = "pub"
    stations_directions_list = Dataframes().go_get_stations_directions_list()
    directions_list = Dataframes().go_get_directions_list()
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
                           page=page)
