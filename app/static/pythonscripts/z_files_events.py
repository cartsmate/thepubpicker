import os
import uuid
import json
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
from app.models.detail.url import Url
from app.models.detail.website import Website
from app.models.station.station_identity import StationIdentity
from app.models.event.event import Event
from app.models.event.event_day import EventDay
from app.models.event.event_detail import EventDetail
from app.models.event.event_type import EventType
from app.models.event.event_identity import EventIdentity
from app.static.pythonscripts.pub_get import GetPub
from app.static.pythonscripts.pub_add import AddPub
from app.static.pythonscripts.pub_edit import EditPub
from app.static.pythonscripts.pub_update import UpdatePub

from app.models.photo.photo_identity import PhotoIdentity
from app.static.pythonscripts.uuid_generater import UuidGenerator

# config = Configurations().get_config()
config2 = Configurations().get_config2()
directory_path = config2['directory_path']
# model_formats = ControlsList().go_get_control_list()
env_vars = Configurations().get_config2()


# class FilesEvent:

    # def get_event_all(self):
    #     df_events = GetPub().get_all(Event())
    #     # print('go_get_events')
    #     # df_events = pd.read_csv(directory_path + '/files/events.csv')
    #     # print(df_events)
    #     df_events.event_detail = df_events.event_detail.fillna('')
    #     # print(df_events)
    #     return df_events

    # def get_event_1(self, pub_id):
    #     df_1_event = GetPub().get_1(Event(), pub_id)
    #     # print('go_get_1_event')
    #     # df_events = self.go_get_events()
    #     # df_1_event = df_events.loc[df_events['pub_identity'] == pub_id]
    #     # print('df_1_event')
    #     # df_list = df_1_event.values.tolist()
    #     # print(df_list)
    #     # print(json.loads(df_list))
    #     # print(json.dumps(df_list))
    #     # print(json.loads(json.dumps(df_list)))
    #     # print(df_1_event.to_json(orient='records'))
    #     return df_1_event

    # def add_event(self, pub_id, event_id):
    #     df_event = AddPub().add_pub(Event(), pub_id)
    #     # new_event = Event(pub_identity=pub_id, event_identity=event_id, event_type=EventType().value,
    #     #                    event_day=EventDay().value, event_detail=EventDetail().value)
    #     # df_event = pd.DataFrame([new_event.__dict__])
    #     return df_event

    # def edit_event(self):
    #     df_event = EditPub().edit_pub(Event())
    #     # print('get event form')
    #     # new_event = Event(pub_identity=request.form['pub_identity'], event_identity=request.form['event_identity'],
    #     #                   event_type=request.form['event_type'], event_day=request.form['event_day'],
    #     #                   event_detail=request.form['event_detail'])
    #     # df_event = pd.DataFrame([new_event.__dict__])
    #     # newdf1 = df_event.transpose()
    #     # print(newdf1)
    #     return df_event

    # def update_event(self, df_events, event_id):
    #     df_events = UpdatePub().update_pub(Event(), df_events, event_id)
    #     # print('UPDATE edit event')
    #     # # print('pub_id received: ' + pub_id)
    #     # for event in list(Event().__dict__.keys()):
    #     #     # print(detail + ' : ' + request.form[detail])
    #     #     df_events.loc[df_events['pub_identity'] == event_id, event] = request.form[event]
    #     # print('events model updated with form data')
    #     return df_events

    # def add_event_df(self, df_events, df_new):
    #     print('ADD new detail')
    #     df_appended = pd.concat([df_events, df_new], ignore_index=True)
    #     # df_full = pd.merge(df_details, df_new, on='pub_identity')
    #     return df_appended

    # def update_detail_csv(self, df_updated_events, type):
    #     print('updating detail csv')
    #     # print(df_updated_details)
    #     df_events = self.go_get_events()
    #
    #     print('pre_count: ' + str(df_events.shape[0]))
    #     print('post_count: ' + str(df_updated_events.shape[0]))
    #
    #     if (df_updated_events.shape[0] == df_events.shape[0] + 1) and (type == 'add'):
    #         df_updated_events.to_csv(directory_path + '/files/events.csv', index=False, sep=',', encoding='utf-8')
    #         if env_vars['source'] == 'csv':
    #             s3_resp = S3().s3_write(df_updated_events, 'events.csv')
    #             print(s3_resp)
    #         print('Event csv/s3 added to')
    #     else:
    #         print('event csv/s3 did not add to')
    #
    #     if (df_updated_events.shape[0] == df_events.shape[0]) and (type == 'edit'):
    #         df_updated_events.to_csv(directory_path + '/files/events.csv', index=False, sep=',', encoding='utf-8')
    #         if env_vars['source'] == 'csv':
    #             s3_resp = S3().s3_write(df_updated_events, 'events.csv')
    #             print(s3_resp)
    #         print('Event csv/s3 updated')
    #     else:
    #         print('Event csv/s3 did not update')
    #
    #     return df_updated_events
