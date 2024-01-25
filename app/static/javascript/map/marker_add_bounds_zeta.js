var markersArray =[];
function clearOverlays() {
  for (var i = 0; i < markersArray.length; i++ ) {
    markersArray[i].setMap(null);
  }
  markersArray.length = 0;
}
//function marker_add_bounds_beta(map, bounds, data) {
function marker_add_bounds_zeta() {
    console.log('add markers inside bounds ZETA')
    console.log('data in: ' + data.length)

    //clearOverlays();
//    map_elem = document.getElementById('msg_map');
//    map_elem.innerHTML = '';

    marker_counter = 0
    var infowindow = new google.maps.InfoWindow();
    var labelOriginHole = new google.maps.Point(12,15);
    var pinSVGHole = "M12,11.5A2.5,2.5 0 0,1 9.5,9A2.5,2.5 0 0,1 12,6.5A2.5,2.5 0 0,1 14.5,9A2.5,2.5 0 0,1 12,11.5M12,2A7,7 0 0,0 5,9C5,14.25 12,22 12,22C12,22 19,14.25 19,9A7,7 0 0,0 12,2Z";
    //var pinSVGFilled = "M 12,2 C 8.1340068,2 5,5.1340068 5,9 c 0,5.25 7,13 7,13 0,0 7,-7.75 7,-13 0,-3.8659932 -3.134007,-7 -7,-7 z";
    var pinHole = pinSVGHole


    var bounds = new google.maps.LatLngBounds();
    bounds = map.getBounds()
    console.log('bounds')
    console.log(bounds)
    let ne = bounds.getNorthEast(); // Coords of the northeast corner
    let sw = bounds.getSouthWest(); // Coords of the southwest corner
    let north_east = ne.toString().replace(/[()]/g, "");
    var north_east_str = north_east.toString().split(',');
    let south_west = sw.toString().replace(/[()]/g, "");
    var south_west_str = south_west.toString().split(',');
    var north = north_east_str[0]
    var south = south_west_str[0]
    var east = north_east_str[1]
    var west = south_west_str[1]

    //console.log('map')
    //console.log(map)
    //console.log('bounds')
    //console.log(bounds)
//    var map_prop = {
//        center: new google.maps.LatLng(50, 50),
//        zoomControl: true,
//        //fullScreenControl: false,
//        controlSize: 20,
//        minZoom: 11
//        }
//    map2 = new google.maps.Map(document.getElementById('new_map'), map_prop)

    //bounds = map.getBounds();
    console.log('bounds')
    console.log(bounds)
    for (var i = 0; i < data.length; i++) {
        //console.log(i)

        if (i==0) {
            var pinColor = '#808000'
            var pinIndex = 20
        } else {
            //var pinColor = "#005B8F"
            var pinColor = "#808000"
            var pinIndex = 0
            //data[i]['colour']
        }

        var markerImage = {  // https://developers.google.com/maps/documentation/javascript/reference/marker#MarkerLabel
            path: pinHole,
            anchor: new google.maps.Point(12,17),
            fillOpacity: 1,
            fillColor: pinColor,
            strokeWeight: 2,
            strokeColor: "white",
            scale: 2,
            labelOrigin: labelOriginHole,
            zIndex: pinIndex
        };

        if (data[i].detail_latitude > south && data[i].detail_latitude < north && data[i].detail_longitude > west && data[i].detail_longitude < east) {

            marker_counter++
            //console.log(data[i].detail_latitude + " : " + data[i].detail_longitude)
            marker = new google.maps.Marker({
                position: new google.maps.LatLng(data[i].detail_latitude, data[i].detail_longitude),
                map: map,
                icon: markerImage
                })
            bounds.extend(marker.getPosition());

            google.maps.event.addListener(marker, 'click', (function (marker, i) {
                    return function () {
                        infowindow.x = data[i].detail_name;
                        infowindow.setContent("<p><b>" + data[i].detail_name + "</b></p>" +
                            "<a href='/pub/?id=" + data[i].pub_identity + "'>click for details</a>");
                        infowindow.open(map, marker);
                        }
                    })(marker, i));
            markersArray.push(marker)
        }

    }
    //map.fitBounds(bounds);
}
