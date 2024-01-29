
function onload_new() {
    console.log('onload - HOME')
    filtered_pubs = pub
    if (isTouchDevice()) {
        console.log('TOUCH SCREEN device in operation')
//        document.getElementById('forwards').style.display = 'none'
//        document.getElementById('rewards').style.display = 'none'
        console.log('inside IS TOUCH')
        //spinner_add_listener_swipe()
    } else {
        console.log('NO-TOUCH screen device in operation')
    }
    set_color_theme()
    display_counter(counter)

    the_map = document.getElementById('new_map')
    the_map.classList.add('map_on_home')

    setup_filters()
    pub_filtered = setup_filters_populate(pub)

    number_review_attr = get_no_reviews()
    //spinner_set_css_classes_flat(number_review_attr)
    //spinner_set_css_classes(number_review_attr)
    //spinner_add_listener_swipe()
    //spinner_add_listener_click_btn(number_review_attr)
    spinner_add_listener_click_face()

    populate_summary(daily_id)
    populate_photo_carousel()

    map_load_gamma()

    if (filtered_pubs.length == pub.length) {
        console.log('on-load: filters CLEAR')
    } else {
        console.log('on-load: filters PRE-SET')
        list_setup_beta()
        populate_header()
        document.getElementById('template_map').style.display = "block"
        document.getElementById('template_list').style.display = "block"
        document.getElementById('template_header').style.display = "block"
    }

}
