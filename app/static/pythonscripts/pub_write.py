import pandas as pd
from config import Configurations
from app.models.detail.detail import Detail
from app.static.pythonscripts.s3 import S3

# config2 = Configurations().get_config2()
directory_path = Configurations().get_config2()['directory_path']
env_vars = Configurations().get_config2()


class WritePub:

    def pre_write_check(self, filename, update_type, df_all, df_update):
        print('pre-write check: ' + filename)
        print('all rows: ' + str(len(df_all.axes[0])))
        print('update rows: ' + str(len(df_update.axes[0])))
        if filename == 'event':
            return True
        elif ((df_update.shape[0] == df_all.shape[0] + 1) and (update_type == 'add')) or \
                ((df_update.shape[0] == df_all.shape[0]) and (update_type == 'edit')):
            return True
        else:
            return False

    def write_csv(self, filename, update_type, df_all, df_update):
        try:
            # df_update = df_update.sort_values(['pub_identity', 'event_day'])
            if self.pre_write_check(filename, update_type, df_all, df_update):
                df_update.to_csv(directory_path + '/files/' + filename + '.csv', index=False, sep=',', encoding='utf-8')
                return True
            else:
                return False
        except Exception as e:
            print('exception')
            print(e)
            return False
