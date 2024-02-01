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
function show_filters() {
    console.log('show_filters')
    document.getElementById("overlay").style.display = "block";
    document.getElementById("collapsible_filters_sm").style.width = "95px";
}

function hide_filters() {
    console.log('hide_filter')
    document.getElementById("collapsible_filters_sm").style.width = "60px";
    document.getElementById("overlay").style.display = "none";
    content_direction.style.display = "none"
    content_station.style.display = "none"
    content_feature.style.display = "none"
    content_diary.style.display = "none"
    parent_btn = document.getElementById('content_filters')
    parent_btn.style.display = "none";

}
