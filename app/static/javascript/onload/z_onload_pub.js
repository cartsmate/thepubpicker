function onload_pub() {
    console.log('onload pub - new')
    set_color_theme()
    filtered_pubs = pub_1
    populate_pub(pub_1)
    the_map = document.getElementById('new_map')
    the_map.classList.add('map_on_pub')
    map_load('pub')
    populate_photo_carousel()
}
