function populate_diary(show_pub){
    console.log('POPULATE_DIARY')
    console.log('review')
    console.log(review['quiz']['alias2'])
    console.log('show_pub[0]')
    console.log(show_pub[0])
    console.log('events')
    console.log(events)

    for (var [key, value] of Object.entries(diary)) {
        for (i=0; i<events.length; i++) {
            //console.log(events[i]['event_day'])
//            var whole-name = value.name
//            var first_char = whole-name.charAt(0)
//            console.log(value.name.charAt(0).toUpperCase() + value.name.substring(1,3))
//            console.log(events[0]['event_day'])
            if (value.name.charAt(0).toUpperCase() + value.name.substring(1,3) == events[i]['event_day']) {
                console.log('Diary entry: ' + value.name)
                console.log('Event: ' + events[i]['event_type'] + " @ " + events[i]['event_detail'])
                document.getElementById(value.name).value = review[events[i]['event_type']]['alias2'] + " - " + events[i]['event_detail']
                break;
            }
//            for (var [key, value] of Object.entries(event)) {
//                console.log(events[i][value.name])
//            }
        }
    }
//        document.getElementById(diary_list[i]).value = show_pub[0][diary_list[i]];
//    for (i=0; i<events.length; i++) {
//        console.log(events[i])
//
//    }



//        if (value.name == x.event_day){
//            document.getElementById(value.name).value = events[value.name];
//        }

}
/*
    //console.log(pub)
    for (i = 0; i < model_formats['fields_list'].length; i++) {
        //console.log('fields_list[i]')
        //console.log(fields_list[i])
        //console.log(check_list)
        if (model_formats['dropdown_list'].includes(model_formats['fields_list'][i])) {
            //console.log('dropdown')
            var dropdown_str = String(pub[0][model_formats['fields_list'][i]['0']]).toUpperCase() + String(pub[0][model_formats['fields_list'][i]]).substring(1)
            document.getElementById(model_formats['fields_list'][i]).value = dropdown_str
        } else if (model_formats['check_list'].includes(model_formats['fields_list'][i])) {
            //console.log('checklist')
            if (pub[0][model_formats['fields_list'][i]] == 'true') {
                //console.log('true')
                document.getElementById(model_formats['fields_list'][i]).checked = 'true';
                document.getElementById(model_formats['fields_list'][i]).style.hidden = "none";
                var feature_img = model_formats['fields_list'][i] + "_img"
                var feature_col = model_formats['fields_list'][i] + "_col"
                var feature_caption = model_formats['fields_list'][i] + "_caption"
                document.getElementById(feature_col).style.background = "#0275D8";
                document.getElementById(feature_caption).style.color = "white";
            } else {
                //console.log('false')
            }
        } else if (model_formats['star_list'].includes(model_formats['fields_list'][i])) {
            //populate_stars(model_formats['fields_list'][i], pub[0][model_formats['fields_list'][i]], 'populate')
        } else {
            document.getElementById(model_formats['fields_list'][i]).value = pub[0][model_formats['fields_list'][i]];
        }
    }
}
*/