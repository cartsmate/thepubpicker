import pandas as pd
from config import Configurations
from app.models.detail.detail import Detail
from app.models.station.station import Station
from app.models.direction.direction import Direction

from app.static.pythonscripts.pub_get import GetPub

# config = Configurations().get_config()
# env_vars = Configurations().get_config2()


class Dataframes:

    env_vars = Configurations().get_config2()

    def go_get_stations_directions(self, df_detail_all, df_station_all, df_direction_all):
        # df_station_all = GetPub().get_all(Station())

        df_pub_with_station = pd.merge(df_detail_all, df_station_all, on='station_identity',
                                       how='left').sort_values(
                                       by='station_name')
        unique_station_identity_list = df_pub_with_station['station_identity'].unique()
        df_unique_stations_identity = pd.DataFrame({'station_identity': unique_station_identity_list})
        df_unique_stations = pd.merge(df_unique_stations_identity, df_station_all, on='station_identity', how='left')
        df_stations_directions = pd.merge(df_unique_stations, df_direction_all, on='direction_identity', how='left')
        return df_stations_directions

    def go_get_directions_list(self, df_detail_all, df_station_all, df_direction_all):
        df_stations_directions = self.go_get_stations_directions(df_detail_all, df_station_all, df_direction_all)
        unique_directions_list = df_stations_directions['direction_identity'].unique()
        df_unique_directions_identity = pd.DataFrame({'direction_identity': unique_directions_list})
        df_unique_directions = pd.merge(df_unique_directions_identity, GetPub().get_all(Direction()),
                                        on='direction_identity',
                                        how='left')
        df_unique_directions_trunc = df_unique_directions[['direction_identity', 'direction_name']]
        directions_list = df_unique_directions_trunc.values.tolist()
        return directions_list

    def go_get_stations_directions_list(self, df_detail_all, df_station_all, df_direction_all):
        df_stations_directions = self.go_get_stations_directions(df_detail_all, df_station_all, df_direction_all)
        df_stations_directions_trunc = df_stations_directions[
            ['station_identity', 'station_name', 'direction_identity', 'direction_name']]
        stations_directions_list = df_stations_directions_trunc.values.tolist()
        return stations_directions_list
