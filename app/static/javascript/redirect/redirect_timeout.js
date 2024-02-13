function redirect_timeout() {
    console.log(document.getElementById('burger_toggle').checked)
    document.getElementById('burger_toggle').checked = false
    console.log("redirect_timeout")
    console.log('timeout_pubs')
    console.log(timeout_pubs)
    filtered_pubs = map_center_from_pubs(timeout_pubs)

    unique_data = get_unique_list(filtered_pubs)

    map.setCenter({lat:filtered_pubs[0]['detail_latitude'], lng:filtered_pubs[0]['detail_longitude']});
    var central_map = map.getCenter();
    map.panTo(central_map);
    finalise_results(filtered_pubs)
}
