import os
import uuid
import pandas as pd
from flask import request
from config import Configurations
from app.static.pythonscripts.csv import Csv
from app.models.review.review import Review
from app.models.diary.diary import Diary
from app.models.detail.rank import Rank
from app.models.detail.detail_deletion import DetailDeletion
from app.models.detail.detail import Detail
from app.models.detail.place import Place
from app.models.detail.colour import Colour
from app.models.detail.category import Category
from app.models.detail.detail_name import DetailName
from app.models.detail.detail_longitude import DetailLongitude
from app.models.detail.detail_latitude import DetailLatitude
from app.models.detail.extra import Extra
from app.models.detail.address import Address
from app.models.station.station_identity import StationIdentity
from app.static.pythonscripts.controls_list import ControlsList
from app.models.photo.photo_identity import PhotoIdentity
from app.static.pythonscripts.uuid_generater import UuidGenerator

config = Configurations().get_config()
config2 = Configurations().get_config2()
directory_path = config2['directory_path']
model_formats = ControlsList().go_get_control_list()

class FilesDetail:

    def new_detail(self, pub_id):
        new_detail = Detail(pub_identity=pub_id,
                            station_identity=StationIdentity().value, detail_name=DetailName().value,
                            address=Address().value, category=Category().value,
                            colour=Colour().value, detail_deletion=DetailDeletion().value,
                            detail_latitude=DetailLatitude().value,
                            detail_longitude=DetailLongitude().value, extra=Extra().value,
                            place=Place().value, rank=Rank().value)
        df_new_detail = pd.DataFrame([new_detail.__dict__])
        return df_new_detail

    def form_detail(self):
        print('get detail form')
        new_detail = Detail(pub_identity=request.form['pub_identity'],
                            station_identity=request.form['station_identity'], detail_name=request.form['detail_name'],
                            address=request.form['address'], category=request.form['category'].lower(),
                            colour=request.form['colour'], detail_deletion=request.form['detail_deletion'],
                            detail_latitude=request.form['detail_latitude'],
                            detail_longitude=request.form['detail_longitude'], extra=request.form['extra'],
                            place=request.form['place'], rank=request.form['rank'])
        df_new_pub = pd.DataFrame([new_detail.__dict__])
        return df_new_pub

    def update_detail_df(self, df_details, pub_id):
        print('UPDATE edit detail')
        for detail in list(Detail().__dict__.keys()):
            print(detail)
            print(detail + ' : ' + request.form[detail])
            df_details.loc[df_details['pub_identity'] == pub_id, detail] = request.form[detail]
        print('details model updated with form data')
        return df_details

    def add_detail_df(self, df_details, df_new):
        print('ADD new detail')
        df_appended = pd.concat([df_details, df_new], ignore_index=True)
        # df_full = pd.merge(df_details, df_new, on='pub_identity')
        return df_appended

    def update_detail_csv(self, df_updated_details):
        print('updating detail csv')
        print(df_updated_details)
        df_updated_details.to_csv(directory_path + '/files/details.csv', index=False, sep=',', encoding='utf-8')
        print('csv updated')
        return df_updated_details
