function onload_pub() {
    set_color_theme()
    filtered_pubs = pub
    populate_pub(pub)
    the_map = document.getElementById('new_map')
    the_map.classList.add('map_on_pub')
    map_load('pub')
    populate_photo_carousel()
}
