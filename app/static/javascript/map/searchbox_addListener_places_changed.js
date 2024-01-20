function searchbox_addListener_places_changed(map, searchBox) {
    console.log('searchbox addListener places changed ADDED')

    let markers = [];
    div_waiting = document.getElementById('spin_waiting')
    //searchBox.addListener("places_changed", (div_waiting) => {
    //google..addListener(marker, 'click', (function (marker, i) {
    //searchBox.addListener("places_changed", (function (div_waiting) {

    searchBox.addListener("places_changed", () => {
    //searchBox.addListener("change", () => {
        console.log('search box has changed place')

        //get place name from searchbox
        const places = searchBox.getPlaces();
        console.log('places')
        console.log(places)
        if (places.length == 0) {
            return;
        }
        //clear markers from mapp
        markers.forEach((marker) => {
            marker.setMap(null);
        });
        markers = [];
        const bounds = new google.maps.LatLngBounds();
        //get lat/lng for aach place
        places.forEach((place) => {
            if (!place.geometry || !place.geometry.location) {
                console.log("returned place contains no geometry");
                return
            }
            lat1 = place.geometry.location.lat()
            lng1 = place.geometry.location.lng();
            if (place.geometry.viewpoint) {
                bounds.union(place.geometry.viewpoint);
            } else {
                bounds.extend(place.geometry.location);
            }
        });
        //move map to new location

        map.setCenter({lat:lat1, lng:lng1});
        map.setZoom(15)
        update_results()


    //        document.getElementById('template_map').style.display = "block"
    //        document.getElementById('template_list').style.display = "block"
    //        document.getElementById('template_header').style.display = "block"
            //map.setZoom(19);
    });
    //})(div_waiting));
    //})(marker, i));
    //}(div_waiting));

}
