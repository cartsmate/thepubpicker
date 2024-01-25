function list_setup_beta(pubs_to_show) {
    console.log('list setup')

    list_delete()

    list_create()

    const [new_visible, new_order, new_asc_desc] = list_columns_beta()

    list_filter_beta(new_visible, new_order, new_asc_desc)
}
