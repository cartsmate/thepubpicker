function map_addListener_bounds_changed_beta_add(map, pubs, searchBox) {
    console.log('map bounds changed listener added')
    google.maps.event.addListener(map, 'bounds_changed', function() {
        console.log('map bounds ARE changed')
        var bounds = map.getBounds();
        searchBox.setBounds(map.getBounds());
//        console.log(bounds)
//        pubs_reviews = filter_all_data(pubs)
        pubs_reviews = pubs
        pubs_sorted = sort_by_distance(pubs_reviews, map)
        marker_add_bounds_beta(map, bounds, pubs_sorted)
//        list_setup_beta(pubs_sorted)
//        populate_header(pubs_sorted.length)
        });
//    return bounds
}
