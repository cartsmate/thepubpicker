from app import app
import uuid
import json
import pandas as pd
from flask import render_template, request

from app.models.detail.detail import Detail
from app.models.review.review import Review
from app.models.diary.diary import Diary
from app.models.station.station import Station
from app.models.direction.direction import Direction
from app.models.event.event import Event
from app.models.photo.photo import Photo

from app.static.pythonscripts.files_pub import FilesPub
from app.static.pythonscripts.pub_add import AddPub
from app.static.pythonscripts.external_requests import ExternalRequests
from app.static.pythonscripts.pub_get import GetPub

from config import Configurations


@app.route("/add/", methods=['GET', 'POST'])
def add():
    print('START add')
    place_id = request.args.get('place_id')

    # # # GET ENVIRONMENTAL VARIABLES
    env_vars = Configurations().get_config2()

    # # # GET ALL PUBS
    df_pub_all = FilesPub().get_pub_all()
    pub_json = df_pub_all.to_dict(orient='records')

    df_new_pub = FilesPub().new_pub()
    # print('df_new_pub')
    # print(df_new_pub.T)

    if place_id is not None:
        # # # populate pub data from GOOGLE PLACES API # # #
        print('call places api to get details from place_id')
        places_response = ExternalRequests().go_get_places(place_id, env_vars)
        places_response
        # df_place = pd.json_normalize(places_response, max_level=1)

        for key, value in Detail().__dict__.items():
            if value.places_field is not None:
                try:
                    df_new_pub[value.name] = places_response[value.places_field]
                except:
                    df_new_pub[value.name] = ""
        try:
            df_new_pub['extra'] = places_response['editorial_summary']['overview']
        except:
            df_new_pub['extra'] = " "
        df_new_pub['detail_latitude'] = places_response['geometry']['location']['lat']
        df_new_pub['detail_longitude'] = places_response['geometry']['location']['lng']
    else:
        # # # populate with lat/lng averages and empty pub template # # #

        df_detail_all = GetPub().get_all(Detail())
        avg_latitude = df_detail_all.loc[:, 'detail_latitude'].mean()
        avg_longitude = df_detail_all.loc[:, 'detail_longitude'].mean()
        df_new_pub['detail_latitude'] = avg_latitude
        df_new_pub['detail_longitude'] = avg_longitude

    # df_new_diary = AddPub().add_pub(Diary(), pub_id)
    # df_pub_with_event = pd.merge(df_new_pub, df_new_diary, on='pub_identity', how='left')

    print(df_new_pub.transpose())
    pub_new_json = df_new_pub.to_dict(orient='records')

    # # # GET LIST OF STATIONS
    stations_json = GetPub().get_all(Station()).to_dict(orient='records')

    pub_id = df_new_pub.iloc[0]['pub_identity']
    df_1_event_list_json = GetPub().get_1(Event(), pub_id).to_json(orient='records')
    json_loads = json.loads(df_1_event_list_json)

    detail_json = json.loads(json.dumps(Detail().__dict__, default=lambda o: o.__dict__))
    review_json = json.loads(json.dumps(Review().__dict__, default=lambda o: o.__dict__))
    diary_json = json.loads(json.dumps(Diary().__dict__, default=lambda o: o.__dict__))
    station_json = json.loads(json.dumps(Station().__dict__, default=lambda o: o.__dict__))
    direction_json = json.loads(json.dumps(Direction().__dict__, default=lambda o: o.__dict__))
    event_json = json.loads(json.dumps(Event().__dict__, default=lambda o: o.__dict__))

    print('END add')
    page = "add"
    return render_template('04_add_.html',
                           # pub_all=pub_json,
                           pub_1=pub_new_json,
                           env_vars=env_vars,
                           # alias=alias,
                           # photo=Photo(),
                           stations=stations_json,
                           station=station_json,
                           direction=direction_json,
                           detail=detail_json,
                           review=review_json,
                           diary=diary_json,
                           events=json_loads,
                           page=page
                           )
