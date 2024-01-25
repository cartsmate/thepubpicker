function searchbox_addListener_places_changed(map, searchBox) {
    console.log('searchbox addListener places changed ADDED')

    let markers = [];

    searchBox.addListener("places_changed", () => {
    //searchBox.addListener("change", () => {
        console.log('search box has changed place')

        //get place name from the search box
        const places = searchBox.getPlaces();
        console.log('places')
        console.log(places)
        if (places.length == 0) {
            return;
        }
        //clear markers from map
        markers.forEach((marker) => {
            marker.setMap(null);
        });
        markers = [];
        const bounds = new google.maps.LatLngBounds();

        //get lat/lng for each place
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

        map.setCenter({lat:lat1, lng:lng1});

        display_results('block')

        /*
        console.log('listener center')
        console.log('lat: ' + lat1, 'lng: ' + lng1)
        map.setZoom(15)

        update_results()
        */

    });
}
