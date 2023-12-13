function list_setup_search(pub_filtered) {
    console.log('list setup search')
//    console.log('pub filtered received: ' + pub_filtered.length)
//    console.log('pub: ' + pub.length)

    list_delete()

    list_create(pub_filtered)

    const [new_visible, new_order, new_asc_desc] = list_columns()

    list_filter_search(new_visible, new_order, new_asc_desc)

}
