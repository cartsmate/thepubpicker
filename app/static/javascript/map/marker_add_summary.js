function marker_add_summary(map, lat1, lng1) {
    console.log('MARKER ADD SUMMARY')
//    console.log('lat: ' + pub[0].detail_latitude)
//    console.log('lat: ' + pub[0].detail_longitude)
    var pinSVGHole = "M12,11.5A2.5,2.5 0 0,1 9.5,9A2.5,2.5 0 0,1 12,6.5A2.5,2.5 0 0,1 14.5,9A2.5,2.5 0 0,1 12,11.5M12,2A7,7 0 0,0 5,9C5,14.25 12,22 12,22C12,22 19,14.25 19,9A7,7 0 0,0 12,2Z";
    var pin = pinSVGHole
    var pinColor = "coral"
    var labelOriginHole = new google.maps.Point(12,15);
    var markerImage = {  // https://developers.google.com/maps/documentation/javascript/reference/marker#MarkerLabel
            path: pin,
            anchor: new google.maps.Point(12,17),
            fillOpacity: 1,
            fillColor: pinColor,
            strokeWeight: 2,
            strokeColor: "white",
            scale: 2,
            labelOrigin: labelOriginHole
        };
    marker = new google.maps.Marker({
        //position: new google.maps.LatLng(pub[0].detail_latitude, pub[0].detail_longitude),
        position: new google.maps.LatLng(lat1, lng1),
        title: "marker",
        map: map,
        icon: markerImage

    })
}
