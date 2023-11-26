function map_setup(js) {
    console.log("MAP SETUP");
    console.log('on-line')
    js.setAttribute("defer", "defer");
    js.src = 'https://maps.googleapis.com/maps/api/js?key=' + env_vars['google_key'] + '&libraries=places&callback=map_init'
    document.head.appendChild(js)
    console.log(pub)
}