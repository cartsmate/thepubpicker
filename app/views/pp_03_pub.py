from app import app
from flask import render_template, request, session, redirect, url_for

from app.models.photo.photo import Photo

from app.static.pythonscripts.files_pub import FilesPub
from app.static.pythonscripts.pub_get import GetPub
from app.static.pythonscripts.model_metadata import ModelMetadata
from app.static.pythonscripts.source_data import SourceData
from config import *


def get_csv_data(model):
    data = GetPub().get_all(model)
    return data


@app.route("/pub/", methods=['GET', 'POST'])
def pub():
    # # # GET ENVIRONMENTAL VARIABLES
    env_vars = Configurations.get_config()

    # CONFIRM THAT PAGE IS A REDIRECT FROM HOME
    if env_vars['session_key'] in session.values():
        print('START pub')

        filters = request.args.get('filters')

        # # # GET REQUESTED PUB
        pub_id = request.args.get('id')

        # GET DATA FROM SOURCE (DETERMINED BY CONFIG)
        source_data = SourceData().get_source_data(env_vars)
        pub_json = FilesPub().get_pub_1(source_data['df_pub'], pub_id).to_dict(orient='records')
        df_1_event_list_json = source_data['df_daily_event_all'].loc[source_data['df_daily_event_all']['pub_identity'] == pub_id].to_json(orient='records')
        json_loads = json.loads(df_1_event_list_json)

        # # # GET MODEL METADATA # # #
        models_json = ModelMetadata.get_model_metadata()

        print('END pub')
        name = "readonly"
        page = "pub"

        return render_template('03_pub_.html',
                               pub_1=pub_json,
                               events=json_loads,
                               event=models_json['event_json'],
                               photos_list=source_data['photos_list'],
                               env_vars=env_vars,
                               detail=models_json['detail_json'],
                               review=models_json['review_json'],
                               diary=models_json['diary_json'],
                               station=models_json['station_json'],
                               direction=models_json['direction_json'],
                               directions_list=source_data['directions_list'],
                               stations_directions_list=source_data['stations_directions_list'],
                               photo=Photo(),
                               name=name,
                               filters=filters,
                               page=page,)
    else:
        return redirect(url_for('home'))
