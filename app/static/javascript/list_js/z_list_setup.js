function list_setup(pub_filtered) {
    console.log('list setup')

    list_delete()

    list_create(pub_filtered)

    const [new_visible, new_order, new_asc_desc] = list_columns()

    list_filter(new_visible, new_order, new_asc_desc)


    document.getElementById('pub_table').style.display = "block"
}
