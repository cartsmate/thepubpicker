function filter_by_diary(filtered_data) {
    console.log('---- diary-in: ' + filtered_data.length)

    for (const [key, value] of Object.entries(review)) {
        if (document.getElementById('monday_filter').checked) {
            var filtered_data = filtered_data.filter(function(pub) {
                return (pub['event_day'] == 'monday' && pub['event_type'] != 'hours')
            })
        } else if (document.getElementById('tuesday_filter').checked) {
            var filtered_data = filtered_data.filter(function(pub) {
                return (pub['event_day'] == 'tuesday' && pub['event_type'] != 'hours')
            })
        } else if (document.getElementById('wednesday_filter').checked) {
            var filtered_data = filtered_data.filter(function(pub) {
                return (pub['event_day'] == 'wednesday' && pub['event_type'] != 'hours')
            })
        } else if (document.getElementById('thursday_filter').checked) {
            var filtered_data = filtered_data.filter(function(pub) {
                return (pub['event_day'] == 'thursday' && pub['event_type'] != 'hours')
            })
        } else if (document.getElementById('friday_filter').checked) {
            var filtered_data = filtered_data.filter(function(pub) {
                return (pub['event_day'] == 'friday' && pub['event_type'] != 'hours')
            })
        } else if (document.getElementById('saturday_filter').checked) {
            var filtered_data = filtered_data.filter(function(pub) {
                return (pub['event_day'] == 'saturday' && pub['event_type'] != 'hours')
            })
        } else if (document.getElementById('sunday_filter').checked) {
            var filtered_data = filtered_data.filter(function(pub) {
                return (pub['event_day'] == 'sunday' && pub['event_type'] != 'hours')
            })
        } else {
            var filtered_data = filtered_data
        }
    }
    console.log('---- diary OUT: ' + filtered_data.length)
    return filtered_data
}
