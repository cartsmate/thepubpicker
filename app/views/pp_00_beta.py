
import random
from app import app
import pandas as pd
from flask import render_template, request
from app.static.pythonscripts.objects import Objects
from app.static.pythonscripts.csv import Csv
from app.static.pythonscripts.csv_single import CsvSingle
from app.static.pythonscripts.dataframes import Dataframes
from app.static.pythonscripts.controls_list import ControlsList
from app.models.photo.photo import Photo
from config import Configurations


@app.route("/beta/", methods=['GET'])
def beta():


    return render_template('00_beta.html'
                           )
