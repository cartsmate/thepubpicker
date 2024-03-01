import pandas as pd
from config import Configurations
from app.models.detail.detail import Detail
from app.models.station.station import Station
from app.models.direction.direction import Direction

from app.static.pythonscripts.pub_get import GetPub

# config = Configurations().get_config()
config2 = Configurations().get_config2()


class Dataframes:

    env_vars = Configurations().get_config2()

    # def series_to_dict(self, series):
    #     series_dict = series.to_dict()
    #     return series_dict

    # def df_to_dict(self, df):
    #     df_dict = df.to_dict(orient='records')
    #     return df_dict

    # def merge_dfs(self, df_1, df_2):
    #     print('Dataframe.merge_dfs')
    #     df_merged = pd.merge(df_1, df_2, how='left', on='pub_identity')
    #     return df_merged

    # def append_df(self, _get, new_df):
    #     print('Dataframe: append_df')
    #     df_appended = pd.concat([_get, new_df], ignore_index=True)
    #     return df_appended

    # def to_csv(self, df_appended, key):
    #     print('Dataframes: to_csv')
    #     # directory_path = os.getcwd()
    #     # directory_path = '/Users/andycarter/Documents/develop/thepubcrawls/'
    #     directory_path = config2['directory_path']
    #     # print(directory_path)
    #     df_appended.to_csv(directory_path + '/files/' + config[key]['aws_key'], sep=',', encoding='utf-8', index=False)

    def go_get_stations_directions(self):
        df_station_all = GetPub().get_all(Station())

        df_pub_with_station = pd.merge(GetPub().get_all(Detail()), df_station_all, on='station_identity',
                                       how='left').sort_values(
                                       by='station_name')
        unique_station_identity_list = df_pub_with_station['station_identity'].unique()
        df_unique_stations_identity = pd.DataFrame({'station_identity': unique_station_identity_list})
        df_unique_stations = pd.merge(df_unique_stations_identity, df_station_all, on='station_identity', how='left')
        df_stations_directions = pd.merge(df_unique_stations, GetPub().get_all(Direction()), on='direction_identity', how='left')
        return df_stations_directions

    def go_get_directions_list(self):
        df_stations_directions = self.go_get_stations_directions()
        unique_directions_list = df_stations_directions['direction_identity'].unique()
        df_unique_directions_identity = pd.DataFrame({'direction_identity': unique_directions_list})
        df_unique_directions = pd.merge(df_unique_directions_identity, GetPub().get_all(Direction()),
                                        on='direction_identity',
                                        how='left')
        df_unique_directions_trunc = df_unique_directions[['direction_identity', 'direction_name']]
        directions_list = df_unique_directions_trunc.values.tolist()
        return directions_list

    def go_get_stations_directions_list(self):
        df_stations_directions = self.go_get_stations_directions()
        df_stations_directions_trunc = df_stations_directions[
            ['station_identity', 'station_name', 'direction_identity', 'direction_name']]
        stations_directions_list = df_stations_directions_trunc.values.tolist()
        return stations_directions_list
