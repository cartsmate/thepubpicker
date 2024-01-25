var markersArray =[];
function clearOverlays() {
    for (var i = 0; i < markersArray.length; i++ ) {
        markersArray[i].setMap(null);
    }
    markersArray.length = 0;
}
function map_repopulate() {
    console.log('map_repopulate')

    clearOverlays();
    //pub_filtered = filter_all_data()
    //marker_add_bounds_gamma(pub_filtered)
    marker_add_bounds_zeta(pub_filtered)

}
function map_init_gamma() {
    console.log('map init GAMMA')
    map = map_create(pub[0].detail_latitude, pub[0].detail_longitude, 14)

    const input = document.getElementById("search-input-navbar");
    const searchBox = new google.maps.places.SearchBox(input);


    // Bias the SearchBox results towards current map's viewport.
    //map.addListener("bounds_changed", () => {
    //    searchBox.setBounds(map.getBounds() as google.maps.LatLngBounds);
    //});

    searchbox_addListener_places_changed(map, searchBox);

    map_addListener_bounds_changed_gamma(map);
    map_addListener_click_placeid(map)
}
function map_init_add() {
    console.log('MAP INIT ADD')

    const arrMarks = pub.map(x => x.latitude); // get all the marks.
    console.log('arrMarks')
    console.log(arrMarks)

    map = map_create(pub_new[0].detail_latitude, pub_new[0].detail_longitude, 17)
    const input = document.getElementById("search-input-navbar");
    const searchBox = new google.maps.places.SearchBox(input);
    searchbox_addListener_places_changed(map, searchBox);
    map_addListener_bounds_changed_beta_add(map, pub, searchBox);
    map_addListener_click_add(map)
}
function map_init_pub() {
    console.log('MAP INIT PUB')
    console.log(pub[0]['detail_latitude'], pub[0]['detail_longitude'])

    map = map_create(pub[0]['detail_latitude'], pub[0]['detail_longitude'], 15)

    marker_add_summary(map, pub[0]['detail_latitude'], pub[0]['detail_longitude'])

}
