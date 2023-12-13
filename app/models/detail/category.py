
class Category:
    def __init__(self, name='category', alias="Style", required='false', form_visible='true',
                 table_visible='false', value="", control="input", rank=0):
        self.name = name
        self.alias = alias
        self.required = required
        self.form_visible = form_visible
        self.table_visible = table_visible
        self.value = value
        self.control = control
        self.rank = rank
