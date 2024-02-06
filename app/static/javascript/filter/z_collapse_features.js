function collapse_features() {
    var coll = document.getElementsByClassName("collapsible");
    var i;
    for (i=0; i < coll.length; i++) {
        coll[i].addEventListener("click", function() {
            this.classList.toggle("active");
            var content = this.nextElementSibling;
            if (content.style.display === "none") {
                content.style.display = "flex";
            } else {
                content.style.display = "none"
            }
        })
    }
}
