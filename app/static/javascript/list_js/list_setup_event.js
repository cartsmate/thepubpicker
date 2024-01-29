function list_setup_event(clicked_event) {
    console.log('list event setup')

    list_delete()

    list_create_events()

    const [new_visible, new_order, new_asc_desc] = list_columns_event(clicked_event)

    list_filter_beta_events(new_visible, new_order, new_asc_desc)

}
