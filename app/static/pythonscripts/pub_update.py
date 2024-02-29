import pandas as pd
from flask import request
from config import Configurations
from app.models.diary.diary import Diary
from app.models.daily_event.daily_event import DailyEvent
from app.models.detail.detail import Detail
from app.models.review.review import Review
from app.static.pythonscripts.s3 import S3
from app.static.pythonscripts.uuid_generater import UuidGenerator
# config2 = Configurations().get_config2()
directory_path = Configurations().get_config2()['directory_path']
env_vars = Configurations().get_config2()


class UpdatePub:

    def update_pub(self, model, df_all, df_update):
        print('pub_update | update_pub | ' + model.__str__())

        print(len(df_all.axes[1]))
        print(df_all)
        print(len(df_update.axes[1]))
        print(df_update)
        pub_id = df_update.iloc[0]['pub_identity']
        print(pub_id)
        for mod in model.__dict__.keys():
            # if model == Review():
            #     print('mod: ' + mod)
            df_all.loc[df_all['pub_identity'] == pub_id, mod] = df_update.iloc[0][mod]
        print(df_all.loc[df_all['pub_identity'] == pub_id].T)
        return df_all

    def update_pub_events(self, pub_id, df_diary_all, df_event_all, df_update):
        print('update_pub_events: ' + DailyEvent().__str__())
        # print(df_update)
        # print(len(df_event_all.axes[1]))
        # print(len(df_update.axes[1]))
        days = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday']
        # df_diary_1 = df_diary_all.loc[df_diary_all['pub_identity'] == pub_id]
        df_diary_1_list = {"pub_identity": [pub_id]}

        for day in days:
            # print(day)
            # get update for each day
            # print('get update for each day')
            df_temp = df_update.loc[df_update['event_day'] == day]
            # print(df_temp)
            if df_temp.empty:
                # no update for that day
                # print('no update for that day')
                # pass blank to diary list
                df_diary_1_list[day] = ['']
            else:
                # check if event_identity populated
                # print('check if event_identity populated')
                if df_temp['event_identity'].values[0] == '' or df_temp['pub_identity'].values[0] == '':
                    # print('missing id')
                    evnt_id = UuidGenerator().get_new_uuid()
                    df_temp['pub_identity'] = pub_id
                    df_temp['event_identity'] = evnt_id
                    # update all fields in the record
                    # print('updated all fields in the record')
                    # print(df_temp)
                    # add new event id to the diary list
                    df_diary_1_list[day] = [evnt_id]
                    # print('diary list')
                    # print(df_diary_1_list)
                else:
                    # add event id to the diary list
                    # print('complete record')
                    evnt_id = df_temp['event_identity'].values[0]
                    df_diary_1_list[day] = [df_temp['event_identity'].values[0]]
                #     print('diary list')
                #     print(df_diary_1_list)
                # print('update event file')
                df_check = df_event_all.loc[df_event_all['event_identity'] == evnt_id]
                # print('df check')
                # print(df_check)
                if df_check.empty:
                    # print('empty and add')
                    # print('df_temp')
                    # print(df_temp)
                    df_event_all = pd.concat([df_event_all, df_temp], ignore_index=True)

                else:
                    # print('not empty and edit')
                    for mod in DailyEvent().__dict__.keys():
                        # print(evnt_id)
                        # print(df_event_all.loc[df_event_all['event_identity'] == evnt_id])
                        # print(mod)
                        # print(df_temp)
                        # print(df_temp[mod].values[0])
                        df_event_all.loc[df_event_all['event_identity'] == evnt_id, mod] = df_temp[mod].values[0]
        df_event_all.sort_values(['pub_identity', 'event_day'])
        # print('full diary list')
        # print(df_diary_1_list)
        df_diary_update = pd.DataFrame(df_diary_1_list)
        # print(df_diary_update)
        df_diary_all = self.update_pub(Diary(), df_diary_all, df_diary_update)
        return df_diary_all, df_event_all

# for index, row in df_update.iterrows():
#     evnt_id = row['event_identity']
#     df = df_event_all.loc[df_event_all['event_identity'] == evnt_id]
