import os
import json
import pandas as pd
import uuid
from config import Configurations
from app.models.detail.detail import Detail
from app.models.diary.diary import Diary
from app.models.direction.direction import Direction
from app.models.photo.photo import Photo
from app.models.review.review import Review
from app.models.station.station import Station

config = Configurations().get_config()


class ControlsList:

    def go_get_control_list(self):
        total_list_obj = {}
        list_of_lists = ['form_visible_list', 'table_visible_list', 'required_list', 'alias_list', 'icon_list',
                         'dropdown_list', 'input_list', 'star_list', 'date_list', 'slider_list', 'check_list',
                         'fields_list']
        for item in list_of_lists:
            total_list_obj[item] = []
        total_list_obj['theme'] = '#808000'
        class_list = [Detail(), Diary(), Direction(), Review(), Station()]
        for cl in class_list:
            # print('class: ' + str(cl))
            for k, v in cl.__dict__.items():
                # print('key: ' + k)
                total_list_obj['fields_list'].append(v.name)
                if v.form_visible == 'true':
                    total_list_obj['form_visible_list'].append(v.name)
                if v.table_visible == 'true':
                    total_list_obj['table_visible_list'].append(v.name)
                if v.required == 'true':
                    total_list_obj['required_list'].append(v.name)
                try:
                    if v.icon is not 'none':
                        total_list_obj['icon_list'].append(v.name)
                except:
                    pass
                try:
                    if v.alias1:
                        alias_json = {v.name: v.alias1 + " " + v.alias2}
                        total_list_obj['alias_list'].append(alias_json)
                    else:
                        alias_json = {v.name: v.alias}
                        total_list_obj['alias_list'].append(alias_json)
                except:
                    pass
                if v.control == "dropdown":
                    total_list_obj['dropdown_list'].append(v.name)
                if v.control == "star":
                    total_list_obj['star_list'].append(v.name)
                if v.control == "input":
                    total_list_obj['input_list'].append(v.name)
                if v.control == "date":
                    total_list_obj['date_list'].append(v.name)
                if v.control == "slider":
                    total_list_obj['slider_list'].append(v.name)
                if v.control == "check":
                    total_list_obj['check_list'].append(v.name)
        return total_list_obj
