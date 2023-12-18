function marker_add_1(map) {
    console.log('MARKER ADD 1')
    console.log('lat: ' + pub[0].detail_latitude)
    console.log('lat: ' + pub[0].detail_longitude)
    marker = new google.maps.Marker({
        position: new google.maps.LatLng(pub[0].detail_latitude, pub[0].detail_longitude),
        title: "test",
        map: map

    })
}
