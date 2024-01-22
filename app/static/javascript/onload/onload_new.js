
function onload_new() {

    if (isTouchDevice()) {
        document.getElementById('forwards').style.display = 'none'
        document.getElementById('rewards').style.display = 'none'
    }
    set_color_theme()
    display_counter(counter)

    the_map = document.getElementById('new_map')
    the_map.classList.add('map_on_home')

    setup_filters()
    pub_filtered = setup_filters_populate()


    number_review_attr = get_no_reviews()
    spinner_set_css_classes(number_review_attr)
    //spinner_add_listener_swipe(number_review_attr)
    spinner_add_listener_click_btn(number_review_attr)
    spinner_add_listener_click_face()

    populate_summary(daily_id)
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
