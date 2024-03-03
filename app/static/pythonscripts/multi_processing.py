import os
import time
import psycopg2
import pandas as pd
from multiprocessing.connection import Connection
from multiprocessing import Process, freeze_support, Pool, Lock, Value, Array, Queue

import psycopg2.errorcodes

from app.static.pythonscripts.files_pub import FilesPub


# # USE CASE 7 # # # - using a pool of processes
# def cube(number):
#     return number * number * number
#
#
# if __name__ == '__main__':
#     numbers = range(10)
#     pool = Pool()
#     # map, apply, join, close - these are the methods of Pool()
#     result = pool.map(cube, numbers)
#     # pool.apply(cube, numbers[0])
#     pool.close()
#     pool.join()
#
#     print(result)

    
# # USE CASE 6 # # # - sharing variable with a QUEUE
# def square(numbers, queue):
#     for i in numbers:
#         queue.put(i * i)
#
#
# def make_negative(numbers, queue):
#     for i in numbers:
#         queue.put(-1 * i)
#
#
# if __name__ == '__main__':
#     q = Queue()
#     numbers = range(1, 6)
#     p1 = Process(target=square, args=(numbers, q))
#     p2 = Process(target=make_negative, args=(numbers, q))
#
#     p1.start()
#     p2.start()
#
#     p1.join()
#     p2.join()
#
#     while not q.empty():
#         print(q.get())


# # USE CASE 5 # # # - sharing variable/array with LOCK
# def add_100(number, lock):
# def add_100(numbers, lock):
#     for i in range(100):
#         time.sleep(0.01)
#         # SHARED VALUE
#         # with lock:
#         #     # lock.acquire()
#         #     number.value += 1
#             # lock.release()
#         # SHARED ARRAY
#         for i in range(len(numbers)):
#             numbers[i] += 1
#
# if __name__ == '__main__':
#     lock = Lock()
#     # SHARED VALUE
#     # shared_number = Value('i', 0)
#     # print('Number at beginning is: ', shared_number.value)
#     # p1 = Process(target=add_100, args=(shared_number, lock))
#     # p2 = Process(target=add_100, args=(shared_number, lock))
#
#     # SHARED ARRAY
#     shared_array = Array('d', [0.0, 100.0, 200.0])
#     print('Array at beginning is: ', shared_array[:])
#     p1 = Process(target=add_100, args=(shared_array, lock))
#     p2 = Process(target=add_100, args=(shared_array, lock))
#
#     p1.start()
#     p2.start()
#
#     p1.join()
#     p2.join()
#
#     # print('Number at the end is: ', shared_number.value)
#     print('Array at the end is: ', shared_array[:])


# # ATTEMPT 4 # # # - DOES NOT work (use case with database)

db_conn = psycopg2.connect(
        database="deb2u2ehdm8ih3",
        user="bjoonismanuyqb",
        password="42c662ab36a741716575f3e0101741349280622fff71ce246b15410de5c460d6",
        host="ec2-54-76-132-202.eu-west-1.compute.amazonaws.com",
        port='5432'
    )


# def query_detail():
#     curs_obj = conn.cursor()
#     curs_obj.execute("""SELECT column_name
#                             FROM information_schema.columns
#                             WHERE table_schema = 'thepubpicker'
#                             AND
#                             table_name = 'detail' """)
#     result = curs_obj.fetchall()
#     table_headers = []
#     for res in result:
#         table_headers.append(res[0])
#
#     curs_obj.execute("""select * from thepubpicker.detail d""")
#     result = curs_obj.fetchall()
#     global df_detail
#     df_detail = pd.DataFrame(result, columns=table_headers)
#
#
# def query_review():
#     curs_obj = conn.cursor()
#     curs_obj.execute("""SELECT column_name
#                         FROM information_schema.columns
#                         WHERE table_schema = 'thepubpicker'
#                         AND
#                         table_name = 'review' """)
#     result = curs_obj.fetchall()
#     table_headers = []
#     for res in result:
#         table_headers.append(res[0])
#     curs_obj.execute("""select * from thepubpicker.review """)
#     result = curs_obj.fetchall()
#     global df_review
#     df_review = pd.DataFrame(result, columns=table_headers)
#
#
# def query_diary():
#     curs_obj = conn.cursor()
#     curs_obj.execute("""SELECT column_name
#                         FROM information_schema.columns
#                         WHERE table_schema = 'thepubpicker'
#                         AND
#                         table_name = 'diary' """)
#     result = curs_obj.fetchall()
#     table_headers = []
#     for res in result:
#         table_headers.append(res[0])
#     curs_obj.execute("""select * from thepubpicker.diary """)
#     result = curs_obj.fetchall()
#     global df_diary
#     df_diary = pd.DataFrame(result, columns=table_headers)
#
#
# def query_station():
#     curs_obj = conn.cursor()
#     curs_obj.execute("""SELECT column_name
#                         FROM information_schema.columns
#                         WHERE table_schema = 'thepubpicker'
#                         AND
#                         table_name = 'station' """)
#     result = curs_obj.fetchall()
#     table_headers = []
#     for res in result:
#         table_headers.append(res[0])
#     curs_obj.execute("""select * from thepubpicker.station s""")
#     result = curs_obj.fetchall()
#     global df_station
#     df_station = pd.DataFrame(result, columns=table_headers)
#
#
# def query_direction():
#     curs_obj = conn.cursor()
#     curs_obj.execute("""SELECT column_name
#                         FROM information_schema.columns
#                         WHERE table_schema = 'thepubpicker'
#                         AND
#                         table_name = 'direction' """)
#     result = curs_obj.fetchall()
#     table_headers = []
#     for res in result:
#         table_headers.append(res[0])
#     curs_obj.execute("""select * from thepubpicker.direction dir""")
#     result = curs_obj.fetchall()
#     global df_direction
#     df_direction = pd.DataFrame(result, columns=table_headers)
#
#
# def query_daily_event():
#     curs_obj = conn.cursor()
#     curs_obj.execute("""SELECT column_name
#                         FROM information_schema.columns
#                         WHERE table_schema = 'thepubpicker'
#                         AND
#                         table_name = 'daily_event' """)
#     result = curs_obj.fetchall()
#     table_headers = []
#     for res in result:
#         table_headers.append(res[0])
#     curs_obj.execute("""select * from thepubpicker.daily_event evnt""")
#     result = curs_obj.fetchall()
#     global df_daily_event
#     df_daily_event = pd.DataFrame(result, columns=table_headers)
#
#
# start = time.process_time()
# if __name__ == '__main__':
#     processes = []
#     process = Process(target=query_detail)
#     processes.append(process)
#
#     process = Process(target=query_review)
#     processes.append(process)
#
#     process = Process(target=query_diary)
#     processes.append(process)
#
#     process = Process(target=query_station)
#     processes.append(process)
#
#     process = Process(target=query_direction)
#     processes.append(process)
#
#     process = Process(target=query_daily_event)
#     processes.append(process)
#
#     for process in processes:
#         process.start()
#
#     for process in processes:
#         process.join()
#
#     df_pub = FilesPub().get_pub_all(df_detail, df_review, df_diary, df_station, df_direction)
#     df_pub_with_event = pd.merge(df_pub, df_daily_event, on='pub_identity', how='left')
#
#     print(df_pub_with_event.shape[0])
#     print(time.process_time() - start)
#

# # ATTEMPT 3 # # # - works, time output
#
# db_conn = psycopg2.connect(
#             database="deb2u2ehdm8ih3",
#             user="bjoonismanuyqb",
#             password="42c662ab36a741716575f3e0101741349280622fff71ce246b15410de5c460d6",
#             host="ec2-54-76-132-202.eu-west-1.compute.amazonaws.com",
#             port='5432')
#
query_load_list = [('''select * from thepubpicker.detail d'''),
                   ('''select * from thepubpicker.review r'''),
                   ('''select * from thepubpicker.diary dy'''),
                   ('''select * from thepubpicker.daily_event evnt'''),
                   ('''select * from thepubpicker.station s'''),
                   ('''select * from thepubpicker.direction dir ''')
                   ]

query_load = '''select * from thepubpicker.detail d limit 10'''


def read_sql(query):
    return pd.read_sql(query, db_conn)


print(__name__)
if __name__ == '__main__':
    start_time = time.time()
    with Pool(6) as p:
        data_load = p.map(read_sql, query_load_list)
    elapsed_time = time.time() - start_time
    for dl in data_load:
        print(dl.shape[0])

    print(f"job finished in {elapsed_time} seconds")


# # # ATTEMPT 2 # # # - doen't not work !!!!!

# def run(query_load):
#     try:
#         cursor = db_conn.cursor()
#         cursor.execute(query_load)
#         records = cursor.fetchall()
#         return records
#     except:
#         print('connection failed')
#         return -1
#
#
# print(__name__)
# if __name__ == '__main__':
#     freeze_support()
#     print('enter query runs: ')
#     # n = int(input())
#     n = 3
#     print(n, ' times')
#     results = []
#
#     with Pool(processes=os.cpu_count() - 1) as pool:
#         for _ in range(n):
#             res = pool.apply_async(run(query_load))
#             results.append(res)
#             res = [result.get() for result in results]
#
#     print(res)
#     pool.close()
#     pool.join()


# # # ATTEMPT 1 # # # - WORKS (but no output)
# def square_numbers():
#     for i in range(100):
#         i * i
#         time.sleep(0.1)
#
# processes = []
# num_process = os.cpu_count()
#
# if __name__ == '__main__':
#     # create process
#     for i in range(num_process):
#         p = Process(target=square_numbers)
#         processes.append(p)
#
#     # start
#     for p in processes:
#         p.start()
#
#     # join
#     for p in processes:
#         p.join()
#
#     print('end multi processing')
