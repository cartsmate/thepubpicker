function filter_by_diary(filtered_data) {
    //console.log('---- diary-in: ' + filtered_data.length)

    for (const [key, value] of Object.entries(review)) {
        if (document.getElementById('monday_filter').checked) {
            var filtered_data = filtered_data.filter(function(pub) {
                return (pub['event_day'] == 'monday')
            })
        } else if (document.getElementById('tuesday_filter').checked) {
            var filtered_data = filtered_data.filter(function(pub) {
                return (pub['event_day'] == 'tuesday')
            })
        } else if (document.getElementById('wednesday_filter').checked) {
            var filtered_data = filtered_data.filter(function(pub) {
                return (pub['event_day'] == 'wednesday')
            })
        } else if (document.getElementById('thursday_filter').checked) {
            var filtered_data = filtered_data.filter(function(pub) {
                return (pub['event_day'] == 'thursday')
            })
        } else if (document.getElementById('friday_filter').checked) {
            var filtered_data = filtered_data.filter(function(pub) {
                return (pub['event_day'] == 'friday')
            })
        } else if (document.getElementById('saturday_filter').checked) {
            var filtered_data = filtered_data.filter(function(pub) {
                return (pub['event_day'] == 'saturday')
            })
        } else if (document.getElementById('sunday_filter').checked) {
            var filtered_data = filtered_data.filter(function(pub) {
                return (pub['event_day'] == 'sunday')
            })
        } else {
            var filtered_data = filtered_data
        }
    }
    console.log('---- diary-out: ' + filtered_data.length)
    return filtered_data
}
