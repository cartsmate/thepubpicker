import time
import psycopg2
import pandas as pd
from threading import Thread, Lock, current_thread
from sqlalchemy import create_engine
from sqlalchemy.engine import URL
from app.static.pythonscripts.files_pub import FilesPub
from queue import Queue


class MultiThreadingPub:

    # # # # # # # # # # # # # # # # # # # # # # #
    # # # Threading with database queries # # #
    # # # # # # # # # # # # # # # # # # # # #
    db_conn = psycopg2.connect(
            database="deb2u2ehdm8ih3",
            user="bjoonismanuyqb",
            password="42c662ab36a741716575f3e0101741349280622fff71ce246b15410de5c460d6",
            host="ec2-54-76-132-202.eu-west-1.compute.amazonaws.com",
            port='5432'
        )
    url = URL.create(
            drivername='postgresql',
            database="deb2u2ehdm8ih3",
            username="bjoonismanuyqb",
            password="42c662ab36a741716575f3e0101741349280622fff71ce246b15410de5c460d6",
            host="ec2-54-76-132-202.eu-west-1.compute.amazonaws.com",
            port=5432
            )

    def df_query_1(self):
        engine = create_engine(self.url)
        sql_str = """select * from thepubpicker.detail d limit 10"""
        df = pd.read_sql_query(sql_str, con=engine)
        # df_alchemy = pd.DataFrame(engine.connect().execute(text(sql_str)))
        print(df)

    def df_query_2(self):
        engine = create_engine(self.url)
        sql_str = """select * from thepubpicker.review r limit 10"""
        df = pd.read_sql_query(sql_str, con=engine)
        # df_alchemy = pd.DataFrame(engine.connect().execute(text(sql_str)))
        print(df)

    def query_detail(self):
        curs_obj = self.db_conn.cursor()
        curs_obj.execute("""SELECT column_name  
                                FROM information_schema.columns 
                                WHERE table_schema = 'thepubpicker' 
                                AND
                                table_name = 'detail' """)
        result = curs_obj.fetchall()
        table_headers = []
        for res in result:
            table_headers.append(res[0])

        curs_obj.execute("""select * from thepubpicker.detail d""")
        result = curs_obj.fetchall()
        global df_detail
        df_detail = pd.DataFrame(result, columns=table_headers)

    def query_review(self):
        curs_obj = self.db_conn.cursor()
        curs_obj.execute("""SELECT column_name  
                            FROM information_schema.columns 
                            WHERE table_schema = 'thepubpicker' 
                            AND
                            table_name = 'review' """)
        result = curs_obj.fetchall()
        table_headers = []
        for res in result:
            table_headers.append(res[0])
        curs_obj.execute("""select * from thepubpicker.review """)
        result = curs_obj.fetchall()
        global df_review
        df_review = pd.DataFrame(result, columns=table_headers)

    def query_diary(self):
        curs_obj = self.db_conn.cursor()
        curs_obj.execute("""SELECT column_name  
                            FROM information_schema.columns 
                            WHERE table_schema = 'thepubpicker' 
                            AND
                            table_name = 'diary' """)
        result = curs_obj.fetchall()
        table_headers = []
        for res in result:
            table_headers.append(res[0])
        curs_obj.execute("""select * from thepubpicker.diary """)
        result = curs_obj.fetchall()
        global df_diary
        df_diary = pd.DataFrame(result, columns=table_headers)


    def query_station(self):
        curs_obj = self.db_conn.cursor()
        curs_obj.execute("""SELECT column_name  
                            FROM information_schema.columns 
                            WHERE table_schema = 'thepubpicker' 
                            AND
                            table_name = 'station' """)
        result = curs_obj.fetchall()
        table_headers = []
        for res in result:
            table_headers.append(res[0])
        curs_obj.execute("""select * from thepubpicker.station s""")
        result = curs_obj.fetchall()
        global df_station
        df_station = pd.DataFrame(result, columns=table_headers)

    def query_direction(self):
        curs_obj = self.db_conn.cursor()
        curs_obj.execute("""SELECT column_name  
                            FROM information_schema.columns 
                            WHERE table_schema = 'thepubpicker' 
                            AND
                            table_name = 'direction' """)
        result = curs_obj.fetchall()
        table_headers = []
        for res in result:
            table_headers.append(res[0])
        curs_obj.execute("""select * from thepubpicker.direction dir""")
        result = curs_obj.fetchall()
        global df_direction
        df_direction = pd.DataFrame(result, columns=table_headers)

    def query_daily_event(self):
        curs_obj = self.db_conn.cursor()
        curs_obj.execute("""SELECT column_name  
                            FROM information_schema.columns 
                            WHERE table_schema = 'thepubpicker' 
                            AND
                            table_name = 'daily_event' """)
        result = curs_obj.fetchall()
        table_headers = []
        for res in result:
            table_headers.append(res[0])
        curs_obj.execute("""select * from thepubpicker.daily_event evnt""")
        result = curs_obj.fetchall()
        global df_daily_event
        df_daily_event = pd.DataFrame(result, columns=table_headers)

    def thread_caller(self):
        start = time.process_time()
        # # # returns a list # # #
        thread1 = Thread(target=self.query_detail)
        thread2 = Thread(target=self.query_review)
        thread3 = Thread(target=self.query_diary)
        thread4 = Thread(target=self.query_station)
        thread5 = Thread(target=self.query_direction)
        thread6 = Thread(target=self.query_daily_event)
        # thread1 = Thread(target=df_query_1)
        # thread2 = Thread(target=df_query_2)

        thread1.start()
        thread2.start()
        thread3.start()
        thread4.start()
        thread5.start()
        thread6.start()

        thread1.join()
        thread2.join()
        thread3.join()
        thread4.join()
        thread5.join()
        thread6.join()

        df_dict = {"df_detail": df_detail, "df_review": df_review, "df_diary": df_diary, "df_station": df_station,
                   "df_direction": df_direction, "df_daily_event": df_daily_event}

        # df_pub = FilesPub().get_pub_all(df_detail, df_review, df_diary, df_station, df_direction)
        # df_pub_with_event = pd.merge(df_pub, df_daily_event, on='pub_identity', how='left')
        # print(df_pub_with_event.shape[0])

        print(time.process_time() - start)

        return df_dict


# # # # # # # # # # # # # # #
# # # EXAMPLE of queue # # #
# # # # # # # # # # # # # #
# def worker(q, lock):
#     while True:
#         value = q.get()
#         with lock:
#             print(f'in {current_thread().name} got {value}')
#         q.task_done()
#
#
# if __name__ == '__main__':
#     q = Queue()
#     lock = Lock()
#     num_threads = 10
#
#     for i in range(num_threads):
#         thread = Thread(target=worker, args=(q, lock))
#         thread.daemon = True
#         thread.start()
#
#     for i in range(1, 21):
#         q.put(i)
#
#     q.join()
#
#     print('end main')


# # # # # # # # # # # # # # # # # #
# # # syntax of using QUEUES # # #
# # # # # # # # # # # # # # # #
# if __name__ == '__main__':
#     q = Queue()
#     q.put(1)
#     q.put(2)
#     q.put(3)
#
#     # 3, 2, 1 -->
#     first = q.get()
#     print(first)
#
#     q.task_done()
#     q.join()
#
#     print('end main')


# # # # # # # # # # # # # # # # # # # # # # # # # # #
# # # with EXACT (or KNOWN) number of threads # # #
# # # # # # # # # # # # # # # # # # # # # # # # #
# database_value = 0
#
#
# def increase(lock):
#     global database_value
#     # 'context manager'
#     # with lock:
#
#     # or specify acquire and release (same as file open/close)
#     lock.acquire()
#     local_copy = database_value
#     # processing
#     local_copy += 1
#     time.sleep(0.1)
#     database_value = local_copy
#     lock.release()
#
#
# lock = Lock()
# print('start value', database_value)
#
# thread1 = Thread(target=increase, args=(lock,))
# thread2 = Thread(target=increase, args=(lock,))
#
# thread1.start()
# thread2.start()
#
# thread1.join()
# thread2.join()
#
# print('end value', database_value)


# # # TEST SCRIPT # # #

# def db_query_1():
#     con = psycopg2.connect(
#         database="deb2u2ehdm8ih3",
#         user="bjoonismanuyqb",
#         password="42c662ab36a741716575f3e0101741349280622fff71ce246b15410de5c460d6",
#         host="ec2-54-76-132-202.eu-west-1.compute.amazonaws.com",
#         port='5432'
#     )
#     curs_obj = con.cursor()
#     curs_obj.execute("""select * from thepubpicker.detail d """)
#
#
# def db_query_2():
#     con = psycopg2.connect(
#         database="deb2u2ehdm8ih3",
#         user="bjoonismanuyqb",
#         password="42c662ab36a741716575f3e0101741349280622fff71ce246b15410de5c460d6",
#         host="ec2-54-76-132-202.eu-west-1.compute.amazonaws.com",
#         port='5432'
#     )
#     curs_obj = con.cursor()
#     curs_obj.execute("""select * from thepubpicker.review r """)


#
# def square_numbers():
#     for i in range(100):
#         i * i
#
# threads = []
# num_threads = 0
#
# for i in range(num_threads):
#     thread = Thread(target=square_numbers)
#     threads.append(thread)
#
# for thread in threads:
#     thread.start()
#
# for thread in threads:
#     thread.join()
#
# print('end threading')
