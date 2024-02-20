
class Shortcut:
    def __init__(self, name='shortcut', alias="Shortcut", alias2="Shortcut", required=False, form_visible=False,
                 table_visible=False, value="", control='input', rank=1, datatype='str'):
        self.name = name
        self.alias = alias
        self.alias2 = alias2
        self.required = required
        self.form_visible = form_visible
        self.table_visible = table_visible
        self.value = value
        self.control = control
        self.rank = rank
        self.datatype = datatype
