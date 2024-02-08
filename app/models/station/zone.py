
class Zone:
    def __init__(self, name='zone', required=False, form_visible=False, table_visible=False, alias='Station Zone',
                 alias2="", value=0, control='none', datatype='str'):
        self.name = name
        self.required = required
        self.form_visible = form_visible
        self.table_visible = table_visible
        self.alias = alias
        self.alias2 = alias2
        self.value = value
        self.control = control
        self.datatype = datatype
