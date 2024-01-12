function list_setup_diary(clicked_day) {
    console.log('list diary setup')
//    console.log('pub filtered received: ' + pub_filtered.length)
//    console.log('pub: ' + pub.length)

    list_delete()
    pub_filtered = filter_all_data()
    list_create(pub_filtered)

    const [new_visible, new_order, new_asc_desc] = list_columns_diary(clicked_day)

    list_filter_beta(new_visible, new_order, new_asc_desc)

}
