function list_setup(mapped_pubs) {
    console.log('LIST SETUP: ' + mapped_pubs.length)

    list_delete()

    list_create(mapped_pubs)

    const [new_visible, new_order, new_asc_desc] = list_columns()

    list_filter(new_visible, new_order, new_asc_desc)

}
