function marker_add(the_pub, pub_rank) {
    console.log('ADD MARKERS')

    var pinSVGHole = "M12,11.5A2.5,2.5 0 0,1 9.5,9A2.5,2.5 0 0,1 12,6.5A2.5,2.5 0 0,1 14.5,9A2.5,2.5 0 0,1 12,11.5M12,2A7,7 0 0,0 5,9C5,14.25 12,22 12,22C12,22 19,14.25 19,9A7,7 0 0,0 12,2Z";
    var labelOriginHole = new google.maps.Point(12,15);
    var pinSVGFilled = "M 12,2 C 8.1340068,2 5,5.1340068 5,9 c 0,5.25 7,13 7,13 0,0 7,-7.75 7,-13 0,-3.8659932 -3.134007,-7 -7,-7 z";
    var labelOriginFilled =  new google.maps.Point(12,9);
    var infowindow = new google.maps.InfoWindow();

    var pinColor = '#808000'
    var pin = pinSVGHole
    //console.log('pub_rank')
    //console.log(pub_rank)
    pub_rank_text = pub_rank.toString()
    // https://developers.google.com/maps/documentation/javascript/reference/marker#MarkerLabel
    var markerImage = {
        path: pinSVGFilled,
        anchor: new google.maps.Point(12,17),
        fillOpacity: 1,
        fillColor: pinColor,
        strokeWeight: 2,
        strokeColor: "white",
        scale: 2,
        labelOrigin: labelOriginFilled,
    };

    marker = new google.maps.Marker({
        position: new google.maps.LatLng(the_pub['detail_latitude'], the_pub['detail_longitude']),
        map: map,
        icon: markerImage,
        label: {color: 'white', fontSize: '10px', text: pub_rank.toString()}
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
