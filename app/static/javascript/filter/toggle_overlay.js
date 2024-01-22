function toggle_overlay() {
    var coll = document.getElementsByClassName("collapsible_filters");
    var i;
    for (i=0; i < coll.length; i++) {
        coll[i].addEventListener("click", function() {
            this.classList.toggle("active");
            var content = this.nextElementSibling;
            if (content.style.display === "flex") {
                content.style.display = "none";
            } else {
                content.style.display = "flex"
            }
        })
    }
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
