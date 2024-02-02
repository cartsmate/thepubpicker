from app import app
import uuid
import json
import pandas as pd
from flask import render_template, request
from app.static.pythonscripts.csv import Csv
from app.models.detail.extra import Extra
from app.models.detail.rank import Rank
from app.models.detail.detail import Detail
from app.models.review.review import Review
from app.models.diary.diary import Diary
from app.models.station.station import Station
from app.models.direction.direction import Direction
from app.models.event.event import Event
from app.models.photo.photo import Photo
from app.static.pythonscripts.csv_single import CsvSingle
# from app.static.pythonscripts.new_pub import NewPub
from app.static.pythonscripts.files_detail import FilesDetail
from app.static.pythonscripts.files_events import FilesEvent
from app.static.pythonscripts.files_station import FilesStation
from app.static.pythonscripts.files_pub import FilesPub
from app.static.pythonscripts.dataframes import Dataframes
# from app.static.pythonscripts.controls_list import ControlsList
from app.static.pythonscripts.objects import Objects
from config import Configurations


@app.route("/add/", methods=['GET', 'POST'])
def add():
    print('START add')
    # back = request.args.get('back')
    # if back == None: back = 'none'

    place_id = request.args.get('place_id')

    # # # GET ENVIRONMENTAL VARIABLES
    env_vars = Configurations().get_config2()

    # # # GET MODEL DISPLAY NAMES
    alias = Objects().go_get_alias()

    # # # GET ALL PUBS
    df_data = FilesPub().go_get_pubs()
    pub_json = Dataframes().df_to_dict(df_data)

    df_new_pub = FilesPub().go_new_pub()

    if place_id is not None:
        print('call places api to get details from place_id')
        places_facits = CsvSingle().go_get_places(place_id, env_vars)
        try:
            df_new_pub['detail_name'] = places_facits['name']
        except:
            df_new_pub['detail_name'] = ""
        try:
            df_new_pub['website'] = places_facits['website']
        except:
            df_new_pub['website'] = ""
        try:
            df_new_pub['url'] = places_facits['url']
        except:
            df_new_pub['url'] = ""
        try:
            df_new_pub['address'] = places_facits['formatted_address']
        except:
            df_new_pub['address'] = ""
        try:
            df_new_pub['extra'] = places_facits['editorial_summary']['overview']
        except:
            df_new_pub['extra'] = ""
        try:
            df_new_pub['rank'] = places_facits['rating']
        except:
            df_new_pub['rank'] = ""
        try:
            df_new_pub['detail_latitude'] = places_facits['geometry']['location']['lat']
        except:
            df_new_pub['detail_latitude'] = 0
        try:
            df_new_pub['detail_longitude'] = places_facits['geometry']['location']['lng']
        except:
            df_new_pub['detail_longitude'] = 0
        try:
            if 'bar' in places_facits['types']:
                df_new_pub['category'] = 'bar'
            elif 'restaurant' in places_facits['types']:
                df_new_pub['category'] = 'restaurant'
            else:
                df_new_pub['category'] = 'other'
        except:
            df_new_pub['category'] = ""
    else:
        # # # GET NEW BLANK PUB TEMPLATE
        print('get empty new pub')
        df_detail_all = FilesDetail().go_get_details()
        avg_latitude = df_detail_all.loc[:, 'detail_latitude'].mean()
        avg_longitude = df_detail_all.loc[:, 'detail_longitude'].mean()
        df_new_pub['detail_latitude'] = avg_latitude
        df_new_pub['detail_longitude'] = avg_longitude

    print(df_new_pub.transpose())
    pub_new_json = Dataframes().df_to_dict(df_new_pub)

    # # # GET LIST OF STATIONS
    df_stations = FilesStation().go_get_stations()
    stations_json = Dataframes().df_to_dict(df_stations)

    pub_id = df_new_pub['pub_identity'].values[0]
    print('pub_id')
    print(pub_id)
    df_1_event = FilesEvent().go_get_1_event(pub_id)
    df_1_event_list_json = df_1_event.to_json(orient='records')
    json_loads = json.loads(df_1_event_list_json)

    detail_json = json.loads(json.dumps(Detail().__dict__, default=lambda o: o.__dict__))
    review_json = json.loads(json.dumps(Review().__dict__, default=lambda o: o.__dict__))
    diary_json = json.loads(json.dumps(Diary().__dict__, default=lambda o: o.__dict__))
    station_json = json.loads(json.dumps(Station().__dict__, default=lambda o: o.__dict__))
    direction_json = json.loads(json.dumps(Direction().__dict__, default=lambda o: o.__dict__))
    event_json = json.loads(json.dumps(Event().__dict__, default=lambda o: o.__dict__))

    print('END add')
    page = "add"
    return render_template('04_add_.html',
                           pub_all=pub_json,
                           pub_1=pub_new_json,
                           env_vars=env_vars,
                           alias=alias,
                           photo=Photo(),
                           stations=stations_json,
                           station=station_json,
                           direction=direction_json,
                           detail=detail_json,
                           review=review_json,
                           diary=diary_json,
                           events=json_loads,
                           page=page
                           )
