function add_listeners_carousel_features() {
    //model_format = {{model_formats | tojson}}['icon_list']
    //env_vars['google_key']
    console.log('ADD LISTENERS')

    model_format = model_formats['icon_list']
    for (field in model_format) {
        var marker = model_format[field]
        if (marker != 'nofeature') {
            var marker = model_format[field] + "_carousel"
            console.log(marker)
            document.getElementById(marker).addEventListener('click', (function (marker) {
                return function () {
                    console.log('carousel listener triggered')
                    var base_url = window.location.hostname
                    if (env_vars['env'] == 'qual') {
                        var url = "http://" + base_url + ":5000/collection/"
                    } else {
                        var url = "http://" + base_url + "/collection/"
                    }
                    const myUrlWithParams = new URL(url);
                    underscore = marker.indexOf("_");
                    attr_marker = marker.substr(0,underscore);
                    myUrlWithParams.searchParams.append('feature', attr_marker);
                    window.location.replace(myUrlWithParams.href);
                    }
                })(marker))
        }
    }
}
