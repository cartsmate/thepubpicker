function list_setup_beta(pub_filtered) {
    console.log('list setup')
//    console.log('pub filtered received: ' + pub_filtered.length)
    console.log('data in: ' + pub_filtered.length)

    list_delete()

    list_create(pub_filtered)

    const [new_visible, new_order, new_asc_desc] = list_columns_beta()
    //new_visible = list_columns_beta()
    list_filter_beta(new_visible, new_order, new_asc_desc)
    //list_filter_beta(new_visible)

    //document.getElementById('pub_table').style.display = "block"
}
