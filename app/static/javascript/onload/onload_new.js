
function onload_new() {

    if (isTouchDevice()) {
        document.getElementById('forwards').style.display = 'none'
        document.getElementById('rewards').style.display = 'none'
    }
    set_color_theme()
    get_no_reviews()
    display_counter(counter)

    the_map = document.getElementById('new_map')
    the_map.classList.add('map_on_home')

    toggle_overlay()
    toggle_direction()
    toggle_station()
    toggle_features()
    //toggle_diary()
    toggle_reset()

    populate_all_filters(pub)
    populate_summary(daily_id)
    pre_populate(filters)
    pub_filtered = filter_all_data()
    populate_all_filters(pub_filtered)

    spinner_load()
    add_listeners_spinner()
    populate_photo_carousel()
    map_load_gamma()

    if (pub_filtered.length < pub.length) {
        list_setup_beta(pub_filtered)
        populate_header(pub_filtered.length)
        document.getElementById('template_map').style.display = "block"
        document.getElementById('template_list').style.display = "block"
        document.getElementById('template_header').style.display = "block"
    }



}
