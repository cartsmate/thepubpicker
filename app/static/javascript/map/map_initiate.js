var markersArray =[];
function clearOverlays() {
    for (var i = 0; i < markersArray.length; i++ ) {
        markersArray[i].setMap(null);
    }
    markersArray.length = 0;
}
function map_init_home() {
    console.log('map init HOME')
    map = map_create(pub_all[0].detail_latitude, pub_all[0].detail_longitude, 14)
    const input = document.getElementById("search-input-navbar");
    //const searchBox = new google.maps.places.SearchBox(input);

    //var input = document.getElementById('autocomplete-input');

    var northEast = new google.maps.LatLng(52, 0.3);
    var southWest = new google.maps.LatLng(51.2, -0.56);
    var GreaterLondon = new google.maps.LatLngBounds(southWest, northEast);
    var options = {
        bounds: GreaterLondon,
        componentRestrictions: {country: 'uk'}
    };

    var searchBox = new google.maps.places.Autocomplete(input, options);
    //searchBox.bindTo("bounds", map);
    /*
    searchBox.addListener("place_changed", () => {
    //searchBox.addListener("change", () => {
        console.log('search box has changed place')
        })
    // Bias the SearchBox results towards current map's viewport.
    //map.addListener("bounds_changed", () => {
    //    searchBox.setBounds(map.getBounds() as google.maps.LatLngBounds);
    //});
    */
    searchbox_addListener_places_changed(map, searchBox);
    map_addListener_bounds_changed(map, 'home');
    map_addListener_click_placeid(map)
}
function map_init_pub() {
    console.log('MAP INIT PUB')
    console.log(pub_1[0]['detail_latitude'], pub_1[0]['detail_longitude'])
    map = map_create(pub_1[0]['detail_latitude'], pub_1[0]['detail_longitude'], 15)
    map_addListener_bounds_changed(map, 'pub');
    //marker_add_summary(map, pub[0]['detail_latitude'], pub[0]['detail_longitude'])
}
function map_init_add() {
    console.log('MAP INIT ADD')
    map = map_create(pub_1[0].detail_latitude, pub_1[0].detail_longitude, 22)
    const input = document.getElementById("search-input-navbar");
    const searchBox = new google.maps.places.SearchBox(input);
    searchbox_addListener_places_changed(map, searchBox);
    //map_addListener_bounds_changed_beta_add(map, pub, searchBox);
    map_addListener_click_add(map)
}
function map_init_edit() {
    console.log('MAP INIT EDIT')
    console.log(pub_1[0]['detail_latitude'], pub_1[0]['detail_longitude'])
    map = map_create(pub_1[0]['detail_latitude'], pub_1[0]['detail_longitude'], 15)
    map_addListener_bounds_changed(map, 'pub');
    //marker_add_summary(map, pub[0]['detail_latitude'], pub[0]['detail_longitude'])
}
/*
function map_repopulate() {
    console.log('map_repopulate')

    clearOverlays();
    //pub_filtered = filter_all_data()
    //marker_add_bounds_gamma(pub_filtered)
    marker_add_bounds_zeta(pub_filtered)

}
function map_init_gamma_events() {
    console.log('map init GAMMA events')
    map = map_create(event[0].detail_latitude, event[0].detail_longitude, 14)

    const input = document.getElementById("search-input-navbar");
    const searchBox = new google.maps.places.SearchBox(input);


    // Bias the SearchBox results towards current map's viewport.
    //map.addListener("bounds_changed", () => {
    //    searchBox.setBounds(map.getBounds() as google.maps.LatLngBounds);
    //});

    searchbox_addListener_places_changed(map, searchBox);

    map_addListener_bounds_changed_gamma_events(map);
    map_addListener_click_placeid(map)
}
*/
