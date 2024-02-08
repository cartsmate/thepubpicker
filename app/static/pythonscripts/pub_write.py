import pandas as pd
from config import Configurations
from app.models.detail.detail import Detail
from app.static.pythonscripts.s3 import S3

# config2 = Configurations().get_config2()
directory_path = Configurations().get_config2()['directory_path']
env_vars = Configurations().get_config2()


class WritePub:

    def pre_write_check(self, update_type, df_all, df_update):
        if ((df_update.shape[0] == df_all.shape[0] + 1) and (update_type == 'add')) or \
                ((df_update.shape[0] == df_all.shape[0]) and (update_type == 'edit')):
            return True
        else:
            return False

    def write_csv(self, filename, update_type, df_all, df_update):
        try:
            if self.pre_write_check(update_type, df_all, df_update):
                df_update.to_csv(directory_path + '/files/' + filename + '.csv', index=False, sep=',', encoding='utf-8')
                return True
            else:
                return False
        except Exception as e:
            print('exception')
            print(e)
            return False
