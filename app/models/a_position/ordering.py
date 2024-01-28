
class Ordering:
    def __init__(self, name='ordering', alias="#", alias2="", required='false', form_visible='false',
                 table_visible='true', value="", control='input', rank=0):
        self.name = name
        self.alias = alias
        self.alias2 = alias2
        self.required = required
        self.form_visible = form_visible
        self.table_visible = table_visible
        self.value = value
        self.control = control
        self.rank = rank
