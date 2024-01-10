function onload_search() {
    console.log('onload search')

    list_setup_search(pub)

    map_load_search()
    document.getElementById('col_map').style.display = 'block';
}
