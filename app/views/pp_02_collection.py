import base64
import gzip
import uuid
import json
import binascii
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
    # # # GET ENVIRONMENTAL VARIABLES
    env_vars = Configurations().get_config2()

    # # # GET MODEL DISPLAY FORMATS
    model_formats = ControlsList().go_get_control_list()

    # # # GET ALL PUBS WITH FEATURE
    feature = request.args.get('feature')
    if feature is not None:
        print('{} has been selected'.format(feature))
        df_data = CsvFeature().go_get_1_feature(feature)

    # # # OR GET ALL PUBS
    else:
        print('no feature')
        df_data = Csv().go_get_all()

    # # # FOR TESTING PURPOSES ONLY
    print('df_data')
    print(df_data)
    # newdf = df_data.transpose()
    # print(newdf)

    pub_json = Dataframes().df_to_dict(df_data)

    headers = df_data.columns
    stations_directions_list = Csv().go_get_stations_directions_list()
    directions_list = Csv().go_get_directions_list()
    visible = Objects().go_get_visible()
    alias = Objects().go_get_alias()
    diary_headers = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday']
    print('END collection')
    return render_template('02_collection.html',
                           pub=pub_json,
                           env_vars=env_vars,
                           model_formats=model_formats,
                           alias=alias,
                           visible=visible)
