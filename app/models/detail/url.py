
class Url:
    def __init__(self, name='url', alias="Url", alias2="", required='false', form_visible='false',
                 table_visible='false', value="", control='false', rank=0):
        self.name = name
        self.alias = alias
        self.alias2 = alias2
        self.required = required
        self.form_visible = form_visible
        self.table_visible = table_visible
        self.value = value
        self.control = control
        self.rank = rank
