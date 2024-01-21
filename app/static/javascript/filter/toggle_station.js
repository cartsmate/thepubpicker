function toggle_station() {
    var button_station = document.getElementById('button_station')
    var content_direction = document.getElementById('content_direction')
    var content_station = document.getElementById('content_station')
    var content_diary = document.getElementById('content_diary')
    var content_feature = document.getElementById('content_feature')

    button_station.addEventListener("click", function() {
        if (content_station.style.display === "none")
            {
                content_station.style.display = "flex";
                content_direction.style.display = "none"
                content_feature.style.display = "none"
                content_diary.style.display = "none"
            } else {
                content_station.style.display = "none"
            }
    });
}
