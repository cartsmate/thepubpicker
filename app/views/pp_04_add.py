from app import app
import uuid
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
from app.models.photo.photo import Photo
from app.static.pythonscripts.csv_single import CsvSingle
# from app.static.pythonscripts.new_pub import NewPub
from app.static.pythonscripts.files_detail import FilesDetail
from app.static.pythonscripts.files_pub import FilesPub
from app.static.pythonscripts.dataframes import Dataframes
from app.static.pythonscripts.controls_list import ControlsList
from app.static.pythonscripts.objects import Objects
from config import Configurations


@app.route("/add/", methods=['GET', 'POST'])
def add():
    print('START add')
    back = request.args.get('back')
    if back == None: back = 'none'
    # # # GET ENVIRONMENTAL VARIABLES
    env_vars = Configurations().get_config2()

    # # # GET MODEL DISPLAY FORMATS
    model_formats = ControlsList().go_get_control_list()

    # # # GET MODEL DISPLAY NAMES
    alias = Objects().go_get_alias()

    # # # GET ALL PUBS
    df_data = Csv().go_get_all()
    pub_json = Dataframes().df_to_dict(df_data)

    # # # GET DAILY PUB
    # df_details = Csv().go_get_details_daily()
    # daily_id = df_details.iloc[0]['pub_identity']

    df_new_pub = FilesPub().go_new_pub()
    # print(df_new_pub.transpose())
    # # # GET REQUESTED PUB (from place id)
    place_id = request.args.get('place_id')
    print('place_id')
    print(place_id)
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
        df_detail_all = Csv().go_get_details()
        avg_latitude = df_detail_all.loc[:, 'detail_latitude'].mean()
        avg_longitude = df_detail_all.loc[:, 'detail_longitude'].mean()
        df_new_pub['detail_latitude'] = avg_latitude
        df_new_pub['detail_longitude'] = avg_longitude

    print(df_new_pub.transpose())
    pub_new_json = Dataframes().df_to_dict(df_new_pub)

    # # # GET LIST OF STATIONS
    df_stations = Csv().go_get_stations()
    stations_json = Dataframes().df_to_dict(df_stations)

    # # # FOR TESTING PURPOSES ONLY
    newdf = df_new_pub.transpose()
    print(newdf)
    detail_list = []
    review_list = []
    diary_list = []
    station_list = []
    direction_list = []
    for k, v in Detail().__dict__.items():
        detail_list.append(v.name)
    for k, v in Review().__dict__.items():
        review_list.append(v.name)
    for k, v in Diary().__dict__.items():
        diary_list.append(v.name)
    for k, v in Station().__dict__.items():
        station_list.append(v.name)
    for k, v in Direction().__dict__.items():
        direction_list.append(v.name)

    print('END add')

    return render_template('04_add.html',
                           pub=pub_json,
                           pub_new=pub_new_json,
                           # daily_id=daily_id,
                           env_vars=env_vars,
                           model_formats=model_formats,
                           alias=alias,
                           detail=Detail(),
                           review=Review(),
                           diary=Diary(),
                           station=Station(),
                           direction=Direction(),
                           photo=Photo(),
                           stations=stations_json,
                           back=back,
detail_list=detail_list,
                           review_list=review_list,
                           diary_list=diary_list,
                           station_list=station_list,
                           direction_list=direction_list,
)