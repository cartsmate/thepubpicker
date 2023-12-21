function make_request() {
    console.log('MAKE REQUEST')

//    const proxyurl = "https://cors-anywhere.herokuapp.com/";
//    const url = "https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${latitude},${longitude}&radius=500&key=[API KEY]"; // site that doesn’t send Access-Control-*
//    fetch(proxyurl + url) // https://cors-anywhere.herokuapp.com/https://example.com
//    .then(response => response.json())
//    .then(contents => console.log(contents))
//    .catch(() => console.log("Can’t access " + url + " response. Blocked by browser?"))

    const apiKey1 = 'YOUR_API_KEY';
    const apiKey = 'AIzaSyCbb6tdoROEQuBKLZXybG5cNIB4UTc6A20'
    const placeId1 = 'YOUR_PLACE_ID'; // Replace with the actual Place ID
    const placeId = 'ChIJta8CEZoddkgRzUPFFO6tYHc'
    // Construct the API URL
    const apiUrl = 'https://maps.googleapis.com/maps/api/place/details/json?placeid=' + placeId + '&key=' + apiKey
    console.log(apiUrl)
    // Make a GET request to the Places API
    fetch(proxyurl + apiUrl)
      .then(response => {
        // Check if the request was successful (status code 200)
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        // Parse the JSON response
        return response.json();
      })
      .then(data => {
        // Access the place details from the response data
        const placeDetails = data.result;

        // Do something with the place details
        console.log('Place Details:', placeDetails);
      })
      .catch(error => {
        // Handle errors
        console.error('Error:', error);
      });

}

function map_listener_click(map) {
    console.log('map_listener_click')
    map.addListener('click', function (event) {
        // If the event is a POI
        if (event.placeId) {
            console.log('placeId: ' + event.placeId)
            //make_request()


            var request = {
                placeId: event.placeId,
                //fields: ['name','geometry','formatted_address','rating','reviews','user_ratings_total','editorial_summary']
            };
            var phone_request = '+16502530000'
            var find_request = {
                placeId: event.placeId,
                //fields: ['name','geometry','formatted_address','rating','reviews','user_ratings_total','editorial_summary']
            };
            var service = new google.maps.places.PlacesService(map);
            service.getDetails(request, function(place, status) {
            //service.findPlaceFromPhoneNumber(phone_request, function(place, status) {
            //service.findPlaceFromQuery(find_request, function(place, status) {
            //service.nearbySearch(request, function(place, status) {
            //service.textSearch(request, function(place, status) {
                if (status === google.maps.places.PlacesServiceStatus.OK) {
                    console.log(place)

                    var reviews = place.reviews;
                    if (place.rating === undefined) {
                            console.log('undefined')
                            var ranking = 0
                        } else {
                            console.log(place.rating)
                            var ranking = place.rating
                        }
                    document.getElementById("rank").value = ranking
                    //console.log(place.editorial_summary)
                    document.getElementById("pub_name").value = place.name
                    document.getElementById("address").value = place.formatted_address
                    populate_stars('rank', ranking, 'map')

                }
            });
            event.stop();
            document.getElementById("place").value = event.placeId;
            console.log('event: ' + JSON.stringify(event))

            lat_lng_json = JSON.stringify(event.latLng.toJSON());
            var lat_lng_obj = JSON.parse(lat_lng_json);
            document.getElementById("pub_latitude").value = lat_lng_obj.lat;
            document.getElementById("pub_longitude").value = lat_lng_obj.lng;

            nearest_station(place, lat_lng_obj)

            pinColor = "#0275d8"
            var labelOriginHole = new google.maps.Point(12,15);
            var pinSVGHole = "M12,11.5A2.5,2.5 0 0,1 9.5,9A2.5,2.5 0 0,1 12,6.5A2.5,2.5 0 0,1 14.5,9A2.5,2.5 0 0,1 12,11.5M12,2A7,7 0 0,0 5,9C5,14.25 12,22 12,22C12,22 19,14.25 19,9A7,7 0 0,0 12,2Z";
            var markerImage2 = {  // https://developers.google.com/maps/documentation/javascript/reference/marker#MarkerLabel
                    path: pinSVGHole,
                    anchor: new google.maps.Point(12,17),
                    fillOpacity: 1,
                    fillColor: pinColor,
                    strokeWeight: 2,
                    strokeColor: "white",
                    scale: 2,
                    labelOrigin: labelOriginHole
                };
            marker = new google.maps.Marker({
                position: new google.maps.LatLng(lat_lng_obj.lat, lat_lng_obj.lng),
                map: map,
                icon: markerImage2,
            })
            const center = new google.maps.LatLng(lat_lng_obj.lat, lat_lng_obj.lng);
            window.map.panTo(center);

        }
    })
}

function listener_click(map) {
    console.log('listener_click')
    var infowindow = new google.maps.InfoWindow();
    map.addListener('click', function (event) {
        if (event.placeId) {
            event.stop();
            infowindow.close();
            infowindow.setPosition(event.latLng);
            infowindow.setContent(
                '<strong>Click to populate form fields</strong>'
                + '<br>'
                + '<button onclick="myFunction(event)">Populate form</button>');
            infowindow.open(map);
        }
    })
}

function myFunction(event) {
    alert('placeId: ' + event.placeId)
}