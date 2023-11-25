from app import app
from flask import render_template, request
from app.static.pythonscripts.csv import Csv
from app.models.review.review import Review
from app.models.diary.diary import Diary
from app.static.pythonscripts.csv_single import CsvSingle
from app.static.pythonscripts.dataframes import Dataframes
from app.static.pythonscripts.controls_list import ControlsList
from app.static.pythonscripts.objects import Objects
from config import Configurations


@app.route("/", methods=['GET'])
@app.route("/pub/", methods=['GET'])
def pub():
    # # # GET ENVIRONMENTAL VARIABLES
    env_vars = Configurations().get_config2()

    # # # GET MODEL DISPLAY FORMATS
    model_formats = ControlsList().go_get_control_list()

    # # # GET MODEL DISPLAY NAMES
    alias = Objects().go_get_alias()

    # # # GET REQUESTED PUB
    pub_id = request.args.get('id')
    df_pub = CsvSingle().go_get_1_pub(pub_id)

    pub_json = Dataframes().df_to_dict(df_pub)

    # # # FOR TESTING PURPOSES ONLY
    newdf = df_pub.transpose()
    # print(newdf)

    return render_template('03_pub.html',
                           pub=pub_json,
                           env_vars=env_vars,
                           model_formats=model_formats,
                           alias=alias,
                           review=Review(),
                           diary=Diary())
