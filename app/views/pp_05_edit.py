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
from app.models.event.event import Event
from app.static.pythonscripts.files_pub import FilesPub
from app.static.pythonscripts.files_photo import FilesPhoto
from app.static.pythonscripts.files_events import FilesEvent
from app.static.pythonscripts.pub_get import GetPub
# from app.static.pythonscripts.csv_single import CsvSingle
from app.static.pythonscripts.dataframes import Dataframes
# from app.static.pythonscripts.controls_list import ControlsList
# from app.static.pythonscripts.objects import Objects
from config import Configurations


@app.route("/edit/", methods=['GET'])
def edit():
    print('start EDIT')

    # # # GET REQUESTED PUB
    pub_id = request.args.get('id')
    filters = request.args.get('filters')

    # # # GET ENVIRONMENTAL VARIABLES
    env_vars = Configurations().get_config2()

    df_pub = FilesPub().get_pub_1(pub_id)
    # df_pub = GetPub().get_1(Pub(), pub_id)
    pub_json = df_pub.to_dict(orient='records')

    # df_1_event = FilesEvent().get_event_1(pub_id)
    df_1_event = GetPub().get_1(Event(), pub_id)
    df_1_event_list_json = df_1_event.to_json(orient='records')
    json_loads = json.loads(df_1_event_list_json)

    detail_json = json.loads(json.dumps(Detail().__dict__, default=lambda o: o.__dict__))
    review_json = json.loads(json.dumps(Review().__dict__, default=lambda o: o.__dict__))
    diary_json = json.loads(json.dumps(Diary().__dict__, default=lambda o: o.__dict__))
    station_json = json.loads(json.dumps(Station().__dict__, default=lambda o: o.__dict__))
    direction_json = json.loads(json.dumps(Direction().__dict__, default=lambda o: o.__dict__))
    event_json = json.loads(json.dumps(Event().__dict__, default=lambda o: o.__dict__))

    photos_list = FilesPhoto().go_get_1_photo_request(pub_id, env_vars)

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
                           filters=filters,
                           page=page
                           )
