
function onload_home() {
    console.log('onload - HOME')

    filtered_pubs = pub_all

    set_color_theme()
    display_counter(counter)

    setup_filters()
    pub_filtered = setup_filters_populate(pub_all)
    number_review_attr = get_no_reviews()
    spinner_add_listener_click_face()

    populate_summary(pub_1)
    //populate_photo_carousel()

    the_map = document.getElementById('new_map')
    the_map.classList.add('map_on_home')
    map_load('home')

    if (filtered_pubs.length == pub_all.length) {
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

function addCss(fileName) {
   var link = $("<link />",{
     rel: "stylesheet",
     type: "text/css",
     href: fileName
   })
   $('head').append(link);
}
