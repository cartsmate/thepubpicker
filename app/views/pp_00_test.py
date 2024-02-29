
from app import app
from flask import render_template, request
from app.static.pythonscripts.postgres import PostgresConnection

from config import Configurations
from app.static.pythonscripts.dataframes import Dataframes


@app.route("/test/", methods=['GET'])
def test():
    df_data = PostgresConnection().read_postgres('detail')
    data_json = df_data.to_dict(orient='records')
    # print(data_list)

    return render_template('00_test.html',
                           data=data_json,
                           )
