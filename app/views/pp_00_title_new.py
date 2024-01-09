
import random
from app import app
import pandas as pd
from flask import render_template, request
from app.static.pythonscripts.objects import Objects
from app.static.pythonscripts.csv import Csv
from app.static.pythonscripts.csv_single import CsvSingle
from app.static.pythonscripts.dataframes import Dataframes
from app.static.pythonscripts.controls_list import ControlsList
from app.models.photo.photo import Photo
from config import Configurations


@app.route("/new/", methods=['GET'])
def new():
    print('start TITLE NEW')

    # # # GET ENVIRONMENTAL VARIABLES
    env_vars = Configurations().get_config2()

    # # # GET MODEL DISPLAY FORMATS
    model_formats = ControlsList().go_get_control_list()
    alias = Objects().go_get_alias()
    stations_directions_list = Csv().go_get_stations_directions_list()
    directions_list = Csv().go_get_directions_list()

    # # # GET ALL PUBS
    df_data = Csv().go_get_all()
    pub_json = Dataframes().df_to_dict(df_data)

    # # # GET DAILY PUB
    daily_id = Csv().go_get_details_daily()
    photos_list = CsvSingle().go_get_1_photo_request(daily_id, env_vars)
    # daily_id = df_details.iloc[0]['pub_identity']

    # # # GET URL ATTRIBUTES
    filters = request.args.get('filters')
    print('end TITLE')

    return render_template('00_title_new.html',
                           env_vars=env_vars,
                           model_formats=model_formats,
                           alias=alias,
                           daily_id=daily_id,
                           pub=pub_json,
                           photos_list=photos_list,
                           filters=filters,
                           directions_list=directions_list,
                           stations_directions_list=stations_directions_list,
                           )
