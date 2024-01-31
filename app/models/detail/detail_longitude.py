
class DetailLongitude:  # define child class
    def __init__(self, name='detail_longitude', alias="Longitude", alias2="", required=True, form_visible=False,
                 table_visible=False, value=0, control=False, rank=0):
        self.name = name
        self.alias = alias
        self.alias2 = alias2
        self.required = required
        self.form_visible = form_visible
        self.table_visible = table_visible
        self.value = value
        self.control = control
        self.rank = rank
