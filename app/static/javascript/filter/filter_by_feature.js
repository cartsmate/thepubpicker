function filter_by_feature(filtered_data) {
    console.log('---- feature: ' + filtered_data.length)

    for (i=0; i<model_formats['icon_list'].length; i++) {
        console.log('feature: ' + model_formats['icon_list'])
        if (document.getElementById(model_formats['icon_list'][i] + "_filter").checked) {
            var filtered_data = filtered_data.filter(function(pub) {
                return (pub[model_formats['icon_list'][i]] == '1' || pub[model_formats['icon_list'][i]] == true)
                })
        } else {
            var filtered_data = filtered_data
//            var filtered_data = filtered_data.filter(function(pub) {
//                return (pub[model_formats['icon_list'][i]] == true || pub[model_formats['icon_list'][i]] == '1' || pub[model_formats['icon_list'][i]] == false || pub[model_formats['icon_list'][i]] == '0' || pub[model_formats['icon_list'][i]] == '')
//                });
        }
    }
    return filtered_data
}
