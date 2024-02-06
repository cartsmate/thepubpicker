function collapse_section(class_name) {
    console.log('COLLAPSE_SECTION')
    //document.getElementById('content_a').style.display = "none"
    var coll = document.getElementsByClassName(class_name);
    var i;
    for (i=0; i < coll.length; i++) {
        coll[i].addEventListener("click", function() {
            //console.log('INSIDE COLLAPSE')
            this.classList.toggle("active");
            var content = this.nextElementSibling;
            if (content.style.display === "flex") {
                content.style.display = "none";
            } else {
                content.style.display = "flex"
                //collapse_section('collapsible_a')
                //document.getElementById('content_a').style.display = "none"
            }


        })

    }
}
