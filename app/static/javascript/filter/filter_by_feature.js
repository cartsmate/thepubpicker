function filter_by_feature(filtered_data) {
    console.log('---- feature: ' + filtered_data.length)

//    for (i=0; i<model_formats['icon_list'].length; i++) {
    for (const [key, value] of Object.entries(review)) {
        //console.log('feature: ' + value.name)
        if (value.filter == 'yes') {
//            if (document.getElementById( + "_filter").checked) {
            if (document.getElementById(value.name + "_filter").checked) {
                var filtered_data = filtered_data.filter(function(pub) {
    //                return (pub[model_formats['icon_list'][i]] == '1' || pub[model_formats['icon_list'][i]] == true)
                    return (pub[value.name] == '1' || pub[value.name] == true)
                    })
            } else {
                var filtered_data = filtered_data
    //            var filtered_data = filtered_data.filter(function(pub) {
    //                return (pub[model_formats['icon_list'][i]] == true || pub[model_formats['icon_list'][i]] == '1' || pub[model_formats['icon_list'][i]] == false || pub[model_formats['icon_list'][i]] == '0' || pub[model_formats['icon_list'][i]] == '')
    //                });
            }
        }

    }
    return filtered_data
}
