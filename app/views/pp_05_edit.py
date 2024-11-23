from app import app
from flask import render_template, request

from app.models.photo.photo import Photo

from app.static.pythonscripts.files_pub import FilesPub
from app.static.pythonscripts.files_photo import FilesPhoto
from app.static.pythonscripts.model_metadata import ModelMetadata
from app.static.pythonscripts.source_data import SourceData
from config import *


@app.route("/edit/", methods=['GET'])
def edit():
    # # # GET REQUESTED PUB
    pub_id = request.args.get('id')
    filters = request.args.get('filters')

    # # # GET ENVIRONMENTAL VARIABLES
    env_vars = Configurations.get_config()

    # GET DATA FROM SOURCE (DETERMINED BY CONFIG)
    source_data = SourceData().get_source_data(env_vars)

    pub_json = FilesPub().get_pub_1(source_data['df_pub'], pub_id).to_dict(orient='records')
    df_1_event_list_json = (source_data['df_daily_event_all'].loc[source_data['df_daily_event_all']['pub_identity'] == pub_id]
                            .to_json(orient='records'))
    photos_list = FilesPhoto().go_get_1_photo_request(source_data['df_pub'], pub_id, env_vars)
    json_loads = json.loads(df_1_event_list_json)

    # # # GET MODEL METADATA # # #
    models_json = ModelMetadata.get_model_metadata()

    return render_template('05_edit_.html',
                           pub_1=pub_json,
                           events=json_loads,
                           photos_list=photos_list,
                           env_vars=env_vars,
                           photo=Photo(),
                           station=models_json['station_json'],
                           direction=models_json['direction_json'],
                           detail=models_json['detail_json'],
                           review=models_json['review_json'],
                           diary=models_json['diary_json'],
                           event=models_json['event_json'],
                           filters=filters,
                           page="edit"
                           )
