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
from app.static.pythonscripts.pub_get import GetPub
from app.static.pythonscripts.pub_add import AddPub
from app.static.pythonscripts.pub_edit import EditPub
from app.static.pythonscripts.pub_update import UpdatePub
from app.static.pythonscripts.pub_write import WritePub
from app.models.photo.photo_identity import PhotoIdentity
from app.static.pythonscripts.uuid_generater import UuidGenerator

# config = Configurations().get_config()
config2 = Configurations().get_config2()
directory_path = config2['directory_path']
# model_formats = ControlsList().go_get_control_list()
env_vars = Configurations().get_config2()


# class FilesDetail:

    # def get_detail_all(self):
    #     df_details = GetPub().get_all(Detail())
        # print('go get details')
        # if env_vars['source'] == 'csv':
        #     dtype_obj = {}
        #     for key, value in Detail().__dict__.items():
        #         dtype_obj[value.name] = value.datatype
        #     df_details = pd.read_csv(directory_path + '/files/details.csv', dtype=dtype_obj)
        # else:
        #     attribute_list = []
        #     for key, value in Detail().__dict__.items():
        #         attribute_list.append(value.name)
        #     df_details = S3().s3_read('details', attribute_list)
        # return df_details

    # def get_detail_1(self, pub_id):
    #     df_1_detail = GetPub().get_1(Detail(), pub_id)
    #     # print('Go get 1 detail')
    #     # df_details = self.get_detail_all()
    #     # df_1_detail = df_details.loc[df_details['pub_identity'] == pub_id]
    #     return df_1_detail

    # def add_detail(self, pub_id):
    #     df_detail = AddPub().add_pub(Detail(), pub_id)
    #     # print('add_detail')
    #     # new_detail = Detail()
    #     # for key, value in Detail().__dict__.items():
    #     #     setattr(new_detail, value.name, value.value)
    #     # setattr(new_detail, 'pub_identity', pub_id)
    #     # df_detail = pd.DataFrame([new_detail.__dict__])
    #     return df_detail

    # def edit_detail(self):
    #     df_detail = EditPub().edit_pub(Detail())
    #     return df_detail

    # def update_detail(self, df_details, pub_id):
    #     df_details = UpdatePub().update_pub(Detail(), df_details, pub_id)
    #     return df_details

    # def update_detail_csv(self, df_updated_details, update_type):
    #     print('updating detail csv')
    #     df_details = self.get_detail_all()
    #     print('pre_count: ' + str(df_details.shape[0]))
    #     print('post_count: ' + str(df_updated_details.shape[0]))
    #     if ((df_updated_details.shape[0] == df_details.shape[0] + 1) and (update_type == 'add')) or \
    #             ((df_updated_details.shape[0] == df_details.shape[0]) and (update_type == 'edit')):
    #         if WritePub().write_csv(df_updated_details, 'detail'):
    #         # if self.write_detail_csv(df_updated_details):
    #             return True
    #         else:
    #             return False
    #     else:
    #         return False

    # def write_detail_csv(self, df_updated_details):
    #     try:
    #         df_updated_details.to_csv(directory_path + '/files/detail.csv', index=False, sep=',', encoding='utf-8')
    #         return True
    #     except Exception as e:
    #         print('except')
    #         print(e)
    #         return False
        #
        # if env_vars['source'] == 'csv':
        #     s3_resp = S3().s3_write(df_updated_details, 'detail.csv')
        #     print(s3_resp)
        # print('Detail csv/s3 added to')
        # else:
        # print('Detail csv/s3 did not add to')
