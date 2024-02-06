function toggle_diary() {
    var button_diary = document.getElementById('button_diary')
    var content_direction = document.getElementById('content_direction')
    var content_station = document.getElementById('content_station')
    var content_diary = document.getElementById('content_diary')
    var content_feature = document.getElementById('content_feature')
    var content_event = document.getElementById('content_event')

    button_diary.addEventListener("click", function() {
        if (content_diary.style.display === "none") {
            content_diary.style.display = "flex";
            content_direction.style.display = "none"
            content_station.style.display = "none"
            content_feature.style.display = "none"
            content_event.style.display = "none"
        } else {
            content_diary.style.display = "none"
        }
    })
}
