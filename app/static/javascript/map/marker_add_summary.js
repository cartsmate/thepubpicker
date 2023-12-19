function marker_add_summary(map) {
    console.log('MARKER ADD SUMMARY')
    console.log('lat: ' + pub[0].detail_latitude)
    console.log('lat: ' + pub[0].detail_longitude)
    marker = new google.maps.Marker({
        position: new google.maps.LatLng(pub[0].detail_latitude, pub[0].detail_longitude),
        title: "test",
        map: map

    })
}
