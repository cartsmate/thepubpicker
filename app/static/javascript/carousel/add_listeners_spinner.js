

function add_listeners_spinner(theme) {
    console.log(theme)
    console.log('ADD LISTENERS spinner')
    model_format = model_formats['icon_list']
    for (field in model_format) {
        var marker = model_format[field]
        if (marker != 'nofeature') {
            var marker_id = model_format[field] + "_carousel"
            document.getElementById(marker_id).addEventListener('click', (function (marker, theme) {
                return function () {
                    console.log('carousel spinner listener triggered')

                    if (document.getElementById(marker + "_filter").checked == true){
                        console.log('already TRUE - blank out')
                        for (i=0; i<model_formats['icon_list'].length; i++) {
                            if (model_formats['icon_list'][i] != 'nofeature') {
                                document.getElementById(model_formats['icon_list'][i] + "_filter").checked = false;
                                document.getElementById(model_formats['icon_list'][i] + "_word").style.color = "black"
                                document.getElementById(model_formats['icon_list'][i] + "_carousel").style.backgroundColor = "white"
                            }
                        }
                        update_results()

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
                        document.getElementById(marker + "_carousel").style.backgroundColor = theme

                        update_results()
                        /*
                        pub_filtered = filter_all_data(pub)
                        populate_all_filters(pub_filtered)
                        pubs_sorted = sort_by_distance(pub_filtered, map)
                        list_setup_beta(pubs_sorted)
                        populate_header(pub_filtered.length)
                        map_repopulate(pub_filtered)
                        if (pub_filtered.length < pub.length) {
                            display_results('block')
                        } else {
                            display_results('none')
                        }
                        */
                    }
                }
            })(marker, theme))
        }
    }
}
