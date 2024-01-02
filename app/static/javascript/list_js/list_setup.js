function list_setup(pub_filtered) {
    console.log('list setup')
//    console.log('pub filtered received: ' + pub_filtered.length)
    console.log('data in: ' + pub_filtered.length)

    list_delete()

    list_create(pub_filtered)

    const [new_visible, new_order, new_asc_desc] = list_columns()

    list_filter(new_visible, new_order, new_asc_desc)

}
