
import uuid
from flask import render_template, request
from app import app
from config import Configurations
from app.static.pythonscripts.dataframes import Dataframes
from app.static.pythonscripts.csv import Csv
from app.static.pythonscripts.s3 import S3
from app.static.pythonscripts.objects import Objects
from app.static.pythonscripts.controls_list import ControlsList
from app.models.review.review import Review

config = Configurations().get_config()
config2 = Configurations().get_config2()


@app.route("/", methods=['GET', 'POST'])
@app.route("/home/", methods=['GET', 'POST'])
def home():

    total_list_obj = ControlsList().go_get_control_list()

    counter = S3().go_get_counter()

    all_data = Csv().go_get_all_data()
    all_data_json = Dataframes().df_to_dict(all_data)
    headers = list(all_data.columns)
    headers.append('distance')

    stations_directions_list = Csv().go_get_stations_directions_list()

    directions_list = Csv().go_get_directions_list()

    visible = Objects().go_get_visible()
    alias = Objects().go_get_alias()

    # pub_id = uuid.uuid4()
    diary_headers = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday']

    if request.method == 'GET':
        print('home/: GET')
        return render_template('home.html', pub_id='0',
                               all_data=all_data_json,
                               headers=headers,
                               stations_directions_list=stations_directions_list,
                               directions_list=directions_list,
                               diary_headers=diary_headers,
                               visible=visible,
                               total_list_obj=total_list_obj,
                               config2=config2, form_type='home', alias=alias,
                               config=config, google_key=config2['google_key'],
                               counter=counter,
                               review_obj=Review(uuid.uuid4())
                               )

    if request.method == 'POST':
        pub_id = request.args.get('pub_id')
        print('home/: POST: ' + pub_id)
        return render_template('home.html', pub_id=pub_id,
                               all_data=all_data_json,
                               stations_directions_list=stations_directions_list,
                               diary_headers=diary_headers, headers=headers, visible=visible,
                               total_list_obj=total_list_obj,
                               directions_list=directions_list,
                               config=config, google_key=config2['google_key'],
                               config2=config2, form_type='home', alias=alias,
                               counter=counter,
                               review_obj=Review(pub_id)
                               )
