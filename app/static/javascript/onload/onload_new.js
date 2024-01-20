function isTouchDevice() {
  return (('ontouchstart' in window) ||
     (navigator.maxTouchPoints > 0) ||
     (navigator.msMaxTouchPoints > 0));
}
function onload_new(theme) {
    console.log('theme')
    console.log(theme)
    console.log(isTouchDevice())
    $("#spin_waiting").hide();
    if (isTouchDevice()) {
        document.getElementById('forwards').style.display = 'none'
        document.getElementById('rewards').style.display = 'none'
    }
    toggle_station()
    toggle_diary()
    toggle_direction()
    toggle_overlay()
    let root = document.documentElement;
    let color = document.getElementById('body').getAttribute("data-value")
    root.style.setProperty('--color', color)
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
        //populate_feature(pub_filtered)
        populate_header(pub_filtered.length)
        //map_load_collection()
        //map_repopulate(pub_filtered)
        document.getElementById('template_map').style.display = "block"
        document.getElementById('template_list').style.display = "block"
        document.getElementById('template_header').style.display = "block"
    }



}
