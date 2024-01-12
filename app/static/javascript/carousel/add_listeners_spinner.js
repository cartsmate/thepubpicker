function add_listeners_spinner() {
    //model_format = {{model_formats | tojson}}['icon_list']
    //env_vars['google_key']
    console.log('ADD LISTENERS spinner')

    model_format = model_formats['icon_list']
    for (field in model_format) {
        var marker = model_format[field]
        if (marker != 'nofeature') {
            var marker_id = model_format[field] + "_carousel"
            document.getElementById(marker_id).addEventListener('click', (function (marker) {
                return function () {
                    console.log('carousel spinner listener triggered')
                    //console.log(marker)
                    //underscore = marker.indexOf("_");
                    //attr_marker = marker.substr(0,underscore);
                    //console.log(attr_marker)
//                    for (i=0; i<model_formats['icon_list'].length; i++) {
//                        //console.log(model_formats['icon_list'][i])
//                        if (model_formats['icon_list'][i] != 'nofeature') {
//                            //console.log(model_formats['icon_list'][i])
//                            document.getElementById(model_formats['icon_list'][i] + "_filter").checked = false;
//                            document.getElementById(model_formats['icon_list'][i] + "_word").style.color = "black"
//                            document.getElementById(model_formats['icon_list'][i] + "_carousel").style.backgroundColor = "white"
//                        }
//                    }

                    if (document.getElementById(marker + "_filter").checked == true){
                        console.log('already TRUE - blank out')
                        for (i=0; i<model_formats['icon_list'].length; i++) {
                        //console.log(model_formats['icon_list'][i])
                            if (model_formats['icon_list'][i] != 'nofeature') {
                                //console.log(model_formats['icon_list'][i])
                                document.getElementById(model_formats['icon_list'][i] + "_filter").checked = false;
                                document.getElementById(model_formats['icon_list'][i] + "_word").style.color = "black"
                                document.getElementById(model_formats['icon_list'][i] + "_carousel").style.backgroundColor = "white"
                            }
                        }
                        //document.getElementById(marker + "_filter").checked = false;
                        //document.getElementById(marker + "_word").style.color = "black"
                        //document.getElementById(marker + "_carousel").style.backgroundColor = "white"
                        document.getElementById('template_map').style.display = "none";
                        document.getElementById('template_list').style.display = "none";
                        document.getElementById('template_header').style.display = "none";
                    } else {
                        console.log(marker)
                        console.log('was blank - make HIGHLIGHT')
                        for (i=0; i<model_formats['icon_list'].length; i++) {
                        //console.log(model_formats['icon_list'][i])
                            if (model_formats['icon_list'][i] != 'nofeature') {
                                //console.log(model_formats['icon_list'][i])
                                document.getElementById(model_formats['icon_list'][i] + "_filter").checked = false;
                                document.getElementById(model_formats['icon_list'][i] + "_word").style.color = "black"
                                document.getElementById(model_formats['icon_list'][i] + "_carousel").style.backgroundColor = "white"
                            }
                        }
                        document.getElementById(marker + "_filter").checked = true;
                        document.getElementById(marker + "_word").style.color = "white"
                        document.getElementById(marker + "_carousel").style.backgroundColor = "coral"

                        pubs_reviews = filter_all_data()
                        console.log('pubs_reviews: ' + pubs_reviews.length)
                        pubs_sorted = sort_by_distance(pubs_reviews, map)
                        var center = new google.maps.LatLng(pubs_sorted[0]['detail_latitude'], pubs_sorted[0]['detail_longitude']);
                        console.log('center: ' + center)
                        map.panTo(center);
    //                    populate_header(pubs_sorted.length)
    //                    map_load_collection(pubs_sorted)
    //                    list_setup(pubs_sorted)
                        document.getElementById('template_map').style.display = "block";
                        document.getElementById('template_list').style.display = "block";
                        document.getElementById('template_header').style.display = "block";
                    }
                }
            })(marker))
        }
    }
}
