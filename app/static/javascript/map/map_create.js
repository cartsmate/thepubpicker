
function map_create(lat, lng, zoom) {
    console.log("map create");
    console.log('zoom level: ' + zoom)
//    console.log('lat: ' + lat)
//    console.log('lng: ' + lng)
    var map_prop = {
        center: new google.maps.LatLng(lat, lng),
        zoom:zoom,
        zoomControl: true,
        //fullScreenControl: false,
        controlSize: 30,
        streetViewControl: false,
        //minZoom: 11,
        restriction: {
            latLngBounds: get_london_bounds(),
            strictBounds: true,
        },
        disableDefaultUI: true,
        }
    map = new google.maps.Map(document.getElementById('new_map'), map_prop)
    //bounds = map.getBounds()
    //var bounds = new google.maps.LatLngBounds();

    return map
}
