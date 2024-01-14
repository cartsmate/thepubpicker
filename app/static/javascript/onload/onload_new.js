function onload_new() {
    populate_all_filters(pub)

    populate_summary(daily_id)
    pre_populate(filters)
    pub_filtered = filter_all_data()
    populate_all_filters(pub_filtered)

    add_listeners_spinner()
    populate_photo_beta()

    if (pub_filtered.length < pub.length) {
        list_setup_beta(pub_filtered)
        populate_feature(pub_filtered)
        populate_header(pub_filtered.length)
        map_load_collection()
        document.getElementById('template_map').style.display = "block"
        document.getElementById('template_list').style.display = "block"
        document.getElementById('template_header').style.display = "block"
    } else {
        map_load_search()
    }



}
