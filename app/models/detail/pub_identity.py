
class PubIdentity:

    def __init__(self, name='pub_identity', alias="Pub Identity", alias2="", required=True, form_visible=False,
                 table_visible=False, value=False, control='input', icon='none', rank=0, data_type='str',
                 menu_filter=False):
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
        self.data_type = data_type
        self.menu_filter = menu_filter
