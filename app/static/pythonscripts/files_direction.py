import os
import uuid
import pandas as pd
from config import Configurations
from app.static.pythonscripts.s3 import S3
# from app.static.pythonscripts.csv import Csv
from app.models.direction.direction import Direction
from app.models.direction.direction_identity import DirectionIdentity
from app.models.direction.direction_name import DirectionName
from app.models.direction.direction_deletion import DirectionDeletion
from app.models.station.station_identity import StationIdentity
from app.models.photo.photo_identity import PhotoIdentity
from app.static.pythonscripts.uuid_generater import UuidGenerator

config = Configurations().get_config()
config2 = Configurations().get_config2()
directory_path = config2['directory_path']
# # # GET ENVIRONMENTAL VARIABLES
env_vars = Configurations().get_config2()


class FilesDirection:

    def go_get_directions(self):
        print('go get directions')
        if env_vars['source'] == 'csv':
            df_directions = pd.read_csv(directory_path + '/files/directions.csv',
                                        dtype={'direction_identity': str, 'direction_name': str, 'direction_deletion': str})
        else:
            attribute_list = ['direction_identity', 'direction_name', 'direction_deletion']
            df_directions = S3().s3_read('direction', attribute_list)
        return df_directions

    def go_get_1_direction(self, direction_id):
        print('Go get 1 direction')
        df_directions = self.go_get_directions()
        df_1_direction = df_directions.loc[df_directions['direction_identity'] == direction_id]
        return df_1_direction

    def go_get_new_direction(self):
        new_direction = Direction(direction_identity=DirectionIdentity().value, direction_name=DirectionName().value,
                                  direction_deletion=DirectionDeletion().value)
        df_new_direction = pd.DataFrame([new_direction.__dict__])
        return df_new_direction
