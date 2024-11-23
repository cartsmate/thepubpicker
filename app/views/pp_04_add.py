from app import app
from flask import render_template, request

from app.models.station.station import Station
from app.models.daily_event.daily_event import DailyEvent

from app.static.pythonscripts.files_pub import FilesPub
from app.static.pythonscripts.model_metadata import ModelMetadata
from app.static.pythonscripts.populate_new import PopulateNew
from app.static.pythonscripts.pub_get import GetPub

from config import *


@app.route("/add/", methods=['GET', 'POST'])
def add():
    place_id = request.args.get('place_id')

    # # # GET ENVIRONMENTAL VARIABLES
    env_vars = Configurations.get_config()

    # # # GET ALL PUBS
    df_new_pub = FilesPub().new_pub()
    pub_new_json = PopulateNew.populate_form(df_new_pub, place_id)

    # # # GET LIST OF STATIONS
    stations_json = GetPub().get_all(Station()).to_dict(orient='records')

    # # # GET NEW PUB
    pub_id = df_new_pub.iloc[0]['pub_identity']
    df_1_event_list_json = GetPub().get_1(DailyEvent(), pub_id).to_json(orient='records')
    json_loads = json.loads(df_1_event_list_json)

    # # # GET MODEL METADATA # # #
    models_json = ModelMetadata.get_model_metadata()

    return render_template('04_add_.html',
                           pub_1=pub_new_json,
                           env_vars=env_vars,
                           stations=stations_json,
                           station=models_json['station_json'],
                           direction=models_json['direction_json'],
                           detail=models_json['detail_json'],
                           review=models_json['review_json'],
                           diary=models_json['diary_json'],
                           event=models_json['event_json'],
                           events=json_loads,
                           page="add"
                           )
