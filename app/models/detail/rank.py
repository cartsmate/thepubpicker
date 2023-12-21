
class Rank:
    def __init__(self, name='rank', alias="Rank", required='false', form_visible='false',
                 table_visible='true', value=0, control='input', rank=4):
        self.name = name
        self.alias = alias
        self.required = required
        self.form_visible = form_visible
        self.table_visible = table_visible
        self.value = value
        self.control = control
        self.rank = rank
