function list_setup_search(pub_filtered) {
    console.log('list setup search')

//    list_delete()

    list_create(pub_filtered)

    const [new_visible, new_order, new_asc_desc] = list_columns()

    list_filter_search(new_visible, new_order, new_asc_desc)

}
