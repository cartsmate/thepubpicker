import pandas as pd

from app.static.pythonscripts.files_counter import FilesCounter
from app.static.pythonscripts.s3 import S3

class VisitorCounter:
    @staticmethod
    def get_counter(env_vars):
        if env_vars['env'] == 'qual':
            counter = FilesCounter().go_get_counter()
            new_counter = FilesCounter().go_write_counter(counter + 1)
        else:
            counter = S3().go_get_counter('counter', ['pub_counter'])
            new_counter = counter + 1
            data = {'pub_counter': [new_counter]}
            df_updated_counter = pd.DataFrame(data)
            S3().s3_write(df_updated_counter, 'counter_prod.csv')
        counter6 = str(new_counter).zfill(6)
        return counter6
