
class Address:
    def __init__(self, name='address', alias="Address", alias2="Addresss", required=True, form_visible=True,
                 table_visible=False, value="", control='input', rank=1, datatype='str',
                 places_field='formatted_address'):
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
