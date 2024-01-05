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
    back = request.args.get('back')
    if back == None: back = 'none'

    filters = request.args.get('filters')
    print('filters')
    print(filters)
    # # # GET ENVIRONMENTAL VARIABLES
    env_vars = Configurations().get_config2()

    # # # GET MODEL DISPLAY FORMATS
    model_formats = ControlsList().go_get_control_list()

    # # # GET DAILY PUB
    # df_details = Csv().go_get_details_daily()
    # daily_id = df_details.iloc[0]['pub_identity']

    # # # GET MODEL DISPLAY NAMES
    alias = Objects().go_get_alias()

    # # # GET REQUESTED PUB
    pub_id = request.args.get('id')
    df_pub = CsvSingle().go_get_1_pub(pub_id)
    print(df_pub.transpose())
    pub_json = Dataframes().df_to_dict(df_pub)

    # df_photo = CsvSingle().go_get_1_photo(pub_id)
    # photo_json = Dataframes().df_to_dict(df_photo)
    photos_list = CsvSingle().go_get_1_photo_request(pub_id, env_vars)
    # print(photos_list)
    # # # FOR TESTING PURPOSES ONLY
    # newdf = df_pub.transpose()
    # print(newdf)
    print('END pub')
    name = "readonly"
    detail_list = []
    review_list = []
    diary_list = []
    station_list = []
    direction_list = []
    for k, v in Detail().__dict__.items():
        detail_list.append(v.name)
    for k, v in Review().__dict__.items():
        review_list.append(v.name)
    for k, v in Diary().__dict__.items():
        diary_list.append(v.name)
    for k, v in Station().__dict__.items():
        station_list.append(v.name)
    for k, v in Direction().__dict__.items():
        direction_list.append(v.name)
    stations_directions_list = Csv().go_get_stations_directions_list()
    directions_list = Csv().go_get_directions_list()
    return render_template('03_pub.html',
                           pub=pub_json,
                           photos_list=photos_list,
                           # daily_id=daily_id,
                           env_vars=env_vars,
                           model_formats=model_formats,
                           alias=alias,
                           detail=Detail(),
                           detail_list=detail_list,
                           review=Review(),
                           review_list=review_list,
                           diary=Diary(),
                           diary_list=diary_list,
                           station=Station(),
                           station_list=station_list,
                           direction=Direction(),
                           direction_list=direction_list,
                           directions_list=directions_list,
                           stations_directions_list=stations_directions_list,
                           photo=Photo(),
                           name=name,
                           back=back,
                           filters=filters)
