//function populate_diary_event(show_pub, show_events) {
function populate_diary_event(show_events) {
    console.log('POPULATE EVENTS')
    console.log(show_events)
    console.log('review')
    console.log(review)
    for (const [key, value] of Object.entries(diary)) {
        for (i=0; i<show_events.length; i++) {
            if (show_events[i]['event_day'] == value.name) {
                console.log('day matched')
                for (const [e_key, e_value] of Object.entries(event)) {
                    console.log(e_value.name)
                    inbox_item = document.getElementById(value.name + "_" + e_value.name)
                    inbox_item.value = show_events[i][e_value.name]
                    available_record = true
                    break;
                }
            }
        }
        if (available_record == false) {
            console.log('UUID REQUIRED')
            let uuid = self.crypto.randomUUID();
            for (const [e_key, e_value] of Object.entries(event)) {
                inbox_item = document.getElementById(value.name + "_" + e_value.name)
                if (e_value == 'event_identity') {
                    var placeholder = uuid;
                } else {
                    var placeholder = ""
                }
                inbox_item.value = placeholder
            }
        }
    }
}
