function map_load(google_key, pub) {
    console.log('MAP_LOAD')
    console.log(google_key)
    var js = document.createElement("script");
    js.type = "text/javascript";
    console.log('internet connection status: ' + window.navigator.onLine)
    if (window.navigator.onLine == true) {
        console.log('on-line')
        js.setAttribute("defer", "defer");
        js.src = 'https://maps.googleapis.com/maps/api/js?key=' + google_key + '&libraries=places&callback=map_init'
        document.head.appendChild(js)
        console.log(pub)

    } else {
        console.log('off-line')
        map_init_none()
    }
}
