import pandas as pd
from flask import request
from config import Configurations
from app.models.review.review import Review
from app.models.diary.diary import Diary
from app.models.daily_event.daily_event import DailyEvent
from app.models.detail.detail import Detail
from app.static.pythonscripts.s3 import S3

# config2 = Configurations().get_config2()
directory_path = Configurations().get_config2()['directory_path']
env_vars = Configurations().get_config2()


class GetForm:

    def get_form(self, model):
        print('get_form: ' + model.__str__())
        new_model = model
        for key, value in model.__dict__.items():
            print(key, value)
            print(value.name)
            if value.control == 'check':
                print("check")
                if request.form.get(value.name) == 'on' or request.form.get(value.name) == 'true':
                    setattr(new_model, value.name, '1')
                else:
                    setattr(new_model, value.name, '0')
            else:
                print("NOT check")
                print(value.name)
                print(request.form[value.name])
                setattr(new_model, value.name, request.form[value.name])
        df = pd.DataFrame([new_model.__dict__])
        return df

    def get_form_event(self):
        print('get_form_event: ' + DailyEvent().__str__())
        list_of_events = []

        for key, value in Diary().__dict__.items():
            if value.menu_filter:
                # print(value.name)
                new_model = DailyEvent()
                for evnt_key, evnt_value in DailyEvent().__dict__.items():
                    # print(evnt_value.name)
                    if value.control == 'check':
                        # print("check")
                        if request.form.get(value.name) == 'on' or request.form.get(value.name) == 'true':
                            setattr(new_model, value.name, '1')
                        else:
                            setattr(new_model, value.name, '0')
                    else:
                        # print('non-check')
                        # print(value.name + '_' + evnt_value.name)
                        # print(request.form[value.name + "_" + evnt_value.name])
                        try:
                            setattr(new_model, evnt_value.name, request.form[value.name + "_" + evnt_value.name])
                        except:
                            setattr(new_model, evnt_value.name, '')

                # print("new_model.__dict__")
                # print(new_model.__dict__)
                mod_dict = new_model.__dict__
                list_of_events.append(mod_dict)

        df = pd.DataFrame(list_of_events)
        return df
