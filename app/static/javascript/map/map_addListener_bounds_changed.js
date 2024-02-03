var markersArray = [];
function clearOverlays() {
  for (var i = 0; i < markersArray.length; i++ ) {
    markersArray[i].setMap(null);
  }
  markersArray.length = 0;
}
function map_addListener_bounds_changed(map, page) {
    console.log('map bounds changed listener GAMMA added')

    google.maps.event.addListener(map, 'bounds_changed', function() {
        console.log('map bounds are changed GAMMA')

        clearOverlays()
        console.log('filtered_pubs: ' + filtered_pubs.length)

        marker_in_bounds = 0
        pubs_to_show = []


        bounds = map.getBounds();
        let ne = bounds.getNorthEast(); // Coords of the northeast corner
        let sw = bounds.getSouthWest(); // Coords of the southwest corner
        let north_east = ne.toString().replace(/[()]/g, "");
        var north_east_str = north_east.toString().split(',');
        let south_west = sw.toString().replace(/[()]/g, "");
        var south_west_str = south_west.toString().split(',');
        var north = north_east_str[0]
        var south = south_west_str[0]
        var east = north_east_str[1]
        var west = south_west_str[1]

        if (filtered_pubs.length > 20) {

            console.log('>20 pubs')
            for (i=0; i<filtered_pubs.length; i++) {
                if (filtered_pubs[i]['detail_latitude'] > south && filtered_pubs[i]['detail_latitude'] < north && filtered_pubs[i]['detail_longitude'] > west && filtered_pubs[i]['detail_longitude'] < east) {
                    marker_in_bounds ++
                    filtered_pubs[i]['ordering'] = i
                    pubs_to_show.push(filtered_pubs[i])
                    marker_add(filtered_pubs[i])
                }
            }
        } else {
            console.log('<20 pubs')
            const pubs_north = filtered_pubs.reduce(function(prev, current) {
                return (prev && prev.detail_latitude > current.detail_latitude) ? prev : current
            })
            const pubs_south = filtered_pubs.reduce(function(prev, current) {
                return (prev && prev.detail_latitude < current.detail_latitude) ? prev : current
            })
            const pubs_west = filtered_pubs.reduce(function(prev, current) {
                return (prev && prev.detail_longitude > current.detail_longitude) ? prev : current
            })
            const pubs_east= filtered_pubs.reduce(function(prev, current) {
                return (prev && prev.detail_longitude < current.detail_longitude) ? prev : current
            })

            var inbounds = true

            if (inbounds) {
                for (i=0; i<filtered_pubs.length; i++) {
                    marker_in_bounds ++
                    filtered_pubs[i]['ordering'] = i
                    pubs_to_show.push(filtered_pubs[i])
                    marker = marker_add(filtered_pubs[i])
                }
            } else {
                var bounds = new google.maps.LatLngBounds();
                for (i=0; i<filtered_pubs.length; i++) {
                    marker_in_bounds ++
                    filtered_pubs[i]['ordering'] = i
                    pubs_to_show.push(filtered_pubs[i])
                    marker = marker_add(filtered_pubs[i])
                    bounds.extend(marker.position);
                }
                map.fitBounds(bounds);
            }

        }
        if (page == 'home') {
            mapped_pubs = pubs_to_show
            list_setup_beta()
//        } else {
//            document.getElementById('template_map').style.display = 'block'
        }
        console.log('pubs to show: ' + pubs_to_show.length)

    });

}

//function fit_all_markers() {
//    console.log('fit_all_markers')
//    console.log('bounds')
//    console.log(bounds)
//    console.log('markersArray')
//    console.log(markersArray)
//    console.log(markersArray.length)
//    for (var i=0; i < markersArray.length; i++ ) {
//        console.log('markersArray[i]')
//        console.log(markersArray[i])
//        bounds.extend(markersArray[i]);
//        console.log('bounds')
//        console.log(bounds)
//    }
//    map.fitBounds(bounds);
//}
