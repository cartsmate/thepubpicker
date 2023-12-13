function list_setup_diary(pub_filtered) {
    console.log('list diary setup')
//    console.log('pub filtered received: ' + pub_filtered.length)
//    console.log('pub: ' + pub.length)

    list_delete()

    list_create(pub_filtered)

    const [new_visible, new_order, new_asc_desc] = list_columns_diary()

    list_filter(new_visible, new_order, new_asc_desc)

}
