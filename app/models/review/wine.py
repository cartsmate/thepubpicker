

class Wine:
    def __init__(self, name="wine", alias="Wine", alias1="Bar", alias2="Wine Bar", required='false', form_visible='false',
                 table_visible='false', value='0', control="check", icon="wine.png"):
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
