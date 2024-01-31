function filter_by_event(filtered_data) {
    console.log('---- event-in: ' + filtered_data.length)

    for (const [key, value] of Object.entries(review)) {
        if (value.event_filter) {
            console.log('event: ' + value.name)
            //console.log(document.getElementById(value.name + "_filter").checked)
            if (document.getElementById(value.name + "_filter").checked) {
                //console.log('filter checked')
                var filtered_data = filtered_data.filter(function(pub) {
                    return (pub['event_type'] == value.name)
                    })
            } else {
                //console.log('filter UN-checked')
                var filtered_data = filtered_data
            }
        }

    }
    console.log('---- event-out: ' + filtered_data.length)
    return filtered_data
}
