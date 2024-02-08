_
function map_load() {
    console.log('MAP_LOAD')
    //console.log(env_vars['google_key'])
    var js = document.createElement("script");
    js.type = "text/javascript";
    console.log('internet connection status: ' + window.navigator.onLine)
    if (window.navigator.onLine == true) {
        console.log('on-line')
        js.setAttribute("defer", "defer");
        js.src = 'https://maps.googleapis.com/maps/api/js?key=' + env_vars['google_key'] + '&libraries=places&callback=map_init'
        document.head.appendChild(js)
        console.log(pub)

    } else {
        console.log('off-line')
        map_init_none()
    }
}
