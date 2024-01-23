

class Beer:
    def __init__(self, name="beer", alias="Craft", alias1="Beer", alias2="Craft Beer", required='false', form_visible='false',
                 table_visible='false', value='0', control="check", icon="beer.png", data_type='str'):
        self.name = name
        self.alias = alias
        self.alias1 = alias1
        self.alias2 = alias2
        self.required = required
        self.form_visible = form_visible
        self.table_visible = table_visible
        self.value = value
        self.control = control
        self.icon = icon
        self.data_type = data_type