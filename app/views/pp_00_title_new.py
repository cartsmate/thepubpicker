
import random
from app import app
import json
import pandas as pd
from flask import render_template, request
from app.static.pythonscripts.objects import Objects
from app.static.pythonscripts.s3 import S3
from app.static.pythonscripts.csv import Csv
from app.static.pythonscripts.csv_single import CsvSingle
from app.static.pythonscripts.dataframes import Dataframes
# from app.static.pythonscripts.controls_list import ControlsList
from app.static.pythonscripts.files_detail import FilesDetail
from app.models.review.review import Review
from app.models.pub.pub import Pub
from app.static.pythonscripts.files_pub import FilesPub
from app.static.pythonscripts.files_photo import FilesPhoto
from app.static.pythonscripts.files_events import FilesEvent
from app.models.photo.photo import Photo
from config import Configurations


@app.route("/", methods=['GET'])
@app.route("/new/", methods=['GET'])
def new():
    print('start TITLE NEW')

    # # # GET ENVIRONMENTAL VARIABLES
    env_vars = Configurations().get_config2()

    # # # GET MODEL DISPLAY FORMATS
    # model_formats = ControlsList().go_get_control_list()
    alias = Objects().go_get_alias()
    full_alias = Objects().go_get_full_alias()
    stations_directions_list = Dataframes().go_get_stations_directions_list()
    directions_list = Dataframes().go_get_directions_list()

    # # # GET ALL PUBS
    df_data = FilesPub().go_get_pubs()
    pub_json = Dataframes().df_to_dict(df_data)

    df_events = FilesEvent().go_get_events()
    event_json = Dataframes().df_to_dict(df_events)

    df_pub_ent = pd.merge(df_data, df_events, on='pub_identity', how='left')
    pub_ent_json = Dataframes().df_to_dict(df_pub_ent)

    # # # GET DAILY PUB
    daily_id = FilesDetail().go_get_details_daily()

    df_sample = df_data.loc[df_data['pub_identity'] == daily_id]
    # sample_json = Dataframes().df_to_dict(df_sample)
    # print(sample_json)
    # print(json.dumps(sample_json, indent=4))
    df_sample_T = df_sample.transpose()
    print('df_sample transposed')
    print(df_sample_T)
    # print('daily_id: ' + str(daily_id))
    # print('env_vars')
    # print(env_vars)
    photos_list = FilesPhoto().go_get_1_photo_request(daily_id, env_vars)
    # print('photos list: ' + str(photos_list))
    # daily_id = df_details.iloc[0]['pub_identity']

    # # # GET URL ATTRIBUTES
    filters = request.args.get('filters')

    # # # GET COUNTER
    if env_vars['env'] == 'qual':
        counter = Csv().go_get_counter()
        new_counter = Csv().go_write_counter(counter + 1)
    else:
        counter = S3().go_get_counter('counter', ['pub_counter'])
        new_counter = counter + 1
        data = {'pub_counter': [new_counter]}
        df_updated_counter = pd.DataFrame(data)
        # print('df_updated_counter')
        # print(df_updated_counter)
        s3_resp = S3().s3_write(df_updated_counter, 'counter_prod.csv')

    counter6 = str(new_counter).zfill(6)

    # no_of_reviews = len(model_formats['icon_list'])
    # print('no_of_reviews: ' + str(no_of_reviews))

    # review_json = json.dumps(Review().__dict__)
    review_json = json.loads(json.dumps(Review().__dict__, default=lambda o: o.__dict__))
    # print('review_json')
    # print(review_json)
    pub_obj_json = json.loads(json.dumps(Pub().__dict__, default=lambda o: o.__dict__))
    # print('pub_obj_json')
    # print(json.dumps(pub_obj_json, indent=4))

    print('end HOME')
    return render_template('02_home_.html',
                           env_vars=env_vars,
                           color_theme='#808000',
                           # model_formats=model_formats,
                           alias=alias,
                           full_alias=full_alias,
                           daily_id=daily_id,
                           pub=pub_ent_json,
                           event=event_json,
                           review=review_json,
                           pub_obj=pub_obj_json,
                           photos_list=photos_list,
                           filters=filters,
                           directions_list=directions_list,
                           stations_directions_list=stations_directions_list,
                           counter=counter6,
                           # no_of_review=no_of_reviews
                           )
