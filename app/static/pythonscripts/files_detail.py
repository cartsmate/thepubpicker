import os
import uuid
import random
import pandas as pd
from flask import request
from config import Configurations
from datetime import datetime, timedelta, date
# from app.static.pythonscripts.csv import Csv
from app.static.pythonscripts.s3 import S3
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
from app.models.detail.url import Url
from app.models.detail.website import Website
from app.models.station.station_identity import StationIdentity
# from app.static.pythonscripts.controls_list import ControlsList
from app.models.photo.photo_identity import PhotoIdentity
from app.static.pythonscripts.uuid_generater import UuidGenerator

config = Configurations().get_config()
config2 = Configurations().get_config2()
directory_path = config2['directory_path']
# model_formats = ControlsList().go_get_control_list()
env_vars = Configurations().get_config2()

class FilesDetail:

    def go_get_details(self):
        print('go get details')
        if env_vars['source'] == 'csv':
            df_details = pd.read_csv(directory_path + '/files/details.csv',
                                     dtype={'pub_identity': str, 'station_identity': str, 'detail_name': str,
                                            'address': str, 'category': str, 'colour': str, 'detail_deletion': str,
                                            'detail_latitude': float, 'detail_longitude': float, 'extra': str,
                                            'place': str, 'rank': float, 'website': str, 'url': str})
        else:
            attribute_list = ['pub_identity', 'station_identity', 'detail_name', 'address', 'category', 'colour',
                        'detail_deletion', 'detail_latitude', 'detail_longitude', 'extra', 'place', 'rank', 'website',
                        'url']
            df_details = S3().s3_read('details', attribute_list)

        return df_details

    def go_get_1_detail(self, pub_id):
        print('Go get 1 detail')
        df_details = self.go_get_details()
        df_1_detail = df_details.loc[df_details['pub_identity'] == pub_id]
        return df_1_detail

    def go_get_details_daily(self):
        print('go_get_details_daily')
        if env_vars['env'] == 'qual':
            df_details_day = pd.read_csv(directory_path + '/files/featured.csv',
                                         dtype={'pub_identity': str, 'timestamp': str})
        else:
            attribute_list = ['pub_identity', 'timestamp']
            df_details_day = S3().s3_read('featured', attribute_list)

        df_lastline = df_details_day.tail(1)

        previous_timestamp_str = df_lastline.iloc[0]['timestamp']


        new_timestamp = datetime.now()
        new_timestamp_str = datetime.today().strftime('%Y-%m-%d')

        if new_timestamp_str == previous_timestamp_str:
            daily_id = df_lastline.iloc[0]['pub_identity']
        else:
            # # # GET RANDOM PUB
            df_details = self.go_get_details()

            no_of_details = df_details.shape[0]
            random_index = random.randrange(0, no_of_details)
            df_random_pub = df_details.iloc[random_index]
            random_pub_id = df_random_pub['pub_identity']
            data = {'pub_identity': [random_pub_id], 'timestamp': [new_timestamp_str]}

            df_new = pd.DataFrame(data)

            df_appended = pd.concat([df_details_day, df_new], ignore_index=True)

            if env_vars['env'] == 'qual':
                df_appended.to_csv(directory_path + '/files/featured.csv', index=False, sep=',', encoding='utf-8')
            else:
                s3_resp = S3().s3_write(df_appended, 'featured.csv')
                print(s3_resp)

            daily_id = df_new.iloc[0]['pub_identity']
        return daily_id

    def new_detail(self, pub_id):
        new_detail = Detail(pub_identity=pub_id,
                            station_identity=StationIdentity().value, detail_name=DetailName().value,
                            address=Address().value, category=Category().value,
                            colour=Colour().value, detail_deletion=DetailDeletion().value,
                            detail_latitude=DetailLatitude().value,
                            detail_longitude=DetailLongitude().value, extra=Extra().value,
                            place=Place().value, rank=Rank().value, website=Website().value, url=Url().value)
        df_new_detail = pd.DataFrame([new_detail.__dict__])
        return df_new_detail

    def form_detail(self):
        print('get detail form')
        print(request.form['pub_identity'])
        print(request.form['station_identity'])
        print(request.form['detail_name'])
        print(request.form['address'])
        print(request.form['category'].lower())
        print(request.form['colour'])
        print(request.form['detail_deletion'])
        print(request.form['detail_latitude'])
        print(request.form['detail_longitude'])
        print(request.form['extra'])
        print(request.form['place'])
        print(request.form['rank'])
        print(request.form['website'])
        print(request.form['url'])
        new_detail = Detail(pub_identity=request.form['pub_identity'],
                            station_identity=request.form['station_identity'], detail_name=request.form['detail_name'],
                            address=request.form['address'], category=request.form['category'].lower(),
                            colour=request.form['colour'], detail_deletion=request.form['detail_deletion'],
                            detail_latitude=request.form['detail_latitude'],
                            detail_longitude=request.form['detail_longitude'], extra=request.form['extra'],
                            place=request.form['place'], rank=request.form['rank'], website=request.form['website'],
                            url=request.form['url'])
        df_new_pub = pd.DataFrame([new_detail.__dict__])
        newdf1 = df_new_pub.transpose()
        print(newdf1)
        return df_new_pub

    def update_detail_df(self, df_details, pub_id):
        print('UPDATE edit detail')
        # print('pub_id received: ' + pub_id)
        for detail in list(Detail().__dict__.keys()):
            # print(detail + ' : ' + request.form[detail])
            df_details.loc[df_details['pub_identity'] == pub_id, detail] = request.form[detail]
        print('details model updated with form data')
        return df_details

    def add_detail_df(self, df_details, df_new):
        print('ADD new detail')
        df_appended = pd.concat([df_details, df_new], ignore_index=True)
        # df_full = pd.merge(df_details, df_new, on='pub_identity')
        return df_appended

    def update_detail_csv(self, df_updated_details, type):
        print('updating detail csv')
        # print(df_updated_details)
        df_details = Csv().go_get_details()

        print('pre_count: ' + str(df_details.shape[0]))
        print('post_count: ' + str(df_updated_details.shape[0]))

        if (df_updated_details.shape[0] == df_details.shape[0] + 1) and (type == 'add'):
            df_updated_details.to_csv(directory_path + '/files/details.csv', index=False, sep=',', encoding='utf-8')
            if env_vars['source'] == 'csv':
                s3_resp = S3().s3_write(df_updated_details, 'details.csv')
                print(s3_resp)
            print('Detail csv/s3 added to')
        else:
            print('Detail csv/s3 did not add to')

        if (df_updated_details.shape[0] == df_details.shape[0]) and (type == 'edit'):
            df_updated_details.to_csv(directory_path + '/files/details.csv', index=False, sep=',', encoding='utf-8')
            if env_vars['source'] == 'csv':
                s3_resp = S3().s3_write(df_updated_details, 'details.csv')
                print(s3_resp)
            print('Detail csv/s3 updated')
        else:
            print('Detail csv/s3 did not update')

        return df_updated_details
