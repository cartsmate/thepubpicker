
from app import app
from flask import render_template, request
from app.static.pythonscripts.postgres import PostgresConnection
from app.static.pythonscripts.multi_threading import MultiThreadingPub

from config import Configurations
from app.static.pythonscripts.dataframes import Dataframes


@app.route("/test/", methods=['GET'])
def test():
    # df_data = PostgresConnection().read_postgres('detail')
    # data_json = df_data.to_dict(orient='records')
    # print(data_list)
    results = MultiThreadingPub().thread_caller()
    print(results)
    data_json = results.to_dict(orient='records')
    # data = [{"a": 0, "b": 1, "c": 2}]
    return render_template('00_test.html',
                           data=data_json,
                           )
