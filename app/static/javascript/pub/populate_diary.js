function populate_diary(show_pub){
    console.log('POPULATE_DIARY')
    for (const [key, value] of Object.entries(diary)) {
//        console.log(value.name)
        inbox_item = document.getElementById(value.name)
        inbox_item.value = show_pub[0][value.name]
    }

    /*
    for (var [key, value] of Object.entries(diary)) {
        for (i=0; i<events.length; i++) {
            //console.log(events[i]['event_day'])
//            var whole-name = value.name
//            var first_char = whole-name.charAt(0)
//            console.log(value.name.charAt(0).toUpperCase() + value.name.substring(1,3))
//            console.log(events[0]['event_day'])
//            if (value.name.charAt(0).toUpperCase() + value.name.substring(1,3) == events[i]['event_day']) {
            if (value.name == events[i]['event_day']) {
                console.log(value.name)
                console.log(events[i])
                document.getElementById(value.name + "_event_identity").value = events[i]['event_identity']
                document.getElementById(value.name + "_event_detail").value = events[i]['event_detail']
                document.getElementById(value.name + "_event_type").value = review[events[i]['event_type']].name
                break;
            }
//            for (var [key, value] of Object.entries(event)) {
//                console.log(events[i][value.name])
//            }
        }
    }
    */
}