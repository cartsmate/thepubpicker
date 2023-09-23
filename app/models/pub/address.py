
class Address:
    def __init__(self, name='address', alias="address", required='true', form_visible='true',
                 table_visible='false', value="", control='input', rank=1):
        self.name = name
        self.alias = alias
        self.required = required
        self.form_visible = form_visible
        self.table_visible = table_visible
        self.value = value
        self.control = control
        self.rank = rank
