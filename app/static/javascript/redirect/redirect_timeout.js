function redirect_timeout(pubs) {
    console.log('redirect_timeout')
    console.log(pubs.length)
    console.log(document.getElementById('burger_toggle').checked)
    document.getElementById('burger_toggle').checked = false

    filter_reset()
    create_filter_(pubs)
    center_map()

//    for (i=0; i<timeout_list.length; i++) {
//        document.getElementById(timeout_list[i] + "_filter").checked = true;
//    }
//
//    const timeout_pubs = pub_all.filter(({ pub_identity }) => timeout_list.includes(pub_identity));


    /*
    pub_filtered = filter_by_(pub_all)
    create_filter_(pub_filtered)

    filtered_pubs = map_center_from_pubs(timeout_pubs)
    unique_data = get_unique_list(filtered_pubs)

    map.setCenter({lat:filtered_pubs[0]['detail_latitude'], lng:filtered_pubs[0]['detail_longitude']});
    var central_map = map.getCenter();
    map.panTo(central_map);
    finalise_results(filtered_pubs)
    */

}
