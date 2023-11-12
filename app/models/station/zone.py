
class Zone:
    def __init__(self, name='zone', required='false', form_visible='false', table_visible='false', alias='Station Zone',
                 value=0, control='none'):
        self.name = name
        self.required = required
        self.form_visible = form_visible
        self.table_visible = table_visible
        self.alias = alias
        self.value = value
        self.control = control
