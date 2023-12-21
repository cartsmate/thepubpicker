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
from app.static.pythonscripts.new_pub import NewPub
from app.static.pythonscripts.files_detail import FilesDetail
from app.static.pythonscripts.dataframes import Dataframes
from app.static.pythonscripts.controls_list import ControlsList
from app.static.pythonscripts.objects import Objects
from config import Configurations


@app.route("/add/", methods=['GET'])
def add():
    print('START add')
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

    # # # GET NEW BLANK PUB TEMPLATE
    df_new_pub = NewPub().go_new_pub()
    df_detail_all = Csv().go_get_details()
    avg_latitude = df_detail_all.loc[:, 'detail_latitude'].mean()
    avg_longitude = df_detail_all.loc[:, 'detail_longitude'].mean()
    df_new_pub['detail_latitude'] = avg_latitude
    df_new_pub['detail_longitude'] = avg_longitude
    pub_new_json = Dataframes().df_to_dict(df_new_pub)

    # # # GET LIST OF STATIONS
    df_stations = Csv().go_get_stations()
    stations_json = Dataframes().df_to_dict(df_stations)

    # # # FOR TESTING PURPOSES ONLY
    # newdf = df_new_pub.transpose()
    # print(newdf)
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
                           stations=stations_json)
