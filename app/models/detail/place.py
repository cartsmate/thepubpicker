
class Place:
    def __init__(self, name='place', alias="Pub Place", alias2="", required=False, form_visible=False,
                 table_visible=False, value="", control=False, rank=0, datatype='str', places_field='place_id'):
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
