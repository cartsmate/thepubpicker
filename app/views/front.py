import base64
import gzip
import uuid
import json
import binascii
from flask import render_template, request, make_response
from app import app
import random
from config import Configurations
from app.static.pythonscripts.dataframes import Dataframes
from app.static.pythonscripts.csv import Csv
from app.static.pythonscripts.s3 import S3
from app.static.pythonscripts.objects import Objects
from app.static.pythonscripts.controls_list import ControlsList
from app.static.pythonscripts.compress import Compress
from app.models.review.review import Review


@app.route("/", methods=['GET', 'POST'])
@app.route("/front/", methods=['GET'])
def front():
    total_list_obj = ControlsList().go_get_control_list()
    print('front/: ')
    df_all_data = Csv().go_get_all_data()
    no_of_pubs = df_all_data.shape[0]
    random_index = random.randrange(0, no_of_pubs)
    series_random_pub = df_all_data.iloc[random_index]
    print(series_random_pub)
    _dict_random_pub = Dataframes().series_to_dict(series_random_pub)
    diary_headers = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday']

    # print("config2['google_key']")
    # print(config2['google_key'])
    return render_template('front.html',
                           diary_headers=diary_headers,
                           total_list_obj=total_list_obj,
                           random_pub_id=_dict_random_pub)
