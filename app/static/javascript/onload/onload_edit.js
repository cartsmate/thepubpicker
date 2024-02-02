function onload_edit() {
    console.log('onload edit pub')
    set_color_theme()
//    populate_pub()
//    populate_detail();
//    populate_review();
//    populate_diary();
//    populate_station();
//    populate_direction();
    populate_pub_edit(pub)
    populate_photo_carousel()
    the_map = document.getElementById('new_map')
    the_map.classList.add('map_on_pub')
    map_load('pub')
}
