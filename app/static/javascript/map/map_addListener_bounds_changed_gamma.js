var markersArray = [];
function clearOverlays() {
  for (var i = 0; i < markersArray.length; i++ ) {
    markersArray[i].setMap(null);
  }
  markersArray.length = 0;
}
function map_addListener_bounds_changed_gamma(map) {
    console.log('map bounds changed listener GAMMA added')

    google.maps.event.addListener(map, 'bounds_changed', function() {
        console.log('map bounds are changed GAMMA')

        clearOverlays()
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

        marker_in_bounds = 0
        pubs_to_show = []
        for (i=0; i<filtered_pubs.length; i++) {
            if (filtered_pubs[i]['detail_latitude'] > south && filtered_pubs[i]['detail_latitude'] < north && filtered_pubs[i]['detail_longitude'] > west && filtered_pubs[i]['detail_longitude'] < east) {
                marker_in_bounds ++
                filtered_pubs[i]['ordering'] = i
                pubs_to_show.push(filtered_pubs[i])
//                marker_add(filtered_pubs[i], i)
                marker_add(filtered_pubs[i])

            }
        }
        mapped_pubs = pubs_to_show
        list_setup_beta()
    });
//    return bounds
}
