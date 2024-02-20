function map_load(page) {
    console.log('map load on ' + page + ' | on-line?: ' + window.navigator.onLine)
    var js = document.createElement("script");
    js.type = "text/javascript";
    if (window.navigator.onLine == true) {
        js.setAttribute("defer", "defer");
        map_initiator = 'map_init'
        js.src = 'https://maps.googleapis.com/maps/api/js?key=' + env_vars['google_key'] + '&libraries=places&callback=' + map_initiator
        document.head.appendChild(js)
    } else {
        map_init_none()
    }
}
