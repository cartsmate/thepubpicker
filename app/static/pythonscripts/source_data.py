from app.models.daily_event.daily_event import DailyEvent
from app.models.detail.detail import Detail
from app.models.diary.diary import Diary
from app.models.direction.direction import Direction
from app.models.pub_record.pub_record import PubRecord
from app.models.review.review import Review
from app.models.station.station import Station

from app.static.pythonscripts.dataframes import Dataframes
from app.static.pythonscripts.files_daily import FilesDaily
from app.static.pythonscripts.files_photo import FilesPhoto
from app.static.pythonscripts.files_pub import FilesPub
from app.static.pythonscripts.multi_threading import MultiThreadingPub
from app.static.pythonscripts.pub_get import GetPub


# # # # # UNNECESSARY DECORATOR - PURELY FOR CODE PRACTICE # # # # #
class CountCalls:

    def __init__(self, func):
        self.func = func
        self.num_calls = 0

    def __call__(self, *args, **kwargs):
        self.num_calls += 1
        print(f'This is executed {self.num_calls} times')
        return self.func(*args, **kwargs)


# # # # # UNNECESSARY DECORATOR - PURELY FOR CODE PRACTICE # # # # #
@CountCalls
def get_csv_data(model):
    data = GetPub().get_all(model)
    return data


class SourceData:

    def get_source_data(self, env_vars):
        # READ VAR TO DETERMINE SOURCE OF DATA
        if env_vars['source'] == 'db':
            # GET DATA FROM POSTGRES DATABASE
            source_data = self.get_data_from_db(env_vars)

        elif env_vars['source'] == 'new_csv':
            # GET DATA FROM CSV FORMAT (MATCHING DATABASE STRUCTURE)
            source_data = self.get_data_from_new_csv(env_vars)

        else:
            # GET DATA FROM CSV FORMAT (OLD DATA STRUCTURE)
            source_data = self.get_data_from_old_csv(env_vars)
        return source_data

    @staticmethod
    def get_data_from_db(env_vars):
        df_dict = MultiThreadingPub().thread_caller()
        df_daily_event_all = df_dict['df_daily_event']

        stations_directions_list = Dataframes().go_get_stations_directions_list_flat(df_dict['df_pub_record'],
                                                                                     df_dict['df_station'],
                                                                                     df_dict['df_direction'])
        directions_list = Dataframes().go_get_directions_list_flat(df_dict['df_pub_record'],
                                                                   df_dict['df_station'],
                                                                   df_dict['df_direction'])
        # # # GET ALL DATA # # #
        df_pub = df_dict['df_pub_record']

        # # # GET FEATURED PUB # # #
        daily_id = FilesDaily().go_get_details_daily(df_dict['df_pub_record'])

        # # # GET FEATURED PUB PHOTOS # # #
        photos_list = FilesPhoto().go_get_1_photo_request(df_dict['df_pub_record'], daily_id, env_vars)

        source_data = {'stations_directions_list': stations_directions_list,
                       'directions_list': directions_list,
                       'photos_list': photos_list,
                       'daily_id': daily_id,
                       'df_pub': df_pub,
                       'df_daily_event_all': df_daily_event_all}
        return source_data

    @staticmethod
    def get_data_from_new_csv(env_vars):
        df_daily_event_all = get_csv_data(DailyEvent())
        df_station_all = get_csv_data(Station())
        df_direction_all = get_csv_data(Direction())
        df_pub_record_all = get_csv_data(PubRecord())

        stations_directions_list = Dataframes().go_get_stations_directions_list_flat(df_pub_record_all,
                                                                                     df_station_all,
                                                                                     df_direction_all)
        directions_list = Dataframes().go_get_directions_list_flat(df_pub_record_all,
                                                                   df_station_all,
                                                                   df_direction_all)
        # # # GET ALL DATA # # #
        df_pub = df_pub_record_all

        # # # GET FEATURED PUB # # #
        daily_id = FilesDaily().go_get_details_daily(df_pub_record_all)

        # # # GET FEATURED PUB PHOTOS # # #
        photos_list = FilesPhoto().go_get_1_photo_request(df_pub_record_all, daily_id, env_vars)

        source_data = {'stations_directions_list': stations_directions_list,
                       'directions_list': directions_list,
                       'photos_list': photos_list,
                       'daily_id': daily_id,
                       'df_pub': df_pub,
                       'df_daily_event_all': df_daily_event_all}
        return source_data

    @staticmethod
    def get_data_from_old_csv(env_vars):
        df_detail_all = get_csv_data(Detail)
        df_review_all = get_csv_data(Review())
        df_daily_event_all = get_csv_data(DailyEvent())
        df_diary_all = get_csv_data(Diary())
        df_station_all = get_csv_data(Station())
        df_direction_all = get_csv_data(Direction())
        stations_directions_list = Dataframes().go_get_stations_directions_list(df_detail_all,
                                                                                df_station_all,
                                                                                df_direction_all)
        directions_list = Dataframes().go_get_directions_list(df_detail_all,
                                                              df_station_all,
                                                              df_direction_all)

        # # # GET ALL DATA # # #
        df_pub = FilesPub().get_pub_all(df_detail_all,
                                        df_review_all,
                                        df_diary_all,
                                        df_station_all,
                                        df_direction_all)

        # # # GET FEATURED PUB # # #
        daily_id = FilesDaily().go_get_details_daily(df_detail_all)

        # # # GET FEATURED PUB PHOTOS # # #
        photos_list = FilesPhoto().go_get_1_photo_request(df_detail_all, daily_id, env_vars)

        source_data = {'stations_directions_list': stations_directions_list,
                       'directions_list': directions_list,
                       'photos_list': photos_list,
                       'daily_id': daily_id,
                       'df_pub': df_pub,
                       'df_daily_event_all': df_daily_event_all}
        return source_data

