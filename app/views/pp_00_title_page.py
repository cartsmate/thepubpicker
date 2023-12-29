
# get all pubs
# generate a random number
# use that number to get a pub
# create a complete class (collection of all model classes, join to review, diary, station, photo, direction)
# send class to html page


# get list of features
# send to html page
import random
from app import app
import pandas as pd
from flask import render_template
from app.static.pythonscripts.csv import Csv
from app.static.pythonscripts.csv_single import CsvSingle
from app.static.pythonscripts.dataframes import Dataframes
from app.static.pythonscripts.controls_list import ControlsList
from app.models.photo.photo import Photo
from config import Configurations


@app.route("/", methods=['GET'])
def home():
    print('START title')
    # # # GET ENVIRONMENTAL VARIABLES
    env_vars = Configurations().get_config2()
    states_list = ['Alabama', 'Alaska', 'Arizona', 'Arkansas', 'California',
              'Colorado', 'Connecticut', 'Delaware', 'Florida', 'Georgia', 'Hawaii',
              'Idaho', 'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky', 'Louisiana',
              'Maine', 'Maryland', 'Massachusetts', 'Michigan', 'Minnesota',
              'Mississippi', 'Missouri', 'Montana', 'Nebraska', 'Nevada', 'New Hampshire',
              'New Jersey', 'New Mexico', 'New York', 'North Carolina', 'North Dakota',
              'Ohio', 'Oklahoma', 'Oregon', 'Pennsylvania', 'Rhode Island',
              'South Carolina', 'South Dakota', 'Tennessee', 'Texas', 'Utah', 'Vermont',
              'Virginia', 'Washington', 'West Virginia', 'Wisconsin', 'Wyoming'
              ];
    states_list = []
    pub_list = []
    df_details = Csv().go_get_details()
    for index, row in df_details.iterrows():
        print('row')
        print(row)
        draft_list = [row['pub_identity'], row['detail_name']]
        draft_obj = {'value': row['pub_identity'], 'label': row['detail_name']}
        states_list.append(draft_list)
        pub_list.append(draft_obj)
    states_list = [
        {'id': '1', 'name': "ActionScript"},
        {'id': '2', 'name': "Ruby"},
        {'id': '3', 'name': "Scala"},
        {'id': '4', 'name': "Scheme"}
    ];
    print('pub_list')
    print(pub_list)
    print('END home')

    return render_template('00_title_page.html',
                           env_vars=env_vars,
                           states_list=states_list,
                           pub_list=pub_list)
