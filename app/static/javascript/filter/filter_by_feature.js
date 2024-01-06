function filter_by_feature(filtered_data) {
    console.log('FILTER BY FEATURE')
    console.log('data in: ' + filtered_data.length)
    console.log(filtered_data)
    for (i=0; i<model_formats['icon_list'].length; i++) {
        if (model_formats['icon_list'][i] != 'nofeature') {
            console.log(model_formats['icon_list'][i])
            if (document.getElementById(model_formats['icon_list'][i] + "_filter").checked) {
                console.log('checked')
                console.log(pub)
                console.log(model_formats['icon_list'][i])
                var filtered_data = filtered_data.filter(function(pub) {
                    return (pub[model_formats['icon_list'][i]] == '1' || pub[model_formats['icon_list'][i]] == true)
                    })
            } else {
                console.log('UNchecked')
                var filtered_data = filtered_data.filter(function(pub) {
                    return (pub[model_formats['icon_list'][i]] == true || pub[model_formats['icon_list'][i]] == '1' || pub[model_formats['icon_list'][i]] == false || pub[model_formats['icon_list'][i]] == '0' || pub[model_formats['icon_list'][i]] == '')
                    });
            }
            console.log(filtered_data.length)
        }
    }
    console.log('data out: ' + filtered_data.length)
    return filtered_data

}
