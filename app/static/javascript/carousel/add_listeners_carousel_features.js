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

                    underscore = marker.indexOf("_");
                    attr_marker = marker.substr(0,underscore);
                    console.log(attr_marker)
                    document.getElementById("brunch_filter").checked = false;
                    document.getElementById("dart_filter").checked = false;
                    document.getElementById("entertain_filter").checked = false;
                    document.getElementById("favourite_filter").checked = false;
                    document.getElementById("garden_filter").checked = false;
                    document.getElementById("history_filter").checked = false;
                    document.getElementById("late_filter").checked = false;
                    document.getElementById("music_filter").checked = false;
                    document.getElementById("pool_filter").checked = false;
                    document.getElementById("quiz_filter").checked = false;
                    document.getElementById("roast_filter").checked = false;
                    document.getElementById("sport_filter").checked = false;

                    document.getElementById(attr_marker + "_filter").checked = true;

                    pubs_reviews = filter_all_data()
                    console.log('pubs_reviews: ' + pubs_reviews.length)
                    pubs_sorted = sort_by_distance(pubs_reviews, map)
                    var center = new google.maps.LatLng(pubs_sorted[0]['detail_latitude'], pubs_sorted[0]['detail_longitude']);
                    console.log('center: ' + center)
                    map.panTo(center);
                    document.getElementById('col_map').style.display = "block";
//                    var base_url = window.location.hostname
//                    if (env_vars['env'] == 'qual') {
//                        var url = "http://" + base_url + ":5000/collection/"
//                    } else {
//                        var url = "http://" + base_url + "/collection/"
//                    }
//                    const myUrlWithParams = new URL(url);
//                    underscore = marker.indexOf("_");
//                    attr_marker = marker.substr(0,underscore);
//                    myUrlWithParams.searchParams.append('feature', attr_marker);
//                    window.location.replace(myUrlWithParams.href);
                    }
                })(marker))
        }
    }
}
