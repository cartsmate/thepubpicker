function populate_events(show_events) {
    console.log('POPULATE EVENTS')
    console.log(show_events)
    days = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday']
    for (i=0; i<days.length; i++) {
        console.log(days[i])
        var dayRecord = show_events.filter(function (el) {
            return el.event_day == days[i];
        });
        if (dayRecord.length > 0) {
            document.getElementById(days[i]).value = dayRecord[0]['event_identity']
            console.log(dayRecord)
            for (const [key, value] of Object.entries(event)) {
                console.log("days[i] + '_' + value.name")
                console.log(days[i] + "_" + value.name)
                console.log(dayRecord[0][value.name])
                inbox_item = document.getElementById(days[i] + "_" + value.name)
                inbox_item.value = dayRecord[0][value.name]
            }
        }

    }
}
