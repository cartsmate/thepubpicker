function map_addListener_bounds_changed(map, pubs, searchBox) {
    console.log('map bounds changed listener added')
    google.maps.event.addListener(map, 'bounds_changed', function() {
        console.log('map bounds changed')
        var bounds = map.getBounds();
        searchBox.setBounds(map.getBounds());
//        console.log(bounds)
        //pubs_reviews = filter_all_data(pubs)
        //pubs_sorted = sort_by_distance(pubs_reviews, map)
        marker_add_bounds(map, bounds, pubs_sorted)
        });
//    return bounds
}
