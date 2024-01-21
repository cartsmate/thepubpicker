function toggle_overlay() {
    collapse_section("collapsible_filters")
}
function on() {
    console.log('ON')
    document.getElementById("overlay").style.display = "block";
}

function off() {
    console.log('OFF')
    document.getElementById("overlay").style.display = "none";
    content_direction.style.display = "none"
    content_station.style.display = "none"
    content_feature.style.display = "none"
    content_diary.style.display = "none"
    parent_btn = document.getElementById('content_filters')
    parent_btn.style.display = "none";
}
