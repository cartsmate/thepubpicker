function spinner_set_css_classes(number_of_review_attributes) {
    //console.log('set spinner classes for: ' + number_of_review_attributes + " attributes")
    icon_list = model_formats['icon_list'].sort()
    var degree_increment = 0
    var degree_segments = 360 / number_of_review_attributes
    console.log('set spinner classes for: ' + number_of_review_attributes + " attributes at " + degree_segments + " each")
    for (i=0; i<icon_list.length; i++) {
        if (icon_list[i] != 'nofeature') {
            div_x = document.getElementById(icon_list[i] + "_carousel")
            var calc_deg = (degree_segments * degree_increment).toString();
            //console.log(icon_list[i] + ": " + calc_deg)
            div_x.style.transform = "rotateY(" + calc_deg + "deg) translateZ(var(--translateZ))";
            div_x.style.width = (360 *2 / (number_of_review_attributes - 1)) + "px"
            document.getElementById('the_carousel').style.width = (360 *2 / (number_of_review_attributes - 1)) + "px"
            degree_increment++
        }
    }

}
