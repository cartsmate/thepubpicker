function list_setup_beta() {
    console.log('LIST SETUP BETA')

    list_delete()

    list_create()

    const [new_visible, new_order, new_asc_desc] = list_columns_beta()

    list_filter_beta(new_visible, new_order, new_asc_desc)

}
