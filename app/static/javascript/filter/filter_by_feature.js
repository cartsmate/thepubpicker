function filter_by_feature(filtered_data) {
    //console.log('---- feature-in: ' + filtered_data.length)

    for (const [key, value] of Object.entries(review)) {
        if (value.menu_filter & !value.event_filter) {
            if (document.getElementById(value.name + "_filter").checked) {
                var filtered_data = filtered_data.filter(function(pub) {
                    return (pub[value.name] == '1' || pub[value.name] == true)
                    })
            } else {
                var filtered_data = filtered_data
            }
        }
    }
    console.log('---- feature-out: ' + filtered_data.length)
    return filtered_data
}
