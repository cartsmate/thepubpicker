function map_create() {
    console.log("MAP CREATE");
    var map_prop = {
        center: new google.maps.LatLng(pub[0].pub_latitude, pub[0].pub_longitude),
        zoom:18,
        }
    var map = new google.maps.Map(document.getElementById('map'), map_prop)
    return map
}