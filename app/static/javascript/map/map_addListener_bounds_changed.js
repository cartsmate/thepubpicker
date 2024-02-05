var markersArray = [];

function clearOverlays() {
  for (var i = 0; i < markersArray.length; i++ ) {
    markersArray[i].setMap(null);
  }
  markersArray.length = 0;
}
function map_addListener_bounds_changed(map, mapped_pubs) {
    console.log('map_addListener_bounds_changed ADDED')

    google.maps.event.addListener(map, 'bounds_changed', function() {
        console.log('map_addListener - BOUNDS CHANGED')

        clearOverlays()
        console.log('filtered_pubs: ' + filtered_pubs.length)
        console.log('mapped_pubs: ' + mapped_pubs.length)
        console.log('unique_data: ' + unique_data.length)

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
        /*
        for (i=0; i<filtered_pubs.length; i++) {
            if (filtered_pubs[i]['detail_latitude'] > south && filtered_pubs[i]['detail_latitude'] < north && filtered_pubs[i]['detail_longitude'] > west && filtered_pubs[i]['detail_longitude'] < east) {
                marker_in_bounds ++
                filtered_pubs[i]['ordering'] = i
                pubs_to_show.push(filtered_pubs[i])
                marker_add(filtered_pubs[i])
            }
        }
        */
        var pubs_north = pubs_south = pubs_east = pubs_west = 0
        for (i=0; i<unique_data.length; i++) {
            if (unique_data[i]['detail_latitude'] > south && unique_data[i]['detail_latitude'] < north && unique_data[i]['detail_longitude'] > west && unique_data[i]['detail_longitude'] < east) {
                marker_in_bounds ++
                unique_data[i]['ordering'] = i
                pubs_to_show.push(unique_data[i])
                marker_add(unique_data[i])
            }
            if (unique_data[i]['detail_latitude'] < south) { pubs_south ++ }
            if (unique_data[i]['detail_latitude'] > north) { pubs_north ++ }
            if (unique_data[i]['detail_longitude'] < west) { pubs_west ++ }
            if (unique_data[i]['detail_longitude'] > east) { pubs_east ++ }

        }
        console.log('pubs_south: ' + pubs_south)
        if (pubs_south > 0) {
            document.getElementById('south_note').textContent = pubs_south + " more pubs SOUTH"
        } else {
            document.getElementById('south_note').textContent = ""
        }

        console.log('pubs_north: ' + pubs_north)
        if (pubs_north > 0) {
            document.getElementById('north_note').textContent = pubs_north + " more pubs NORTH"
        } else {
            document.getElementById('north_note').textContent = ""
        }

        console.log('pubs_west: ' + pubs_west)
        if (pubs_west > 0) {
            document.getElementById('west_note').textContent = pubs_west + " more pubs WEST"
        } else {
            document.getElementById('west_note').textContent = ""
        }

        console.log('pubs_east: ' + pubs_east)
        if (pubs_east > 0) {
            document.getElementById('east_note').textContent = pubs_east + " more pubs EAST"
        } else {
            document.getElementById('east_note').textContent = ""
        }

        mapped_pubs = pubs_to_show
        console.log('mapped_pubs')
        console.log(mapped_pubs)
        list_setup_beta(mapped_pubs)


    });

}
