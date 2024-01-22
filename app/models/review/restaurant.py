

class Restaurant:
    def __init__(self, name="restaurant", alias="Restaurant", alias1="Food", alias2="Restaurant Food", required='false',
                 form_visible='false',
                 table_visible='false', value='0', control="check", icon="restaurant.png"):
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
