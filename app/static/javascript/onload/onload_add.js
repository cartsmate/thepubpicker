function onload_add() {
    console.log('onload_add pub: ' + pub_new)
    the_map = document.getElementById('new_map')
    the_map.classList.add('map_on_pub')
    map_load('add')
    populate_pub_add_beta(pub_new)

}
