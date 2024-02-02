function map_load(page) {
    console.log('map load: ' + page)
    var js = document.createElement("script");
    js.type = "text/javascript";
    console.log('internet connection status: ' + window.navigator.onLine)
    if (window.navigator.onLine == true) {
        console.log('on-line')
        js.setAttribute("defer", "defer");
        switch(page) {
            case 'pub':
                map_initiator = 'map_init_pub'
                break;
            case 'add':
                map_initiator = 'map_init_add'
                break;
            case 'edit':
                map_initiator = 'map_init_edit'
                break;
            default:
                map_initiator = 'map_init_gamma'
            }
        js.src = 'https://maps.googleapis.com/maps/api/js?key=' + env_vars['google_key'] + '&libraries=places&callback=' + map_initiator
        document.head.appendChild(js)
    } else {
        console.log('off-line')
        console.log('no map')
        map_init_none()
    }
}
/*
function map_load_gamma() {
    console.log('map load GAMMA')
    var js = document.createElement("script");
    js.type = "text/javascript";
    console.log('internet connection status: ' + window.navigator.onLine)
    if (window.navigator.onLine == true) {
        console.log('on-line')
        js.setAttribute("defer", "defer");
        js.src = 'https://maps.googleapis.com/maps/api/js?key=' + env_vars['google_key'] + '&libraries=places&callback=map_init_gamma'
        document.head.appendChild(js)
    } else {
        console.log('off-line')
        console.log('no map')
        map_init_none()
    }
}
function map_load_pub() {
    console.log('MAP_LOAD_PUB')
    var js = document.createElement("script");
    js.type = "text/javascript";
    console.log('internet connection status: ' + window.navigator.onLine)
    if (window.navigator.onLine == true) {
        console.log('on-line')
        js.setAttribute("defer", "defer");
        js.src = 'https://maps.googleapis.com/maps/api/js?key=' + env_vars['google_key'] + '&libraries=places&callback=map_init_pub'
        document.head.appendChild(js)
    } else {
        console.log('off-line')
        console.log('no map')
        map_init_none()
    }
}
function map_load_add() {
    console.log('MAP_LOAD_ADD')
    var js = document.createElement("script");
    js.type = "text/javascript";
    console.log('internet connection status: ' + window.navigator.onLine)
    if (window.navigator.onLine == true) {
        console.log('on-line')
        js.setAttribute("defer", "defer");
//        console.log('pub_latitude : ' + pub[0].detail_latitude)
//        console.log('pub_length : ' + pub.length)
//        console.log(pub)
        js.src = 'https://maps.googleapis.com/maps/api/js?key=' + env_vars['google_key'] + '&libraries=places&callback=map_init_add'
        document.head.appendChild(js)
    } else {
        console.log('off-line')
        console.log('no map')
        map_init_none()
    }

    //map_init_none()
}
*/
/*
function map_load_gamma_events() {
    console.log('map load GAMMA events')
    var js = document.createElement("script");
    js.type = "text/javascript";
    console.log('internet connection status: ' + window.navigator.onLine)
    if (window.navigator.onLine == true) {
        console.log('on-line')
        js.setAttribute("defer", "defer");
        js.src = 'https://maps.googleapis.com/maps/api/js?key=' + env_vars['google_key'] + '&libraries=places&callback=map_init_gamma_events'
        document.head.appendChild(js)
    } else {
        console.log('off-line')
        console.log('no map')
        map_init_none()
    }
}

function map_load_collection() {
    console.log('MAP LOAD COLLECTION')
    var js = document.createElement("script");
    js.type = "text/javascript";
    console.log('internet connection status: ' + window.navigator.onLine)
    if (window.navigator.onLine == true) {
        console.log('on-line')
        js.setAttribute("defer", "defer");
        js.src = 'https://maps.googleapis.com/maps/api/js?key=' + env_vars['google_key'] + '&libraries=places&callback=map_init_collection'
        document.head.appendChild(js)
    } else {
        console.log('off-line')
        console.log('no map')
        map_init_none()
    }
}
function map_load_search() {
    console.log('MAP_LOAD_SEARCH')
    var js = document.createElement("script");
    js.type = "text/javascript";
    console.log('internet connection status: ' + window.navigator.onLine)
    if (window.navigator.onLine == true) {
        console.log('on-line')
        js.setAttribute("defer", "defer");
        js.src = 'https://maps.googleapis.com/maps/api/js?key=' + env_vars['google_key'] + '&libraries=places&callback=map_init_search'
        document.head.appendChild(js)
    } else {
        console.log('off-line')
        console.log('no map')
        map_init_none()
    }
}

function map_load_summary() {
    console.log('MAP_LOAD_SUMMARY')
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
    console.log('MAP LOAD COLLECTION')
    var js = document.createElement("script");
    js.type = "text/javascript";
    console.log('internet connection status: ' + window.navigator.onLine)
    if (window.navigator.onLine == true) {
        console.log('on-line')
        console.log('less than 10')
        js.setAttribute("defer", "defer");
        js.src = 'https://maps.googleapis.com/maps/api/js?key=' + env_vars['google_key'] + '&libraries=places&callback=map_init_collection'
        document.head.appendChild(js)
    } else {
        console.log('off-line')
        console.log('no map')
        map_init_none()
    }
}
*/
