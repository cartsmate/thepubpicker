function onload_admin() {
    console.log('onload ADMIN')
    set_color_theme()
}
function start_up(page) {
    add_css()
    set_color_theme()
    the_map = document.getElementById('new_map')
    the_map.classList.add('map_on_pub')
    map_load(page)
}
function onload_home() {
    console.log('onload - HOME')

    filtered_pubs = pub_all
    start_up('home')
//    set_color_theme()
    display_counter(counter)

    setup_filters()
    pub_filtered = setup_filters_populate(pub_all)
    number_review_attr = get_no_reviews()
    spinner_add_listener_click_face()

    populate_summary(pub_1)
    //populate_photo_carousel()

//    the_map = document.getElementById('new_map')
//    the_map.classList.add('map_on_home')
//    map_load('home')

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
function onload_pub() {
    console.log('onload pub')
    start_up('pub')
//    set_color_theme()
    filtered_pubs = pub_1
    populate_pub(pub_1)

    populate_photo_carousel()
}
function onload_add() {
    console.log('onload_add pub: ' + pub_1)
    start_up('add')
//    the_map = document.getElementById('new_map')
//    the_map.classList.add('map_on_pub')
//    map_load('add')
    populate_pub_add_beta(pub_1)
}
function onload_edit() {
    console.log('onload pub - edit')
    start_up('edit')
//    set_color_theme()
    filtered_pubs = pub_1
    populate_pub_edit(pub_1)
//    the_map = document.getElementById('new_map')
//    the_map.classList.add('map_on_pub')
//    map_load('edit')
    populate_photo_carousel()
}
function addCss(fileName) {
   var link = $("<link />",{
     rel: "stylesheet",
     type: "text/css",
     href: fileName
   })
   $('head').append(link);
}
function add_css() {
    if (isTouchDevice()) {
        console.log('TOUCH SCREEN device in operation')
    } else {
        console.log('NO-TOUCH screen device in operation')
        addCss("/static/css/carousel/carousel_flat_spinner.css");
    }
}
