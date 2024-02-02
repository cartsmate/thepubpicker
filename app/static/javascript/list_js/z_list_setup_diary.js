function list_setup_diary(clicked_day) {
    console.log('list diary setup')

    list_delete()

    list_create()

    const [new_visible, new_order, new_asc_desc] = list_columns_diary(clicked_day)

    list_filter_beta(new_visible, new_order, new_asc_desc)

}
