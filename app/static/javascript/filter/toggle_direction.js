function toggle_direction() {
    var button_direction = document.getElementById('button_direction')
    var content_direction = document.getElementById('content_direction')
    var content_station = document.getElementById('content_station')
    var content_diary = document.getElementById('content_diary')
    var content_feature = document.getElementById('content_feature')
    var content_event = document.getElementById('content_event')

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
