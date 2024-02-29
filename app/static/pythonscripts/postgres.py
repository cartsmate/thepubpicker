import psycopg2
import pandas as pd
from sqlalchemy import create_engine, text
from sqlalchemy.engine import URL
from config import Configurations


class PostgresConnection:

    def read_postgres(self, database):
        env_vars = Configurations().get_config2()
        # print('database')
        # print(database)
        sql_str = f'SELECT * from thepubpicker.{database}'
        #
        # # # # USING PSYCOPG2 # # #
        # con = psycopg2.connect(
        #     database=env_vars['db_name'],
        #     user=env_vars['db_user'],
        #     password=env_vars['db_password'],
        #     host=env_vars['db_host'],
        #     port=env_vars['db_port']
        # )
        # cursor = con.cursor()
        # try:
        #     sql_str = f'SELECT * from thepubpicker.{database}'
        #     cursor.execute(sql_str)
        #     psy_result = cursor.fetchall()
        #     con.commit()
        # except Exception as result:
        #     print(psy_result)
        # finally:
        #     con.close()

        # # # USING SQLALCHEMY # # #
        url = URL.create(
            drivername='postgresql',
            database=env_vars['db_name'],
            username=env_vars['db_user'],
            password=env_vars['db_password'],
            host=env_vars['db_host'],
            port=env_vars['db_port']
        )
        engine = create_engine(url)
        # df_alchemy = pd.read_sql_query(sql_str, engine)
        df_alchemy = pd.DataFrame(engine.connect().execute(text(sql_str)))
        engine.dispose()
        # print(df_alchemy)
        # read the postgresql table
        # df_alchemy = pd.read_sql_table('thepubpicker.detail', engine)
        # df_alchemy = pd.read_sql_table(
        #     "detail",
        #     con=engine,
        #     columns=['pub_identity',
        #             'station_identity',
        #             'detail_name',
        #             'address',
        #             'category',
        #             'detail_deletion',
        #             'detail_latitude',
        #             'detail_longitude',
        #             'extra',
        #             'place',
        #             'ranking',
        #             'website',
        #             'url'],
        #     )
        return df_alchemy
