
class Website:
    def __init__(self, name='website', alias="Web", alias2="Website", required=False, form_visible=True,
                 table_visible=True, value="", control=False, rank=0):
        self.name = name
        self.alias = alias
        self.alias2 = alias2
        self.required = required
        self.form_visible = form_visible
        self.table_visible = table_visible
        self.value = value
        self.control = control
        self.rank = rank
