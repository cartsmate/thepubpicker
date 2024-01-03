
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
@app.route("/home/", methods=['GET'])
def home():
    print('start TITLE')
    # # # GET ENVIRONMENTAL VARIABLES
    env_vars = Configurations().get_config2()
    print('end TITLE')

    return render_template('00_title_page.html',
                           env_vars=env_vars)
