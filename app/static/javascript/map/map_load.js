function map_load() {
    console.log('MAP_LOAD')
    var js = document.createElement("script");
    js.type = "text/javascript";
    console.log('internet connection status: ' + window.navigator.onLine)

    if (window.navigator.onLine == true) {
        console.log('on-line')
        js.setAttribute("defer", "defer");
        console.log('pub_latitude : ' + pub[0].detail_latitude)
        console.log('pub_length : ' + pub.length)
        console.log(pub)
        if (pub.length == 1 && pub[0].detail_latitude == 0) {
            console.log('blank map')
            js.src = 'https://maps.googleapis.com/maps/api/js?key=' + env_vars['google_key'] + '&libraries=places&callback=map_init_blank'
        } else {
            console.log('1 map')
            js.src = 'https://maps.googleapis.com/maps/api/js?key=' + env_vars['google_key'] + '&libraries=places&callback=map_init_1'
        }

        document.head.appendChild(js)
    } else {
        console.log('off-line')
        console.log('no map')
        map_init_none()
    }

    //map_init_none()
}
