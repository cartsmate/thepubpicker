class Extra:
    def __init__(self, name="extra", alias="Extra", alias2="", required=False, form_visible=False,
                 table_visible=False, value="TBC", control="input", icon='none', rank=3, datatype='str',
                 places_field=None):
        self.name = name
        self.alias = alias
        self.alias2 = alias2
        self.required = required
        self.form_visible = form_visible
        self.table_visible = table_visible
        self.value = value
        self.control = control
        self.icon = icon
        self.rank = rank
        self.datatype = datatype
        self.places_field = places_field
