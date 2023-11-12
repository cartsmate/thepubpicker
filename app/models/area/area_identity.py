from app.static.pythonscripts.uuid import Uuid


class AreaIdentity:
    def __init__(self, name='area_identity', alias="Area Identity", required='false', form_visible='false',
                 table_visible='false', value=0, control='none'):
        self.name = name
        self.alias = alias
        self.required = required
        self.form_visible = form_visible
        self.table_visible = table_visible
        self.value = value
        self.control = control
