from app import app
from flask import render_template, request, redirect, url_for

from app.models.detail.detail import Detail
from app.models.review.review import Review
from app.models.diary.diary import Diary
from app.models.daily_event.daily_event import DailyEvent

from app.static.pythonscripts.pub_get import GetPub
from app.static.pythonscripts.pub_submit import PubSubmit


@app.route("/submit/", methods=['POST'])
def submit():
    # # # GET SUBMITTED PUB
    pub_id = request.args.get('id')
    filters = request.args.get('filters')

    # # # GET CURRENT DATASETS
    df_detail_all = GetPub().get_all(Detail())
    df_review_all = GetPub().get_all(Review())
    df_diary_all = GetPub().get_all(Diary())
    df_event_all = GetPub().get_all(DailyEvent())

    # # # CHECK IF NEW OR EXITING PUB RECORD
    if GetPub().get_1(df_detail_all, pub_id).empty:
        # # NEW PUB - ADD ROW TO DATAFRAME
        PubSubmit.add_pub(df_detail_all, df_review_all)
    else:
        # # EXISTING PUB - EDIT ROW IN DATAFRAME
        PubSubmit.edit_pub(pub_id, df_detail_all, df_review_all, df_diary_all, df_event_all)

    return redirect(url_for('pub', id=pub_id, filters=filters))
