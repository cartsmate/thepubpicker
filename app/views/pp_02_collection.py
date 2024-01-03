import base64
import gzip
import uuid
import json
import binascii
import numpy as np
from flask import render_template, request, make_response
from app import app
from config import Configurations
from app.static.pythonscripts.dataframes import Dataframes
from app.static.pythonscripts.csv import Csv
from app.static.pythonscripts.csv_single_feature import CsvFeature
from app.static.pythonscripts.s3 import S3
from app.static.pythonscripts.objects import Objects
from app.static.pythonscripts.controls_list import ControlsList
from app.static.pythonscripts.compress import Compress
from app.models.review.review import Review

config = Configurations().get_config()
config2 = Configurations().get_config2()


@app.route("/collection/", methods=['GET', 'POST'])
def collection():
    print('START collection')
    back = request.args.get('back')
    back_id = request.args.get('back_id')
    if back == None: back = 'none'

    # # # GET ENVIRONMENTAL VARIABLES
    env_vars = Configurations().get_config2()

    # # # GET MODEL DISPLAY FORMATS
    model_formats = ControlsList().go_get_control_list()

    # # # GET DAILY PUB
    df_details = Csv().go_get_details_daily()
    daily_id = df_details.iloc[0]['pub_identity']

    # # # DETECT REQUEST FOR FEATURE OR STATION
    feature = request.args.get('feature')
    station = request.args.get('station_id')

    # # # GET ALL PUBS
    df_data = Csv().go_get_all()
    pub_json = Dataframes().df_to_dict(df_data)

    headers = df_data.columns
    stations_directions_list = Csv().go_get_stations_directions_list()
    directions_list = Csv().go_get_directions_list()
    visible = Objects().go_get_visible()
    alias = Objects().go_get_alias()
    diary_headers = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday']
    review_list = []
    for k, v in Review().__dict__.items():
        review_list.append(v.name)

    print('END collection')
    return render_template('02_collection.html',
                           pub=pub_json,
                           daily_id=daily_id,
                           env_vars=env_vars,
                           model_formats=model_formats,
                           alias=alias,
                           visible=visible,
                           feature=feature,
                           station=station,
                           review_list=review_list,
                           review=Review(),
                           directions_list=directions_list,
                           stations_directions_list=stations_directions_list,
                           back=back, back_id=back_id
                           )
