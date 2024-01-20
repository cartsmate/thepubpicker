function map_addListener_bounds_changed_gamma(map) {
    console.log('map bounds changed listener GAMMA added')
    google.maps.event.addListener(map, 'bounds_changed', function() {
        console.log('map bounds are changed GAMMA')

        bounds = map.getBounds();
        console.log('bounds')
        console.log(bounds)
        console.log('markersArray')
        console.log(markersArray)
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
        for (i=0; i<markersArray.length; i++) {
            //console.log(markersArray[i].position.lat())
            /*
            console.log('north: ' + north)
            console.log('lat  : ' + markersArray[i].detail_latitude)
            console.log('south: ' + south)

            console.log('east: ' + east)
            console.log('lng  : ' + markersArray[i].detail_longitude)
            console.log('west: ' + west)
            */
            if (markersArray[i].position.lat() > south && markersArray[i].position.lat() < north && markersArray[i].position.lng() > west && markersArray[i].position.lng() < east) {
                marker_in_bounds ++
            }

        }
        console.log('marker_in_bounds')
        console.log(marker_in_bounds)
        //list_setup_beta(pubs_sorted)
            /*
            searchBox.setBounds(map.getBounds());
            pubs_reviews = filter_all_data(pubs)
            pubs_sorted = sort_by_distance(pubs_reviews, map)
            marker_add_bounds_gamma(pubs_sorted, theme)
            list_setup_beta(pubs_sorted)
            populate_header(pubs_sorted.length)
            */
    });
//    return bounds
}
