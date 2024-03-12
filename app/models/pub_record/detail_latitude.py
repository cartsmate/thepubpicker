
class DetailLatitude:
    def __init__(self, name="detail_latitude", alias="Latitude", alias2="", required=True, form_visible=False,
                 table_visible=False, value=0, control=False, rank=0, datatype='float',
                 places_field=None):
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
        self.places_field = places_field
