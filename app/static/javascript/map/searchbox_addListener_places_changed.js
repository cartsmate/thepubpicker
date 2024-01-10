function searchbox_addListener_places_changed(map, searchBox) {
    console.log('searchbox addListener places changed ADDED')
    let markers = [];
    searchBox.addListener("places_changed", () => {
        console.log('search box has chnaged place')
        document.getElementById('col_map').style.display = "block";
        //get place name from searchbox
        const places = searchBox.getPlaces();
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
        //map.setZoom(19);
    });

}