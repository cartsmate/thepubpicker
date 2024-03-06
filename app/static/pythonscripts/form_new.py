import pandas as pd
from app.models.daily_event.daily_event import EventIdentity
from app.models.diary.diary import Diary


class NewForm:

    @staticmethod
    def new_form(model, pub_id):
        new_model = model
        if model == Diary():
            for key, value in Diary().__dict__.items():
                for k, val in value.__dict__.items():
                    key_item = value_item = ''
                    if k == 'name':
                        key_item = val
                    if k == 'value':
                        if isinstance(val, EventIdentity):
                            for ky, vl in val.__dict__.items():
                                if ky == 'value':
                                    value_item = vl
                        else:
                            value_item = val
                        setattr(new_model, key_item, value_item)
        else:
            for key, value in model.__dict__.items():
                setattr(new_model, value.name, value.value)

        setattr(new_model, 'pub_identity', pub_id)
        df = pd.DataFrame([new_model.__dict__])
        return df
