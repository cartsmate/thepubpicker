function add_markers(map, data) {
    console.log('ADD_MARKERS')
    if (window.navigator.onLine == true) {
        for (let i = 0; i < markersArray.length; i++) {
            markersArray[i].setMap(null);
            }
        markersArray = []

        var pinSVGHole = "M12,11.5A2.5,2.5 0 0,1 9.5,9A2.5,2.5 0 0,1 12,6.5A2.5,2.5 0 0,1 14.5,9A2.5,2.5 0 0,1 12,11.5M12,2A7,7 0 0,0 5,9C5,14.25 12,22 12,22C12,22 19,14.25 19,9A7,7 0 0,0 12,2Z";
        var labelOriginHole = new google.maps.Point(12,15);

        var infowindow = new google.maps.InfoWindow();
        var marker, i, j;
        var bounds = new google.maps.LatLngBounds();

        for (var key in data) {
            var pinColor = "#0275d8"
            var pin = pinSVGHole
            var label = {
                text: " ",
                color: "white",
                fontSize: "1px",
            };

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

            if (data[key].colour == '#d9534f' ) {
                var indie = 1
            } else {
                var indie = 2
            }
            marker = new google.maps.Marker({
                position: new google.maps.LatLng(data[key].pub_latitude, data[key].pub_longitude),
                map: map,
                icon: markerImage,
                //title: title_name,
                zIndex: indie
            })

            google.maps.event.addListener(marker, 'click', (function (marker, key) {
                return function () {
                    set=data[key].pub_name.trim().replace(/%20/g, " ");
                    infowindow.x = set;
                    infowindow.setContent("<p><b>" + set + "</b></p>" +
                        "<a href='#' onclick='click_pub()'>" + set + "</a>");
                    infowindow.open(map, marker);
                    }
                })(marker, key));

            markersArray.push(marker);
            var myLatLng = new google.maps.LatLng(data[key].pub_latitude, data[key].pub_longitude)
            /*
            let person = prompt("Please enter your name", "Harry Potter");
            if (person != null) {
                bounds.extend(myLatLng);
                map.fitBounds(bounds);
            }
            */
            bounds.extend(myLatLng);
            map.fitBounds(bounds);
        }

        map.fitBounds(bounds);
        /*
        lat_ave = 0
        lng_ave = 0

        const lat_average = data.reduce((total, next) => total + next.pub_latitude, 0) / data.length;
        const lng_average = data.reduce((total, next) => total + next.pub_longitude, 0) / data.length;
        console.log('data: ' + data)
        console.log('lat_average: ' + lat_average)
        console.log('lng_average: ' + lng_average)
        if (markersArray.length > 1 ) {
            console.log('SET CENTER > 1')

            const center = new google.maps.LatLng(0, 0)
            console.log('center: ' + center)
            var myLocation = {lat: 0.0, lng: 0.0};

            map.setCenter(myLocation);
            //map.panTo(center)
            //map.fitBounds(bounds);
        } else {
            console.log('SET CENTER = 1')
            map.setZoom(17)
            map.setCenter(new google.maps.LatLng(data[0].pub_latitude, data[0].pub_longitude))

        }
        var myLocation = {lat: 0.0, lng: 0.0};

        map.panTo(myLocation);
        //add_marker_bounds(map, bounds, data)
        */
    }
}
