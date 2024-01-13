function map_addListener_click_placeid(map) {
    console.log('map click listener added')
    var infowindow = new google.maps.InfoWindow();
    map.addListener('click', function (event) {
        // If the event is a POI
        console.log('event')
        console.log(JSON.stringify(event))
        if (event.placeId) {
            console.log('USER INPUT - place id clicked')

            var request = {
                placeId: event.placeId,
            };
            var find_request = {
                placeId: event.placeId,
            };
            var service = new google.maps.places.PlacesService(map);
            service.getDetails(request, function(place, status) {
                if (status === google.maps.places.PlacesServiceStatus.OK) {
                    console.log('place')
                    console.log(place)
                    event.stop();
                    infowindow.close();
                    infowindow.setPosition(event.latLng);
        //            infowindow.setContent("<p><b><a href='/add/?place_id=" + event.placeId + "'>Add Venue</a></b></p>")
                    infowindow.setContent("<p>" + place.name + "</p><p><b><a href='/add/?place_id=" + event.placeId + "'>Add Venue</a></b></p>")
                    infowindow.open(map);
                    //document.getElementById("detail_name").value = place.name
                    //document.getElementById("address").value = place.formatted_address
                }
            });



        }


    })

}


function map_addListener_click_add(map) {
    console.log('map addListener click')
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
                    console.log('place response')
                    console.log(place)
                    document.getElementById("detail_name").value = place.name
                    document.getElementById("address").value = place.formatted_address
                    if(place.hasOwnProperty('editorial_summary')){
                        document.getElementById("extra").value = place.editorial_summary.overview
                        } else {
                        document.getElementById("extra").value = 'No detail available'
                        }
                    if(place.hasOwnProperty('website')){
                        document.getElementById("website").value = place.website
                        }
                    if(place.hasOwnProperty('url')){
                        document.getElementById("url").value = place.url
                        }

                    //populate_stars('rank', ranking, 'map')
                    place_text = String(place.types)

                    var array2 = place_text.split(",")
                    var text;
                    var place_set = false;
                    var myStringArray = array2;
                    var arrayLength = myStringArray.length;
                    for (var i = 0; i < arrayLength; i++) {
                        if (myStringArray[i] == "bar" || myStringArray[i] == "restaurant") {
                            text = myStringArray[i].charAt(0).toUpperCase() + myStringArray[i].slice(1);
                            place_set = true;
                            break;
                        }
                    }
                    if (place_set == false) { text='Other' }
                    document.getElementById("category").value = text;
                }
            });
            event.stop();
            document.getElementById("place").value = event.placeId;
            console.log('event: ' + JSON.stringify(event))

            lat_lng_json = JSON.stringify(event.latLng.toJSON());
            var lat_lng_obj = JSON.parse(lat_lng_json);
            document.getElementById("detail_latitude").value = lat_lng_obj.lat;
            document.getElementById("detail_longitude").value = lat_lng_obj.lng;

            nearest_station(place, lat_lng_obj)

            pinColor = "coral";
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
/*
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
*/
/*
  function getPlaceInformation(placeId) {
    const me = this;
    this.placesService = new google.maps.places.PlacesService(map);
    this.placesService.getDetails({ placeId: placeId }, (place, status) => {
      if (
        status === "OK" &&
        place &&
        place.geometry &&
        place.geometry.location
      ) {
        me.infowindow.close();
        me.infowindow.setPosition(place.geometry.location);
        me.infowindowContent.children["place-icon"].src = place.icon;
        me.infowindowContent.children["place-name"].textContent = place.name;
        me.infowindowContent.children["place-id"].textContent = place.place_id;
        me.infowindowContent.children["place-address"].textContent =
          place.formatted_address;
        me.infowindow.open(me.map);
      }
    });
  }
  */