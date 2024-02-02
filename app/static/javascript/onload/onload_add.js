function onload_add(pub_new) {
    console.log('onload_add')
    the_map = document.getElementById('new_map')
    the_map.classList.add('map_on_pub')
    map_load_add()
    populate_pub_add_beta(pub_new)

}
