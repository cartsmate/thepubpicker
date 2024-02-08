import pandas as pd
from flask import request
from config import Configurations
from app.models.detail.detail import Detail
from app.static.pythonscripts.s3 import S3

# config2 = Configurations().get_config2()
directory_path = Configurations().get_config2()['directory_path']
env_vars = Configurations().get_config2()


class EditPub:

    def edit_pub(self, model):
        print('edit: ' + model.__str__())
        new_model = model
        for key, value in model.__dict__.items():
            if value.control == 'check':
                if request.form.get[value.name] == 'on':
                    setattr(new_model, value.name, '1')
                else:
                    setattr(new_model, value.name, '0')
            else:
                setattr(new_model, value.name, request.form[value.name])
        df = pd.DataFrame([new_model.__dict__])
        return df
