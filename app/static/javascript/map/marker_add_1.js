function marker_add_1(map) {
    console.log('MARKER ADD 1')
    //console.log('lat: ' + pub[0].pub_latitude)
    //console.log('lat: ' + pub[0].pub_longitude)
    marker = new google.maps.Marker({
        position: new google.maps.LatLng(pub[0].pub_latitude, pub[0].pub_longitude),
        map: map,
        title: "test"
    })
}
