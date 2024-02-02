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
    document.getElementById("search-input-navbar").style.width = "250px";
}

function hide_filters() {
    console.log('hide_filter')
    var counter = document.getElementById('active_filter_count').textContent
    if (counter > 0) {
        document.getElementById("collapsible_filters_sm").style.width = "95px";
        document.getElementById("search-input-navbar").style.width = "250px";
    } else {
        document.getElementById("collapsible_filters_sm").style.width = "60px";
        document.getElementById("search-input-navbar").style.width = "285px";
    }
    document.getElementById("overlay").style.display = "none";
    content_direction.style.display = "none"
    content_station.style.display = "none"
    content_feature.style.display = "none"
    content_diary.style.display = "none"
    parent_btn = document.getElementById('content_filters')
    parent_btn.style.display = "none";

}
