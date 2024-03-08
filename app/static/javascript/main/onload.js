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
    start_up('home')
    display_counter(counter)
    setup_filters()
    filtered_pubs = setup_filters_populate(pub_all)
    populate_summary(pub_1)
    show_results()
}
function onload_pub() {
    console.log('onload pub')
    start_up('pub')
    filtered_pubs = unique_data = pub_1
    populate_pub(pub_1, 'pub')
    populate_events(events);
    populate_photo_carousel()
}
function onload_add() {
    console.log('onload_add pub: ' + pub_1)
    start_up('add')
    populate_pub(pub_1, 'add')

}
function onload_edit() {
    console.log('onload pub - edit')
    start_up('edit')
    filtered_pubs = unique_data = pub_1
    populate_pub(pub_1, 'edit')
    populate_events(events);
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
        addCss("/static/css/carousel_flat_spinner.css");
    }
}
function show_results() {
    if (filtered_pubs.length == pub_all.length) {
        console.log('on-load: filters CLEAR')
    } else {
        console.log('on-load: filters PRE-SET')
        list_setup()
        populate_header()
        document.getElementById('template_map').style.display = "block"
        document.getElementById('template_list').style.display = "block"
        document.getElementById('template_header').style.display = "block"
    }
}
