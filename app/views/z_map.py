from app import app
from flask import render_template


@app.route("/map/", methods=['GET'])
def map():
    print('in the map view')
    return render_template('map_test.html')
