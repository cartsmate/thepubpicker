function add_listeners() {
    //model_format = {{model_formats | tojson}}['icon_list']
    //env_vars['google_key']
    console.log('ADD LISTENERS')

    model_format = model_formats['icon_list']
    for (field in model_format) {
        var marker = model_format[field]
        document.getElementById(marker).addEventListener('click', (function (marker) {
            return function () {
                var base_url = window.location.hostname
                if (env_vars['env'] == 'qual') {
                    var url = "http://" + base_url + ":5000/collection/"
                } else {
                    var url = "http://" + base_url + "/collection/"
                }
                const myUrlWithParams = new URL(url);
                myUrlWithParams.searchParams.append('feature', marker);
                window.location.replace(myUrlWithParams.href);
                }
            })(marker))
    }
}
