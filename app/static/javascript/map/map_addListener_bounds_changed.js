function map_addListener_bounds_changed(map, mapped_pubs) {
    console.log('map_addListener_bounds_changed ADDED')

    google.maps.event.addListener(map, 'bounds_changed', function() {

        console.log('map_addListener - BOUNDS CHANGED')
        console.log('unique_data')
        console.log(unique_data)
        //clearOverlays()

        marker_in_bounds = 0
        pubs_to_show = []

        bounds = map.getBounds();
        let ne = bounds.getNorthEast(); // Coords of the northeast corner
        let sw = bounds.getSouthWest(); // Coords of the southwest corner
        let north_east = ne.toString().replace(/[()]/g, "");
        var north_east_str = north_east.toString().split(',');
        let south_west = sw.toString().replace(/[()]/g, "");
        var south_west_str = south_west.toString().split(',');

        let direction = {
           "north": { "name": "NORTH", "html_name": "north_note", "bounds_value": north_east_str[0], "extra_pubs": 0 },
           "south": { "name": "SOUTH", "html_name": "south_note", "bounds_value": south_west_str[0], "extra_pubs": 0 },
           "east": { "name": "EAST", "html_name": "east_note", "bounds_value": north_east_str[1], "extra_pubs": 0 },
           "west": { "name": "WEST", "html_name": "west_note", "bounds_value": south_west_str[1], "extra_pubs": 0 }
        };

        for (i=0; i<Math.min(unique_data.length, 100); i++) {

            console.log('inside < 100')

//        for (i=0; i<unique_data.length; i++) {
            if (parseFloat(unique_data[i]['detail_latitude']) > direction['south'].bounds_value &&
                parseFloat(unique_data[i]['detail_latitude']) < direction['north'].bounds_value &&
                parseFloat(unique_data[i]['detail_longitude']) > direction['west'].bounds_value &&
                parseFloat(unique_data[i]['detail_longitude']) < direction['east'].bounds_value) {
                console.log('inside bounds')
                marker_in_bounds ++
                //unique_data[i]['ordering'] = i
                pubs_to_show.push(unique_data[i])
                //marker_add(unique_data[i])
            }
            if (unique_data[i]['detail_latitude'] < direction['south'].bounds_value) { direction['south'].extra_pubs ++ }
            if (unique_data[i]['detail_latitude'] > direction['north'].bounds_value) { direction['north'].extra_pubs ++ }
            if (unique_data[i]['detail_longitude'] < direction['west'].bounds_value) { direction['west'].extra_pubs ++ }
            if (unique_data[i]['detail_longitude'] > direction['east'].bounds_value) { direction['east'].extra_pubs ++ }

        }
        for (let i in direction) {
            console.log(i)
            if (direction[i].extra_pubs > 0) {
                document.getElementById(direction[i].html_name).textContent = direction[i].extra_pubs + " more pubs due " + direction[i].name
            } else {
                document.getElementById(direction[i].html_name).textContent = ''
            }
        }
        console.log('page: ' + page)
        mapped_pubs = pubs_to_show
        console.log('pubs_to_show')
        console.log(pubs_to_show)
        console.log('mapped_pubs: ' + mapped_pubs.length)
        if (page == 'home') {
//            list_setup(mapped_pubs)
            if (mapped_pubs.length > 100) {
                list_setup(mapped_pubs.slice(0,100))
            } else {
                list_setup(mapped_pubs)
            }
        }
    });
}

var markersArray = [];

function clearOverlays() {
  for (var i = 0; i < markersArray.length; i++ ) {
    markersArray[i].setMap(null);
  }
  markersArray.length = 0;
}
