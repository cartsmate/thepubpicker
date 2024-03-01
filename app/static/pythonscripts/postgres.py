import psycopg2
import pandas as pd
from sqlalchemy import create_engine, text
from sqlalchemy.engine import URL
from config import Configurations


class PostgresConnection:

    env_vars = Configurations().get_config2()

    sql_get_all = f'''select * from thepubpicker.detail d 
                        left join thepubpicker.review r on r.pub_identity = d.pub_identity 
                        left join thepubpicker.station s on s.station_identity = d.station_identity 
                        left join thepubpicker.direction dir on dir.direction_identity = s.direction_identity
                        left join thepubpicker.daily_event evnt on evnt.pub_identity = d.pub_identity 
                        '''

    sql_count_all = f'''select count(*) from thepubpicker.detail d 
                            left join thepubpicker.review r on r.pub_identity = d.pub_identity 
                            left join thepubpicker.station s on s.station_identity = d.station_identity 
                            left join thepubpicker.direction dir on dir.direction_identity = s.direction_identity
                            left join thepubpicker.daily_event evnt on evnt.pub_identity = d.pub_identity 
                            '''

    def open_conection(self):
        conn = psycopg2.connect(
            database=self.env_vars['db_name'],
            user=self.env_vars['db_user'],
            password=self.env_vars['db_password'],
            host=self.env_vars['db_host'],
            port=self.env_vars['db_port']
        )
        return conn

    def close_connection(self, conn):
        conn.close()

    def create_engine(self):
        # # # USING SQLALCHEMY # # #
        url = URL.create(
            drivername='postgresql',
            database=self.env_vars['db_name'],
            username=self.env_vars['db_user'],
            password=self.env_vars['db_password'],
            host=self.env_vars['db_host'],
            port=self.env_vars['db_port']
        )
        engine = create_engine(url)
        return engine

    def dispose_engine(self, engine):
        engine.dispose()

    def postgres_to_df(self, engine):
        print('read_postgres_all')
        df_alchemy = pd.DataFrame(engine.connect().execute(text(self.sql_get_all)))
        return df_alchemy

    def run_query(self, conn):
        conn.autocommit = True
        cursor = conn.cursor()
        cursor.execute(self.sql_get_all)
        results = cursor.fetchall()
        conn.commit()
        return results

    def read_postgres(self, database, engine):
        sql_str = f'SELECT * from thepubpicker.{database}'
        df_alchemy = pd.DataFrame(engine.connect().execute(text(sql_str)))
        return df_alchemy

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
        # df_alchemy = pd.read_sql_query(sql_str, engine)

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

        # df_alchemy = pd.read_sql_query(sql_str, engine)