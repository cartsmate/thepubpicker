function marker_add(the_pub) {
    console.log('ADD MARKERS')

    var pinSVGHole = "M12,11.5A2.5,2.5 0 0,1 9.5,9A2.5,2.5 0 0,1 12,6.5A2.5,2.5 0 0,1 14.5,9A2.5,2.5 0 0,1 12,11.5M12,2A7,7 0 0,0 5,9C5,14.25 12,22 12,22C12,22 19,14.25 19,9A7,7 0 0,0 12,2Z";
    var labelOriginHole = new google.maps.Point(12,15);
    var infowindow = new google.maps.InfoWindow();

    var pinColor = '#808000'
    var pin = pinSVGHole

    // https://developers.google.com/maps/documentation/javascript/reference/marker#MarkerLabel
    var markerImage = {
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
        position: new google.maps.LatLng(the_pub['detail_latitude'], the_pub['detail_longitude']),
        map: map,
        icon: markerImage
    })

    google.maps.event.addListener(marker, 'click', (function (marker) {
            return function () {
                infowindow.x = the_pub.detail_name;
                infowindow.setContent("<p><b>" + the_pub.detail_name + "</b></p>" +
                    "<a href='/pub/?id=" + the_pub.pub_identity + "'>click for details</a>");
                infowindow.open(map, marker);
            }
        })(marker));

}
