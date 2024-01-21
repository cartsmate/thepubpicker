function onload_edit(theme) {
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
    map_load_pub()
}
