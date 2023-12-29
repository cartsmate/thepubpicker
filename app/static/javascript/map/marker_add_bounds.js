var markersArray =[];
function clearOverlays() {
  for (var i = 0; i < markersArray.length; i++ ) {
    markersArray[i].setMap(null);
  }
  markersArray.length = 0;
}
function marker_add_bounds(map, bounds, data) {
    console.log('ADD MARKERS INSIDE BOUNDS')
    clearOverlays();
    map_elem = document.getElementById('msg_map');
    map_elem.innerHTML = '';

//    console.log('map')
//    console.log(map)
//    console.log('bounds')
//    console.log(bounds)
//    console.log('data')
    //console.log(data)
    marker_counter = 0
    var infowindow = new google.maps.InfoWindow();
    var labelOriginHole = new google.maps.Point(12,15);
    var pinSVGHole = "M12,11.5A2.5,2.5 0 0,1 9.5,9A2.5,2.5 0 0,1 12,6.5A2.5,2.5 0 0,1 14.5,9A2.5,2.5 0 0,1 12,11.5M12,2A7,7 0 0,0 5,9C5,14.25 12,22 12,22C12,22 19,14.25 19,9A7,7 0 0,0 12,2Z";
    //var pinSVGFilled = "M 12,2 C 8.1340068,2 5,5.1340068 5,9 c 0,5.25 7,13 7,13 0,0 7,-7.75 7,-13 0,-3.8659932 -3.134007,-7 -7,-7 z";
    var pinHole = pinSVGHole
    /*
    var label = {
        text: " ",
        color: "white",
        fontSize: "1px",
    };
    */
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
    for (var i = 0; i < data.length; i++) {
        //console.log('marker_counter: ' + marker_counter)
        if (marker_counter < 10) {
//    for (var key in data) {
        //var pinColor = '#0275d8'
            //console.log(data[i]['detail_name'])
            //console.log(data[i]['colour'])
            if (i==0) {
                var pinColor = "coral"
            } else {
                var pinColor = data[i]['colour']
            }

            var markerImage = {  // https://developers.google.com/maps/documentation/javascript/reference/marker#MarkerLabel
                path: pinHole,
                anchor: new google.maps.Point(12,17),
                fillOpacity: 1,
                fillColor: pinColor,
                strokeWeight: 2,
                strokeColor: "white",
                scale: 2,
                labelOrigin: labelOriginHole
            };
            /*
            if (data[key].pub_identity == '54ed8eb6-770a-4ed4-b269-a7c770447aed') {
                console.log('lat: ' + data[key].pub_latitude)
                console.log('north: ' + north_east_str[0])
                console.log('south: ' + south_west_str[0])
                console.log('lng: ' + data[key].pub_longitude)
                console.log('east: ' + north_east_str[1])
                console.log('west: ' + south_west_str[1])
            }
            */
            if (data[i].detail_latitude > south && data[i].detail_latitude < north && data[i].detail_longitude > west && data[i].detail_longitude < east) {
//                console.log("inside if statement")
                marker_counter++
                marker = new google.maps.Marker({
                    position: new google.maps.LatLng(data[i].detail_latitude, data[i].detail_longitude),
                    map: map,
                    icon: markerImage
                })
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

        } else {
            map_elem = document.getElementById('msg_map');
            map_elem.innerHTML = 'Max 10 pubs shown on map';
            //map_elem.className = "map_words"
            break;
        }
    }
}
