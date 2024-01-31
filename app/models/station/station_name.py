
class StationName:
    def __init__(self, name='station_name', required=False, form_visible=True, table_visible=True,
                 alias="Station", alias2="", value="", control='input', rank=2):
        self.name = name
        self.required = required
        self.form_visible = form_visible
        self.table_visible = table_visible
        self.alias = alias
        self.alias2 = alias2
        self.value = value
        self.control = control
        self.rank = rank
