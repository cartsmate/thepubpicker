
import random
from app import app
import json
import pandas as pd
from flask import render_template, request
from app.static.pythonscripts.objects import Objects
from app.static.pythonscripts.s3 import S3
from app.static.pythonscripts.csv import Csv
from app.static.pythonscripts.csv_single import CsvSingle
from app.static.pythonscripts.dataframes import Dataframes
# from app.static.pythonscripts.controls_list import ControlsList
from app.static.pythonscripts.files_detail import FilesDetail
from app.models.review.review import Review
from app.models.pub.pub import Pub
from app.models.event.event import Event
from app.static.pythonscripts.files_pub import FilesPub
from app.static.pythonscripts.files_photo import FilesPhoto
from app.static.pythonscripts.files_events import FilesEvent
from app.models.photo.photo import Photo
from config import Configurations


@app.route("/events/", methods=['GET'])
def events():
    print('start EVENTS')

    # # # GET ENVIRONMENTAL VARIABLES
    env_vars = Configurations().get_config2()

    stations_directions_list = Dataframes().go_get_stations_directions_list()
    directions_list = Dataframes().go_get_directions_list()

    # # # GET URL ATTRIBUTES
    filters = request.args.get('filters')

    # # # GET ALL EVENTS & ALL PUBS
    df_data = FilesPub().go_get_pubs()
    df_events = FilesEvent().go_get_events()
    df_events_with_pubs = pd.merge(df_events, df_data, on='pub_identity', how='left')

    event_json = Dataframes().df_to_dict(df_events_with_pubs)

    pub_obj_json = json.loads(json.dumps(Pub().__dict__, default=lambda o: o.__dict__))
    # print('pub_obj_json')
    # print(json.dumps(pub_obj_json, indent=4))
    review_json = json.loads(json.dumps(Review().__dict__, default=lambda o: o.__dict__))

    event_obj_json = json.loads(json.dumps(Event().__dict__, default=lambda o: o.__dict__))
    print('end EVENTS')

    return render_template('06_events_.html',
                           env_vars=env_vars,
                           color_theme='#808000',
                           # pub=pub_json,
                           event_obj=event_obj_json,
                           event=event_json,

                           directions_list=directions_list,
                           stations_directions_list=stations_directions_list,
                           review=review_json,
                           filters=filters,
                           )
