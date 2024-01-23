

class Cocktail:
    def __init__(self, name="cocktail", alias="Cocktail", alias1="Bar", alias2="Cocktail Bar", required='false',
                 form_visible='false', table_visible='false', value='0', control="check", icon="cocktail.png", data_type='str'):
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