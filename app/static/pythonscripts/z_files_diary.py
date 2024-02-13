import os
import uuid
import pandas as pd
from flask import request
from config import Configurations
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
from app.models.station.station_identity import StationIdentity
# from app.static.pythonscripts.controls_list import ControlsList
from app.models.photo.photo_identity import PhotoIdentity
from app.static.pythonscripts.uuid_generater import UuidGenerator
from app.static.pythonscripts.pub_get import GetPub
from app.static.pythonscripts.pub_add import AddPub
from app.static.pythonscripts.pub_edit import EditPub
from app.static.pythonscripts.pub_update import UpdatePub

# config = Configurations().get_config()
config2 = Configurations().get_config2()
directory_path = config2['directory_path']
# model_formats = ControlsList().go_get_control_list()
env_vars = Configurations().get_config2()


# class FilesDiary:

    # def get_diary_all(self):
    #     # new_diary = Diary()
    #     # df_diary = pd.DataFrame([new_diary.__dict__])
    #     # return df_diary
    #     #
    #     df_diarys = GetPub().get_all(Diary())
    #     # print('go get diary')
    #     # if env_vars['source'] == 'csv':
    #     #     df_diarys = pd.read_csv(directory_path + '/files/diary.csv', dtype={'pub_identity': str, 'monday': str,
    #     #                                                                    'tuesday': str, 'wednesday': str,
    #     #                                                                    'thursday': str, 'friday': str,
    #     #                                                                    'saturday': str, 'sunday': str})
    #     # else:
    #     #     attribute_list = ['pub_identity', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday',
    #     #                       'sunday']
    #     #     df_diarys = S3().s3_read('diary', attribute_list)
    #     return df_diarys

    # def get_diary_1(self, pub_id):
    #     df_1_diary = GetPub().get_1(Diary(), pub_id)
    #     # print('Go get 1 diary')
    #     # df_diarys = self.go_get_diarys()
    #     # df_1_diary = df_diarys.loc[df_diarys['pub_identity'] == pub_id]
    #     return df_1_diary

    # def add_diary(self, pub_id):
    #     df_diary = AddPub().add_pub(Diary(), pub_id)
    #     # new_diary = Diary(pub_identity=pub_id, monday="", tuesday="", wednesday="", thursday="", friday="",
    #     #                   saturday="", sunday="")
    #     # df_diary = pd.DataFrame([new_diary.__dict__])
    #     return df_diary

    # def edit_diary(self):
    #     df_diary = EditPub().edit_pub(Diary())
    #     # print('get diary form')
    #     # new_diary = Diary(pub_identity=request.form['pub_identity'], monday=request.form['monday'],
    #     #                   tuesday=request.form['tuesday'], wednesday=request.form['wednesday'],
    #     #                   thursday=request.form['thursday'], friday=request.form['friday'],
    #     #                   saturday=request.form['saturday'], sunday=request.form['sunday'])
    #     # df_diary = pd.DataFrame([new_diary.__dict__])
    #     return df_diary

    # def form_detail(self):
    #     print('get detail form')
    #     new_detail = Detail(pub_identity=request.form['pub_identity'], place=request.form['place'],
    #                         detail_deletion=request.form['detail_deletion'], detail_name=request.form['detail_name'],
    #                         address=request.form['address'], detail_latitude=request.form['detail_latitude'],
    #                         detail_longitude=request.form['detail_longitude'],
    #                         station_identity=request.form['station_identity'],
    #                         category=request.form['category'].lower(), rank=request.form['rank'],
    #                         colour=request.form['colour'], extra=request.form['extra'])
    #     df_new_pub = pd.DataFrame([new_detail.__dict__])
    #     return df_new_pub

    # def update_diary(self, df_diary, pub_id):
    #     df_diary = UpdatePub().update_pub(Diary(), df_diary, pub_id)
    #     # print('UPDATE/EDIT diary')
    #     # print('pub_id: ' + pub_id)
    #     # for diary in list(Diary().__dict__.keys()):
    #     #     df_diary.loc[df_diary['pub_identity'] == pub_id, diary] = request.form[diary]
    #     #     # print(diary + ' : ' + request.form[diary])
    #     # print(df_diary)
    #     return df_diary

    # def add_diary_df(self, df_diary, df_new):
    #     print('ADD new diary')
    #     df_appended = pd.concat([df_diary, df_new], ignore_index=True)
    #     # df_full = pd.merge(df_details, df_new, on='pub_identity')
    #     return df_appended

    # def update_diary_csv(self, df_updated_diary, type):
    #     print('updating diary csv')
    #     # print(df_updated_diary)
    #     df_diarys = self.get_diary_all()
    #
    #     print('pre_count: ' + str(df_diarys.shape[0]))
    #     print('post_count: ' + str(df_updated_diary.shape[0]))
    #     if (df_updated_diary.shape[0] == df_diarys.shape[0] + 1) and (type == 'add'):
    #         df_updated_diary.to_csv(directory_path + '/files/diary.csv', index=False, sep=',', encoding='utf-8')
    #         if env_vars['source'] == 'csv':
    #             s3_resp = S3().s3_write(df_updated_diary, 'diary.csv')
    #             print(s3_resp)
    #         print('Diary csv/s3 added to')
    #     else:
    #         print('Diary csv/s3 did not add to')
    #
    #     if (df_updated_diary.shape[0] == df_diarys.shape[0]) and (type == 'edit'):
    #         df_updated_diary.to_csv(directory_path + '/files/diary.csv', index=False, sep=',', encoding='utf-8')
    #         if env_vars['source'] == 'csv':
    #             s3_resp = S3().s3_write(df_updated_diary, 'diary.csv')
    #             print(s3_resp)
    #         print('Diary csv/s3 updated')
    #     else:
    #         print('Diary csv/s3 did not update')
    #
    #     return df_updated_diary