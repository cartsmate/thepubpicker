function filter_by_diary(filtered_data) {
    //console.log('---- diary-in: ' + filtered_data.length)

    for (const [key, value] of Object.entries(review)) {
        if (document.getElementById('monday_filter').checked) {
            var filtered_data = filtered_data.filter(function(pub) {
                return (pub['event_day'] == 'Mon')
            })
        } else if (document.getElementById('tuesday_filter').checked) {
            var filtered_data = filtered_data.filter(function(pub) {
                return (pub['event_day'] == 'Tue')
            })
        } else if (document.getElementById('wednesday_filter').checked) {
            var filtered_data = filtered_data.filter(function(pub) {
                return (pub['event_day'] == 'Wed')
            })
        } else if (document.getElementById('thursday_filter').checked) {
            var filtered_data = filtered_data.filter(function(pub) {
                return (pub['event_day'] == 'Thu')
            })
        } else if (document.getElementById('friday_filter').checked) {
            var filtered_data = filtered_data.filter(function(pub) {
                return (pub['event_day'] == 'Fri')
            })
        } else if (document.getElementById('saturday_filter').checked) {
            var filtered_data = filtered_data.filter(function(pub) {
                return (pub['event_day'] == 'Sat')
            })
        } else if (document.getElementById('sunday_filter').checked) {
            var filtered_data = filtered_data.filter(function(pub) {
                return (pub['event_day'] == 'Sun')
            })
        } else {
            var filtered_data = filtered_data
        }
    }
    console.log('---- diary-out: ' + filtered_data.length)
    return filtered_data
}
