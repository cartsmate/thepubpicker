function map_addListener_bounds_changed_gamma(map, pubs, searchBox, theme) {
    console.log('map bounds changed listener GAMMA added')
    google.maps.event.addListener(map, 'bounds_changed', function() {
            console.log('map bounds are changed GAMMA')
            bounds = map.getBounds();
            searchBox.setBounds(map.getBounds());
        //        console.log(bounds)
            pubs_reviews = filter_all_data(pubs)
            pubs_sorted = sort_by_distance(pubs_reviews, map)
            marker_add_bounds_gamma(pubs_sorted, theme)
            list_setup_beta(pubs_sorted)
            populate_header(pubs_sorted.length)
        });
//    return bounds
}
