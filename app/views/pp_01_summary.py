
# get all pubs
# generate a random number
# use that number to get a pub
# create a complete class (collection of all model classes, join to review, diary, station, photo, direction)
# send class to html page


# get list of features
# send to html page
import random
from app import app
from flask import render_template, request
from app.static.pythonscripts.csv import Csv
from app.static.pythonscripts.objects import Objects
from app.static.pythonscripts.csv_single import CsvSingle
from app.static.pythonscripts.dataframes import Dataframes
from app.static.pythonscripts.controls_list import ControlsList
from app.static.pythonscripts.s3 import S3
from app.models.photo.photo import Photo
from config import Configurations


@app.route("/summary/", methods=['GET'])
def summary():
    print('start SUMMARY')
    back = request.args.get('back')
    if back == None: back = 'none'
    # # # GET ENVIRONMENTAL VARIABLES
    env_vars = Configurations().get_config2()

    # # # GET MODEL DISPLAY FORMATS
    model_formats = ControlsList().go_get_control_list()

    # # # GET DAILY PUB
    # df_details_daily = Csv().go_get_details_daily()
    # daily_id = df_details_daily.iloc[0]['pub_identity']
    daily_id = Csv().go_get_details_daily()
    photos_list = CsvSingle().go_get_1_photo_request(daily_id, env_vars)

    pub_list = []
    df_details = Csv().go_get_details()
    for index, row in df_details.iterrows():
        draft_obj = {'value': row['pub_identity'], 'label': row['detail_name']}
        pub_list.append(draft_obj)
    #
    # df_details.loc[df_details['pub_identity'] == daily_id, 'colour'] = "#FF7F50"
    # pub_json = Dataframes().df_to_dict(df_details)

    # # # GET ALL PUBS
    df_data = Csv().go_get_all()
    pub_json = Dataframes().df_to_dict(df_data)

    stations_directions_list = Csv().go_get_stations_directions_list()
    directions_list = Csv().go_get_directions_list()

    # # # DETECT REQUEST FOR FEATURE OR STATION
    feature = request.args.get('feature')
    station = request.args.get('station_id')
    filters = request.args.get('filters')

    alias = Objects().go_get_alias()

    print('end SUMMARY')
    redirect = "redirect_add()"
    text = "Add"
    name = "readonly"
    return render_template('01_summary.html',
                           pub=pub_json,
                           pub_list=pub_list,
                           photos_list=photos_list,
                           daily_id=daily_id,
                           env_vars=env_vars,
                           model_formats=model_formats,
                           photo=Photo(),
                           redirect=redirect,
                           text=text,
                           name=name,
                           back=back,
                           directions_list=directions_list,
                           stations_directions_list=stations_directions_list,
                           feature=feature,
                           station=station,
                           filters=filters,
                           alias=alias
                           )
