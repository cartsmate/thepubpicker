from app import app
import pandas as pd
from flask import render_template, request, redirect, url_for

from app.models.detail.detail import Detail
from app.models.review.review import Review
from app.models.diary.diary import Diary
from app.models.event.event import Event

from app.static.pythonscripts.pub_get import GetPub
from app.static.pythonscripts.pub_update import UpdatePub
from app.static.pythonscripts.pub_write import WritePub

from app.static.pythonscripts.form_get import GetForm


@app.route("/submit/", methods=['POST'])
def submit():
    print('start SUBMIT')

    # # # GET REQUESTED PUB
    pub_id = request.args.get('id')
    filters = request.args.get('filters')

    df_detail_all = GetPub().get_all(Detail())
    df_review_all = GetPub().get_all(Review())
    df_diary_all = GetPub().get_all(Diary())
    df_event_all = GetPub().get_all(Event())

    if GetPub().get_1(Detail(), pub_id).empty:
        print('# # # ADD new pub # # #')

        df_added_detail = pd.concat([df_detail_all, GetForm().get_form(Detail())], ignore_index=True)
        df_added_review = pd.concat([df_review_all, GetForm().get_form(Review())], ignore_index=True)
        # df_added_diary = pd.concat([df_diary_all, GetForm().get_form(Diary())], ignore_index=True)
        # df_added_event = pd.concat([df_event_all, GetForm().get_form(Event())], ignore_index=True)

        print('Detail PASS') if WritePub().write_csv('detail', 'add', df_detail_all, df_added_detail) else print('Detail FAIL')
        print('Review PASS') if WritePub().write_csv('review', 'add', df_review_all, df_added_review) else print('Review FAIL')
        # print('Diary PASS') if WritePub().write_csv('diary', 'add', df_diary_all, df_added_diary) else print('Diary FAIL')
        # print('Diary PASS') if WritePub().write_csv('event', 'add', df_event_all, df_added_event) else print('Event FAIL')

    else:
        print('# # # EDIT current pub # # #')
        df_updated_detail = UpdatePub().update_pub(Detail(), df_detail_all, GetForm().get_form(Detail()))
        df_updated_review = UpdatePub().update_pub(Review(), df_review_all, GetForm().get_form(Review()))
        # df_diary = GetForm().get_form(Diary())
        # print('$$$$$$$$$$$$$$$$')
        # print(df_diary.T)
        # df_updated_diary = UpdatePub().update_pub(Diary(), df_diary_all, df_diary)

        df_event = GetForm().get_form_event()
        print("************")
        print(df_event)
        df_updated_diary, df_updated_event = UpdatePub().update_pub_events(pub_id, df_diary_all, df_event_all, df_event)

        print('Detail PASS') if WritePub().write_csv('detail', 'edit', df_detail_all, df_updated_detail) else print(
            'Detail FAIL')
        print('Review PASS') if WritePub().write_csv('review', 'edit', df_review_all, df_updated_review) else print(
            'Review FAIL')
        print('Diary PASS') if WritePub().write_csv('diary', 'edit', df_diary_all, df_updated_diary) else print(
            'Diary FAIL')
        print('Diary PASS') if WritePub().write_csv('event', 'edit', df_event_all, df_updated_event) else print(
            'Diary FAIL')

    # print('details csv file updated')

    print('end SUBMIT')

    return redirect(url_for('pub', id=pub_id, filters=filters))
