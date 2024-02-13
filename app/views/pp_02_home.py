
import random
from app import app
import json
import pandas as pd
from flask import render_template, request

from app.static.pythonscripts.s3 import S3

from app.static.pythonscripts.dataframes import Dataframes

from app.static.pythonscripts.files_daily import FilesDaily

from app.static.pythonscripts.files_counter import FilesCounter
from app.models.review.review import Review
from app.models.diary.diary import Diary
from app.models.event.event import Event
from app.models.pub.pub import Pub
from app.static.pythonscripts.pub_get import GetPub
from app.static.pythonscripts.files_pub import FilesPub
from app.static.pythonscripts.files_photo import FilesPhoto
# from app.static.pythonscripts.files_events import FilesEvent

from config import Configurations


@app.route("/", methods=['GET'])
@app.route("/home/", methods=['GET'])
def home():
    print('start HOME')
    print('')

    print('# # # GET FILTERS # # #')
    filters = request.args.get('filters')
    print('# # # END OF FILTERS # # #')
    print('')

    print('# # # GET ENVIRONMENTAL VARIABLES')
    env_vars = Configurations().get_config2()
    print('# # # END OF ENVIRONMENTAL VARIABLES # # #')
    print('')

    print('# # # GET MODEL DISPLAY FORMATS # # #')
    stations_directions_list = Dataframes().go_get_stations_directions_list()
    directions_list = Dataframes().go_get_directions_list()
    print('# # # END OF MODEL DISPLAY FORMATS # # #')
    print('')

    print('# # # GET ALL PUBS # # #')
    df_pub = FilesPub().get_pub_all()
    print('df_pub')
    print(df_pub)
    # df_event = FilesEvent().get_event_all()
    df_event = GetPub().get_all(Event())
    df_pub_with_event = pd.merge(df_pub, df_event, on='pub_identity', how='left')
    pub_ent_json = df_pub_with_event.to_dict(orient='records')
    print('# # # END OF GET ALL PUBS # # #')
    print('')

    print('# # # GET DAILY PUB # # #')
    daily_id = FilesDaily().go_get_details_daily()
    df_pub_1 = FilesPub().get_pub_1(daily_id)
    pub_1_json = df_pub_1.to_dict(orient='records')
    photos_list = FilesPhoto().go_get_1_photo_request(daily_id, env_vars)
    print(photos_list)
    print('# # # END OF GET DAILY PUB # # #')
    print('')

    print('# # # GET TIMEOUT LIST # # #')
    timeout_list = FilesDaily().get_timeout()
    print('timeout_list')
    print(timeout_list)
    print('df_pub')
    print(df_pub)
    # df_timeout = pd.merge(df_pub, df_timeout_list, on='pub_identity', how='inner')
    df_timeout = df_pub[df_pub['pub_identity'].isin(timeout_list)]
    # df_timeout = df_pub[df_pub['pub_identity'].isin(['7092252a-1dbb-435b-a339-aff889c58267'])]
    print('df_timeout')
    print(df_timeout)
    timeout_json = df_timeout.to_dict(orient='records')
    print('timeout_json')
    print(timeout_json)

    print('# # # END OF GET TIMEOUT LIST # # #')
    print('')

    print('# # # GET COUNTER # # #')
    if env_vars['env'] == 'qual':
        counter = FilesCounter().go_get_counter()
        new_counter = FilesCounter().go_write_counter(counter + 1)
    else:
        counter = S3().go_get_counter('counter', ['pub_counter'])
        new_counter = counter + 1
        data = {'pub_counter': [new_counter]}
        df_updated_counter = pd.DataFrame(data)
        s3_resp = S3().s3_write(df_updated_counter, 'counter_prod.csv')
    counter6 = str(new_counter).zfill(6)
    print('# # # END OF GET COUNTER # # #')
    print('')

    print('# # # GET MODEL OBJECTS # # #')
    review_json = json.loads(json.dumps(Review().__dict__, default=lambda o: o.__dict__))
    diary_json = json.loads(json.dumps(Diary().__dict__, default=lambda o: o.__dict__))
    pub_obj_json = json.loads(json.dumps(Pub().__dict__, default=lambda o: o.__dict__))
    print('# # # END OF GET MODEL OBJECTS # # #')
    print('')

    print('end HOME')
    return render_template('02_home_.html',
                           env_vars=env_vars,
                           color_theme='#808000',
                           daily_id=daily_id,
                           pub_1=pub_1_json,
                           pub_all=pub_ent_json,
                           # event=event_json,
                           review=review_json,
                           diary=diary_json,
                           pub_obj=pub_obj_json,
                           photos_list=photos_list,
                           filters=filters,
                           directions_list=directions_list,
                           stations_directions_list=stations_directions_list,
                           counter=counter6,
                           page='home',
                           timeout_pubs=timeout_json

                           # no_of_review=no_of_reviews
                           )
