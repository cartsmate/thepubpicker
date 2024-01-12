function table_setup(filtered_data) {
    console.log('TABLE_SETUP')

    delete_table()
    //console.log('filtered_data')
    //console.log(filtered_data)
    create_table(filtered_data)

    const [new_visible, new_order, new_asc_desc] = column_filter()

    filter_table(new_visible, new_order, new_asc_desc)

}
