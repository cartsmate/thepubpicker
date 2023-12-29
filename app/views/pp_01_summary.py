
# get all pubs
# generate a random number
# use that number to get a pub
# create a complete class (collection of all model classes, join to review, diary, station, photo, direction)
# send class to html page


# get list of features
# send to html page
import random
from app import app
from flask import render_template
from app.static.pythonscripts.csv import Csv
from app.static.pythonscripts.csv_single import CsvSingle
from app.static.pythonscripts.dataframes import Dataframes
from app.static.pythonscripts.controls_list import ControlsList
from app.static.pythonscripts.s3 import S3
from app.models.photo.photo import Photo
from config import Configurations


@app.route("/summary/", methods=['GET'])
def summary():
    print('START summary')
    # # # GET ENVIRONMENTAL VARIABLES
    env_vars = Configurations().get_config2()
    print(env_vars)
    print('env_vars')
    # # # GET MODEL DISPLAY FORMATS
    model_formats = ControlsList().go_get_control_list()

    # # # GET DAILY PUB
    df_details_daily = Csv().go_get_details_daily()
    # det_list_day = ['pub_identity', 'timestamp']
    # df_details_daily = S3().s3_read('details', det_list_day)

    daily_id = df_details_daily.iloc[0]['pub_identity']

        # # # GET RANDOM PUB
        # df_details = Csv().go_get_details()

        # no_of_details = df_details.shape[0]
        # random_index = random.randrange(0, no_of_details)
        # series_random_pub = df_details.iloc[random_index]

        # pub_id = series_random_pub['pub_identity']
    df_pub = CsvSingle().go_get_1_pub(daily_id)

    pub_json = Dataframes().df_to_dict(df_pub)
    pub_list = []
    df_details = Csv().go_get_details()
    # det_list = ['pub_identity','station_identity','detail_name','address','category','colour','detail_deletion','detail_latitude','detail_longitude','extra','place','rank','website','url']
    # df_details = S3().s3_read('details', det_list)
    print(df_details)
    for index, row in df_details.iterrows():
        df_details['colour'] = '#005B8F'
        # print('row')
        # print(row)
        # draft_list = [row['pub_identity'], row['detail_name']]
        draft_obj = {'value': row['pub_identity'], 'label': row['detail_name']}
        pub_list.append(draft_obj)

    df_details.loc[df_details['pub_identity'] == daily_id, 'colour'] = "#FF7F50"
    df2 = df_details.loc[df_details['pub_identity'] == daily_id]
    pub_json = Dataframes().df_to_dict(df_details)
    newdf = df2.transpose()
    print(newdf)

    # photos_list = CsvSingle().go_get_1_photo_request(daily_id, env_vars)
    # photo_json = Dataframes().df_to_dict(df_photo)
    # # # FOR TESTING PURPOSES ONLY
    # newdf = df_pub.transpose()
    # print(newdf)
    print('END summary')
    redirect = "redirect_add()"
    text = "Add"
    name = "readonly"
    return render_template('01_summary.html',
                           pub=pub_json,
                           pub_list=pub_list,
                           # photos_list=photos_list,
                           daily_id=daily_id,
                           env_vars=env_vars,
                           model_formats=model_formats,
                           photo=Photo(),
                           redirect=redirect,
                           text=text,
                           name=name)
