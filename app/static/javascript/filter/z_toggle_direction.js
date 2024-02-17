function toggle_filters() {

    var button_direction = document.getElementById('button_direction')
    var button_station = document.getElementById('button_station')
    var button_feature = document.getElementById('button_feature')
    var button_event = document.getElementById('button_event')

    var content_direction = document.getElementById('content_direction')
    var content_station = document.getElementById('content_station')
    var content_feature = document.getElementById('content_feature')
    var content_diary = document.getElementById('content_diary')
    var content_event = document.getElementById('content_event')



function toggle_direction() {
//    var button_direction = document.getElementById('button_direction')
//    var content_direction = document.getElementById('content_direction')
//    var content_station = document.getElementById('content_station')
//    var content_diary = document.getElementById('content_diary')
//    var content_feature = document.getElementById('content_feature')
//    var content_event = document.getElementById('content_event')

    button_direction.addEventListener("click", function() {
        if (content_direction.style.display === "none") {
            content_direction.style.display = "flex";
            content_station.style.display = "none"
            content_diary.style.display = "none"
            content_feature.style.display = "none"
            content_event.style.display = "none"
        } else {
            content_direction.style.display = "none"
        }
    })
}
function toggle_station() {
    var button_station = document.getElementById('button_station')
//    var content_direction = document.getElementById('content_direction')
//    var content_station = document.getElementById('content_station')
//    var content_diary = document.getElementById('content_diary')
//    var content_feature = document.getElementById('content_feature')
//    var content_event = document.getElementById('content_event')

    button_station.addEventListener("click", function() {
        if (content_station.style.display === "none")
            {
                content_station.style.display = "flex";
                content_direction.style.display = "none"
                content_feature.style.display = "none"
                content_diary.style.display = "none"
                content_event.style.display = "none"
            } else {
                content_station.style.display = "none"
            }
    });
}
function toggle_features() {
    var button_feature = document.getElementById('button_feature')
//    var content_direction = document.getElementById('content_direction')
//    var content_station = document.getElementById('content_station')
//    var content_diary = document.getElementById('content_diary')
//    var content_feature = document.getElementById('content_feature')
//    var content_event = document.getElementById('content_event')

    button_feature.addEventListener("click", function() {
        if (content_feature.style.display === "none") {
            content_feature.style.display = "flex";
            content_direction.style.display = "none"
            content_station.style.display = "none"
            content_diary.style.display = "none"
            content_event.style.display = "none"
        } else {
            content_feature.style.display = "none"
        }
    })
}
function toggle_events() {
//    var button_event = document.getElementById('button_event')
//    var content_direction = document.getElementById('content_direction')
//    var content_station = document.getElementById('content_station')
//    var content_diary = document.getElementById('content_diary')
//    var content_feature = document.getElementById('content_feature')
//    var content_event = document.getElementById('content_event')

    button_event.addEventListener("click", function() {
        if (content_event.style.display === "none") {
            content_event.style.display = "flex";
            content_direction.style.display = "none"
            content_station.style.display = "none"
            content_feature.style.display = "none"
            content_diary.style.display = "none"
        } else {
            content_event.style.display = "none"
        }
    })
}
