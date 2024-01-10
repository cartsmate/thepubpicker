function map_addListener_bounds_changed(map, pubs, searchBox) {
    console.log('map addListener bounds changed ADDED')
    google.maps.event.addListener(map, 'bounds_changed', function() {
        console.log('map bounds changed')
        var bounds = map.getBounds();
        searchBox.setBounds(map.getBounds());
//        console.log(bounds)
        pubs_reviews = filter_by_feature(pubs)
        marker_add_bounds(map, bounds, pubs_reviews)
        });
//    return bounds
}
