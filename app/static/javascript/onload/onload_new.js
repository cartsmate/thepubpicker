function isTouchDevice() {
  return (('ontouchstart' in window) ||
     (navigator.maxTouchPoints > 0) ||
     (navigator.msMaxTouchPoints > 0));
}
function onload_new(theme) {
    console.log('theme')
    console.log(theme)
    console.log(isTouchDevice())
    if (isTouchDevice()) {
        document.getElementById('forwards').style.display = 'none'
        document.getElementById('rewards').style.display = 'none'
    }


    populate_all_filters(pub, theme)

    populate_summary(daily_id)
    pre_populate(filters)
    pub_filtered = filter_all_data()
    populate_all_filters(pub_filtered, theme)

    add_listeners_spinner(theme)
    populate_photo_beta()
    map_load_gamma()
    if (pub_filtered.length < pub.length) {
        list_setup_beta(pub_filtered)
        populate_feature(pub_filtered)
        populate_header(pub_filtered.length)
        //map_load_collection()
        map_repopulate
        document.getElementById('template_map').style.display = "block"
        document.getElementById('template_list').style.display = "block"
        document.getElementById('template_header').style.display = "block"
    } else {
        //map_load_collection()
    }



}
