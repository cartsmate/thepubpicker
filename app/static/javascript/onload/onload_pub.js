function onload_pub() {
    set_color_theme()
    the_map = document.getElementById('new_map')
    the_map.classList.add('map_on_pub')
    map_load_pub()
    populate_pub(pub)
    populate_photo_carousel()
}
