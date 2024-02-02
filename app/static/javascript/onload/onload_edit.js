function onload_edit() {
    console.log('onload pub - edit')
    set_color_theme()
    filtered_pubs = pub_1
    populate_pub_edit(pub_1)
    the_map = document.getElementById('new_map')
    the_map.classList.add('map_on_pub')
    map_load('edit')
    populate_photo_carousel()
}
