
class Address:
    def __init__(self, name='address', alias="Address", alias2="Addresss", required='true', form_visible='true',
                 table_visible='false', value="", control='input', rank=1):
        self.name = name
        self.alias = alias
        self.alias2 = alias2
        self.required = required
        self.form_visible = form_visible
        self.table_visible = table_visible
        self.value = value
        self.control = control
        self.rank = rank
