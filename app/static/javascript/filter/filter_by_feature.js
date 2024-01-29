function filter_by_feature(filtered_data) {
    console.log('---- feature-in: ' + filtered_data.length)

    for (const [key, value] of Object.entries(review)) {
        if (value.menu_filter == 'yes' & value.event_filter == 'no') {
            //console.log('feature: ' + value.name)
            //console.log(document.getElementById(value.name + "_filter").checked)
            if (document.getElementById(value.name + "_filter").checked) {
                //console.log('filter checked')
                var filtered_data = filtered_data.filter(function(pub) {
                    return (pub[value.name] == '1' || pub[value.name] == true)
                    })
            } else {
                //console.log('filter UN-checked')
                var filtered_data = filtered_data
            }
        }

    }
    console.log('---- feature-out: ' + filtered_data.length)
    return filtered_data
}
