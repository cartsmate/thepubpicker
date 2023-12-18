
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
from app.models.photo.photo import Photo
from config import Configurations


@app.route("/", methods=['GET'])
@app.route("/summary/", methods=['GET'])
def summary():
    print('START summary')
    # # # GET ENVIRONMENTAL VARIABLES
    env_vars = Configurations().get_config2()

    # # # GET MODEL DISPLAY FORMATS
    model_formats = ControlsList().go_get_control_list()

    # # # GET RANDOM PUB
    df_details = Csv().go_get_details()

    no_of_details = df_details.shape[0]
    random_index = random.randrange(0, no_of_details)
    series_random_pub = df_details.iloc[random_index]

    random_pub_id = series_random_pub['pub_identity']
    df_pub = CsvSingle().go_get_1_pub(random_pub_id)
    pub_json = Dataframes().df_to_dict(df_pub)

    # # # FOR TESTING PURPOSES ONLY
    newdf = df_pub.transpose()
    print(newdf)
    print('END summary')
    redirect = "redirect_add()"
    text = "Add"
    name = "readonly"
    return render_template('01_summary.html',
                           pub=pub_json,
                           env_vars=env_vars,
                           model_formats=model_formats,
                           photo=Photo(),
                           redirect=redirect,
                           text=text,
                           name=name)
