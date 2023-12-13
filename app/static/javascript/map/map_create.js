function map_create(lat, lng) {
    console.log("map create");
    console.log('lat: ' + lat)
    console.log('lng: ' + lng)
    var map_prop = {
        center: new google.maps.LatLng(lat, lng),
        zoom:18,
        zoomControl: true,
        }
    var map = new google.maps.Map(document.getElementById('map'), map_prop)
    return map
}