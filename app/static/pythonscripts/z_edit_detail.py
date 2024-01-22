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

class EditDetail:

    def go_get_new_detail(self, pub_id):
        new_detail = Detail(pub_identity=pub_id, rank=Rank().value, place=Place().value, detail_deletion=DetailDeletion().value,
                         detail_name=DetailName().value, address=Address().value,
                         detail_latitude=DetailLatitude().value, detail_longitude=DetailLongitude().value,
                         station_identity=StationIdentity().value,
                         category=Category().value,
                         colour=Colour().value, extra=Extra().value)
        df_new_detail = pd.DataFrame([new_detail.__dict__])
        return df_new_detail

    def get_review_form(self):
        new_review = Review(review_identity=request.form['place'], review_deletion=request.form['review_deletion'],
                            pub_identity=request.form['pub_identity'],
                            brunch='true' if request.form.get('brunch') == 'on' else 'false',
                            dart='true' if request.form.get('dart') == 'on' else 'false',
                            entertain='true' if request.form.get('entertain') == 'on' else 'false',
                            favourite='true' if request.form.get('favourite') == 'on' else 'false',
                            garden='true' if request.form.get('garden') == 'on' else 'false',
                            history='true' if request.form.get('history') == 'on' else 'false',
                            late='true' if request.form.get('late') == 'on' else 'false',
                            music='true' if request.form.get('music') == 'on' else 'false',
                            pool='true' if request.form.get('pool') == 'on' else 'false',
                            quiz='true' if request.form.get('quiz') == 'on' else 'false',
                            roast='true' if request.form.get('roast') == 'on' else 'false',
                            sport='true' if request.form.get('sport') == 'on' else 'false')
        df_new_review = pd.DataFrame([new_review.__dict__])
        return df_new_review

    def get_detail_form(self):
        print('get detaoil form')
        new_detail = Detail(pub_identity=request.form['pub_identity'], place=request.form['place'],
                            detail_deletion=request.form['detail_deletion'], detail_name=request.form['detail_name'],
                            address=request.form['address'], detail_latitude=request.form['detail_latitude'],
                            detail_longitude=request.form['detail_longitude'],
                            station_identity=request.form['station_identity'],
                            category=request.form['category'].lower(), rank=request.form['rank'],
                            colour=request.form['colour'], extra=request.form['extra'])
        df_new_pub = pd.DataFrame([new_detail.__dict__])
        return df_new_pub

    def update_edit_review(self, df_reviews, pub_id):
        print('UPDATE edit detail')
        for review in list(Review().__dict__.keys()):
            if review in model_formats['icon_list']:
                print(review + ' : ' + str(request.form.get(review)))
                df_reviews.loc[df_reviews['pub_identity'] == pub_id, review] = 'true' \
                    if request.form.get(review) == 'on' \
                    else 'false'
            else:
                print(review + ' : ' + str(request.form.get(review)))
                df_reviews.loc[df_reviews['pub_identity'] == pub_id, review] = request.form[review]
        print('details model updated with form data')
        return df_reviews

    def update_edit_detail(self, df_details, pub_id):
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

    def add_new_review(self, df_details, df_new):
        print('ADD new detail')
        df_appended = pd.concat([df_details, df_new], ignore_index=True)
        # df_full = pd.merge(df_details, df_new, on='pub_identity')
        return df_appended

    def get_review(self, df_reviews, pub_id):
        # print(df_reviews.loc[df_reviews['quiz'] == pub_id])

        for review in list(Review().__dict__.keys()):
            if review in self.icon_list:
            # if review not in self.ignore_list:
                print(review + ' : ' + str(request.form.get(review)))
                df_reviews.loc[df_reviews['pub_identity'] == pub_id, review] = 'true' \
                    if request.form.get(review) == 'on' \
                    else 'false'
            else:
                print(review + ' : ' + str(request.form.get(review)))
                df_reviews.loc[df_reviews['pub_identity'] == pub_id, review] = request.form[review]
            # if review == 'detail':
            #     print(review + ' : ' + request.form[review])
            #     df_reviews.loc[df_reviews['pub_identity'] == pub_id, review] = request.form[review]
            # print(df_reviews.loc[df_reviews['quiz'] == pub_id])
        print('df_reviews')
        print(df_reviews.loc[df_reviews['pub_identity'] == pub_id])
        return df_reviews

    def get_diary(self, df_diary, pub_id):
        for diary in list(Diary().__dict__.keys()):
            df_diary.loc[df_diary['pub_identity'] == pub_id, diary] = request.form[diary]
            print(diary + ' : ' + request.form[diary])
        return df_diary
