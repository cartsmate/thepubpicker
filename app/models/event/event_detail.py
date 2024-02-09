
class EventDetail:
    def __init__(self, name='event_detail', alias="Detail", alias2="", required=False, form_visible=True,
                 table_visible=True, value="", control='input', rank=0, datatype='str'):
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
