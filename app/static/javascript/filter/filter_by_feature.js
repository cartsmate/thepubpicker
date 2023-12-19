function filter_by_feature(filtered_data) {
    console.log('FILTER BY FEATURE')
    console.log('received data')
    console.log(filtered_data)
    for (i=0; i<model_formats['icon_list'].length; i++) {
        console.log(model_formats['icon_list'][i])
        if (document.getElementById(model_formats['icon_list'][i] + "_filter").checked) {
            var filtered_data = filtered_data.filter(function(pub) {
                return pub[model_formats['icon_list'][i]] == 'true'
                })
        } else {
            var filtered_data = filtered_data.filter(function(pub) {
                return (pub[model_formats['icon_list'][i]] == 'true' || pub[model_formats['icon_list'][i]] == 'false' || pub[model_formats['icon_list'][i]] == '')
                });
        }
    }
    console.log('sent data')
    console.log(filtered_data)
    return filtered_data
}
