function map_listen_bounds(map, searchBox) {
    console.log('map_listen_bounds')
    let markers = [];
    searchBox.addListener("places_changed", () => {
        const places = searchBox.getPlaces();
        if (places.length == 0) {
            return;
        }
        markers.forEach((marker) => {
            marker.setMap(null);
        });
        markers = [];
        const bounds = new google.maps.LatLngBounds();
        places.forEach((place) => {
            if (!place.geometry || !place.geometry.location) {
                console.log("returned place contains no geometry");
                return
            }
            lat1 = place.geometry.location.lat()
            lng1 = place.geometry.location.lng();
            const icon = {
                url: place.icon,
                size: new google.maps.Size(71, 71),
                origin: new google.maps.Point(0, 0),
                anchor: new google.maps.Point(17, 34),
                scaledSize: new google.maps.Size(25, 25),
            };
    <!--                markers.push(-->
    <!--                    new google.maps.Marker({-->
    <!--                        map,-->
    <!--                        icon,-->
    <!--                        title: place.name,-->
    <!--                        position: place.geometry.location,-->
    <!--                    })-->
    <!--                );-->
            if (place.geometry.viewpoint) {
                bounds.union(place.geometry.viewpoint);
            } else {
                bounds.extend(place.geometry.location);
            }
            //document.getElementById("place").value = place.place_id
            document.getElementById("pub_name").value = place.name
            document.getElementById("address").value = place.formatted_address
            document.getElementById("rank").value = place.rating
            shadeStars('rank', place.rating, 'map')
            //document.getElementById("latitude").value = place.geometry.location.lat()
            //document.getElementById("longitude").value = place.geometry.location.lng()
            place_text = String(place.types)

            var array2 = place_text.split(",")

            var text;
            var place_set = false;
            var myStringArray = array2;
            var arrayLength = myStringArray.length;
            for (var i = 0; i < arrayLength; i++) {
                if (myStringArray[i] == "bar" || myStringArray[i] == "restaurant") {
                    text = myStringArray[i].charAt(0).toUpperCase() + myStringArray[i].slice(1);
                    place_set = true;
                    break;
                }
            }
            if (place_set == false) { text='Other' }
            document.getElementById("category").value = text;

            records = []
            for (let i = 0; i < stations.length; i++) {
                lat_diff = Math.abs(stations[i]['stationlatitude'] - place.geometry.location.lat())
                lng_diff = Math.abs(stations[i]['stationlongitude'] - place.geometry.location.lng())
                tot_diff = lat_diff + lng_diff
                var record = { name: stations[i]['station_name'], id: stations[i]['station_identity'], distance: tot_diff}
                records.push(record);
            }
            records = records.sort((a, b) => {
                if (a.distance < b.distance) {
                    return -1;
                }
            });
            document.getElementById("station_name").value = records[0]['name']
            document.getElementById("station_identity").value = records[0]['id']

            records = []
            for (let i = 0; i < areas.length; i++) {
                lat_diff = Math.abs(areas[i]['area_latitude'] - place.geometry.location.lat())
                lng_diff = Math.abs(areas[i]['area_longitude'] - place.geometry.location.lng())
                tot_diff = lat_diff + lng_diff
                var record = { name: areas[i]['area_name'], id: areas[i]['area_identity'], distance: tot_diff}
                records.push(record);
            }
            records = records.sort((a, b) => {
                if (a.distance < b.distance) {
                    return -1;
                }
            });
            document.getElementById("area_name").value = records[0]['name']
            document.getElementById("area_identity").value = records[0]['id']
        });
        map.setCenter({lat:lat1, lng:lng1});
//        marker = new google.maps.Marker({
//            position: new google.maps.LatLng(lat1, lng1),
//            map: map
//        })
        map.setZoom(19);
        //document.getElementById("name").value = document.getElementById("search-input-navbar").value
//        document.getElementById("search-input-navbar").value = "Search"
    });
}