function list_setup() {
    console.log('LIST_SETUP')

    list_delete()

    list_create()

    const [new_visible, new_order, new_asc_desc] = list_columns()

    list_filter(new_visible, new_order, new_asc_desc)

}
