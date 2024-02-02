
function onload_events() {
    console.log('onload - EVENTS')
    filtered_events = event
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
    //display_counter(counter)

    the_map = document.getElementById('new_map')
    the_map.classList.add('map_on_home')

    setup_filters()
    filtered_pubs = setup_filters_populate_events(event)
    console.log('filtered_pubs: ' + filtered_pubs.length)

    number_review_attr = get_no_reviews()
    //spinner_set_css_classes_flat(number_review_attr)
    //spinner_set_css_classes(number_review_attr)
    //spinner_add_listener_swipe()
    //spinner_add_listener_click_btn(number_review_attr)
    spinner_add_listener_click_face_events()

    map_load_gamma_events()

    if (filtered_events.length == event.length) {
        console.log('on-load: filters CLEAR')
    } else {
        console.log('on-load: filters PRE-SET')
        list_setup_beta(pub_filtered)
        populate_header(pub_filtered.length)
        document.getElementById('template_map').style.display = "block"
        document.getElementById('template_list').style.display = "block"
        document.getElementById('template_header').style.display = "block"
    }

}
