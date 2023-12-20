from app import app
from flask import render_template, request
from app.static.pythonscripts.csv import Csv
from app.models.detail.detail import Detail
from app.models.review.review import Review
from app.models.diary.diary import Diary
from app.models.station.station import Station
from app.models.direction.direction import Direction
from app.models.photo.photo import Photo
from app.static.pythonscripts.csv_single import CsvSingle
from app.static.pythonscripts.dataframes import Dataframes
from app.static.pythonscripts.controls_list import ControlsList
from app.static.pythonscripts.objects import Objects
from config import Configurations


@app.route("/pub/", methods=['GET', 'POST'])
def pub():
    print('START pub')
    # # # GET ENVIRONMENTAL VARIABLES
    env_vars = Configurations().get_config2()

    # # # GET MODEL DISPLAY FORMATS
    model_formats = ControlsList().go_get_control_list()

    # # # GET DAILY PUB
    df_details = Csv().go_get_details_daily()
    daily_id = df_details.iloc[0]['pub_identity']

    # # # GET MODEL DISPLAY NAMES
    alias = Objects().go_get_alias()

    # # # GET REQUESTED PUB
    pub_id = request.args.get('id')
    df_pub = CsvSingle().go_get_1_pub(pub_id)

    pub_json = Dataframes().df_to_dict(df_pub)

    df_photo = CsvSingle().go_get_1_photo(pub_id)
    photo_json = Dataframes().df_to_dict(df_photo)

    # # # FOR TESTING PURPOSES ONLY
    newdf = df_pub.transpose()
    print(newdf)
    print('END pub')
    name = "readonly"
    return render_template('03_pub.html',
                           pub=pub_json,
                           photos=photo_json,
                           daily_id=daily_id,
                           env_vars=env_vars,
                           model_formats=model_formats,
                           alias=alias,
                           detail=Detail(),
                           review=Review(),
                           diary=Diary(),
                           station=Station(),
                           direction=Direction(),
                           photo=Photo(),
                           name=name)