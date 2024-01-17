import os
import uuid
import pandas as pd
# from PIL import Image
from flask import render_template, redirect, url_for, request, flash
from app import app
from csv import writer
from config import Configurations
from app.models.photo.photo import Photo
from werkzeug.utils import secure_filename
from app.static.pythonscripts.dataframes import Dataframes
from app.static.pythonscripts.entities_single import EntitiesSingle
from app.static.pythonscripts.s3 import S3
from app.static.pythonscripts.csv import Csv
from app.static.pythonscripts.files_photo import FilesPhoto


UPLOAD_FOLDER = 'static/uploads/'
app.config['UPLOAD_FOLDER'] = UPLOAD_FOLDER

ALLOWED_EXTENSIONS = set(['png', 'jpg', 'jpeg', 'gif'])

config = Configurations().get_config()
config2 = Configurations().get_config2()


def allowed_file(filename):
    return '.' in filename and filename.rsplit('.', 1)[1].lower() in ALLOWED_EXTENSIONS


@app.route('/display/<filename>')
def display_image(filename):
    print('display_image filename: ' + filename)
    return redirect(url_for('static', filename='uploads/' + filename), code=301)


@app.route("/photo/", methods=['POST'])
def photo():
    # # # GET REQUESTED PUB
    pub_id = request.args.get('pub_id')
    print('id from url: ' + pub_id)

    file = request.files['file']
    print(file)

    filename = secure_filename(file.filename)
    print(filename)
    x, y = os.path.splitext(filename)
    print(y)

    new_id = uuid.uuid4()
    file.save(os.getcwd() + '/app/static/images/venue/' + str(new_id) + '.jpeg')

    new_photo = Photo(photo_identity=new_id, photo_deletion=False, pub_identity=pub_id)
    df_new_photo = pd.DataFrame([new_photo.__dict__])
    print(df_new_photo)

    df_photos_current = Csv().go_get_photos()
    df_updated_details = FilesPhoto().add_photo_df(df_photos_current, df_new_photo)
    df_updated_details = FilesPhoto().update_photo_csv(df_updated_details)

    return redirect(url_for('pub', id=pub_id), code=307)
