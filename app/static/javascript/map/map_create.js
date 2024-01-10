function map_create(lat, lng, zoom) {
    console.log("map create");
//    console.log('lat: ' + lat)
//    console.log('lng: ' + lng)
    var map_prop = {
        center: new google.maps.LatLng(lat, lng),
        zoom:zoom,
        zoomControl: true,
        //fullScreenControl: false,
        controlSize: 20,
        //minZoom: 11
        }
    var map = new google.maps.Map(document.getElementById('new_map'), map_prop)
    return map
}
