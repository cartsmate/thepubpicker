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
//        places.forEach((place) => {
//            if (!place.geometry || !place.geometry.location) {
//                console.log("returned place contains no geometry");
//                return
//            }
//            lat1 = place.geometry.location.lat()
//            lng1 = place.geometry.location.lng();
//            if (place.geometry.viewpoint) {
//                bounds.union(place.geometry.viewpoint);
//            } else {
//                bounds.extend(place.geometry.location);
//            }
//            var newArray = pub.filter(function (el) {
//                return el.place == place.place_id
//            });
//            console.log(newArray)
//            if (newArray.length != 0) {
//                console.log('found place')
//                console.log(newArray[0]['pub_identity'])
//                redirect_pub_search(newArray[0]['pub_identity'])
//            }
//        });
        if (!places[0].geometry || !places[0].geometry.location) {
            console.log("returned place contains no geometry");
            return
        }
        lat1 = places[0].geometry.location.lat()
        lng1 = places[0].geometry.location.lng();
        if (places[0].geometry.viewpoint) {
            bounds.union(places[0].geometry.viewpoint);
        } else {
            bounds.extend(places[0].geometry.location);
        }
        var newArray = pub_all.filter(function (el) {
            return el.place == places[0].place_id
        });
        console.log(newArray)
        if (newArray.length != 0) {
            console.log('pub in DB found')
            console.log(newArray)
            console.log(newArray[0]['pub_identity'])
            redirect_pub_search(newArray[0]['pub_identity'])
        } else {
            console.log('NEW place')
            console.log(newArray)
            map.setCenter({lat:lat1, lng:lng1});
//             || places[0].types.includes('restaurant')
            if (places[0].types.includes('bar') || places[0].types.includes('restaurant')) {
                map.setZoom(22)
            } else {
                map.setZoom(19)
            }
//            map.setZoom(19)
            central_obj = map.getCenter()
            search_string = places
            center_map()
        }
    });
}
