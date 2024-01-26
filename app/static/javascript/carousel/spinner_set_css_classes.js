function spinner_set_css_classes(number_of_review_attributes) {
    console.log('spinner_set_css_classes: ' + number_of_review_attributes)
    carousel_position = 0
    //console.log('set spinner classes for: ' + number_of_review_attributes + " attributes")
    //icon_list = model_formats['icon_list'].sort()
    //number_of_review_attributes = number_of_review_attributes
    var degree_increment = 0
    var degree_segments = 360 / number_of_review_attributes
    //console.log('set spinner classes for: ' + number_of_review_attributes + " attributes at " + degree_segments + " each")
//    for (i=0; i<icon_list.length; i++) {
    for (const [key, value] of Object.entries(review)) {
        if (value.quick_filter == 'yes') {
//        if (icon_list[i] != 'nofeature') {
//            div_x = document.getElementById(icon_list[i] + "_carousel")
            div_x = document.getElementById(value.name + "_carousel")
            var calc_deg = (degree_segments * degree_increment).toString();
            //console.log(icon_list[i] + ": " + calc_deg)
            div_x.style.transform = "rotateY(" + calc_deg + "deg) translateZ(var(--translateZ))";

            var quick_filter_name = value.name
            var quick_filter_degree = degree_increment
            carousel_order.push({quick_filter_name, quick_filter_degree})
//            div_x.style.width = (360 *2 / (number_of_review_attributes - 1)) + "px"
//            document.getElementById('the_carousel').style.width = (360 *2 / (number_of_review_attributes - 1)) + "px"
            var car_width = "80px"
            div_x.style.width = car_width
            document.getElementById('the_carousel').style.width = car_width
            document.getElementById('test_carousel').style.width = car_width
            degree_increment++
        }
    }
    console.log('carousel_order')
    console.log(carousel_order)

}
