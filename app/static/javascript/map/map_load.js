function map_load_summary() {
    console.log('MAP_LOAD')
    var js = document.createElement("script");
    js.type = "text/javascript";
    console.log('internet connection status: ' + window.navigator.onLine)

    if (window.navigator.onLine == true) {
        console.log('on-line')
        js.setAttribute("defer", "defer");
//        console.log('pub_latitude : ' + pub[0].detail_latitude)
//        console.log('pub_length : ' + pub.length)
//        console.log(pub)
        js.src = 'https://maps.googleapis.com/maps/api/js?key=' + env_vars['google_key'] + '&libraries=places&callback=map_init_summary'
        document.head.appendChild(js)
    } else {
        console.log('off-line')
        console.log('no map')
        map_init_none()
    }

    //map_init_none()
}

function map_load_collection(pub_filtered) {
    console.log('MAP_LOAD')
    var js = document.createElement("script");
    js.type = "text/javascript";
    console.log('internet connection status: ' + window.navigator.onLine)

    if (window.navigator.onLine == true) {
        console.log('on-line')
        console.log('pub_length : ' + pub_filtered|length)
        if (pub_filtered|length < 10) {
            console.log('less than 10')
            js.setAttribute("defer", "defer");
            js.src = 'https://maps.googleapis.com/maps/api/js?key=' + env_vars['google_key'] + '&libraries=places&callback=map_init_collection'
            document.head.appendChild(js)
        } else {
            console.log('10 or more')
            map_init_too_many()
        }
    } else {
        console.log('off-line')
        console.log('no map')
        map_init_none()
    }

    //map_init_none()
}
