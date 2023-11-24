function map_init() {
    console.log("INIT MAP");
    var map_prop = {
        center: new google.maps.LatLng(52, 0),
        zoom:5,
        }
    var map = new google.maps.Map(document.getElementById('googleMap'), map_prop)
    //map_display(51.52, -0.127, document.getElementById('map'))
    //marker_add_1(map)
    var marker = new google.maps.Marker({position: new google.maps.LatLng(52, 0)})
    marker.setMap(map)

}
