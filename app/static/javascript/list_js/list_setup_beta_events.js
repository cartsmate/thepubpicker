function list_setup_beta_events() {
    console.log('LIST SETUP BETA events')

    list_delete()

    list_create_events()

    const [new_visible, new_order, new_asc_desc] = list_columns_beta_events()

    list_filter_beta_events(new_visible, new_order, new_asc_desc)

}
