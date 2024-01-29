import os
import uuid
import pandas as pd
from config import Configurations
from app.static.pythonscripts.s3 import S3
from app.models.station.station import Station
from app.models.station.station_deletion import StationDeletion
from app.models.station.station_identity import StationIdentity
from app.models.station.station_name import StationName
from app.models.station.station_latitude import StationLatitude
from app.models.station.station_longitude import StationLongitude
from app.models.station.zone import Zone
from app.models.station.postcode import Postcode
from app.models.direction.direction_identity import DirectionIdentity
from app.models.photo.photo_identity import PhotoIdentity
from app.static.pythonscripts.uuid_generater import UuidGenerator

config = Configurations().get_config()
config2 = Configurations().get_config2()
directory_path = config2['directory_path']
# # # GET ENVIRONMENTAL VARIABLES
env_vars = Configurations().get_config2()

class FilesStation:

    def go_get_stations(self):
        print('go get stations')
        if env_vars['source'] == 'csv':
            df_station = pd.read_csv(directory_path + '/files/stations.csv',
                                     dtype={'station_identity': str, 'station_deletion': str, 'station_name': str,
                                            'station_latitude': float, 'station_longitude': float, 'zone': str,
                                            'postcode': str, 'direction_identity': str})
        else:
            attribute_list = ['station_identity', 'station_deletion', 'station_name', 'station_latitude',
                              'station_longitude', 'zone', 'postcode', 'direction_identity']
            df_station = S3().s3_read('station', attribute_list)
        return df_station

    def go_get_1_station(self, station_id):
        print('Go get 1 station')
        df_stations = self.go_get_stations()
        df_1_station = df_stations.loc[df_stations['station_identity'] == station_id]
        return df_1_station

    def go_get_new_station(self):
        new_station = Station(station_identity=StationIdentity().value, station_deletion=StationDeletion().value,
                              station_name=StationName().value, station_latitude=StationLatitude().value,
                              station_longitude=StationLongitude().value, zone=Zone().value,
                              postcode=Postcode().value, direction_identity=DirectionIdentity().value)
        df_new_station = pd.DataFrame([new_station.__dict__])
        return df_new_station
