function set_feature_icon_colour(check_item) {

    console.log('set feature icon colour')
    console.log(check_item)

    var checkBox = document.getElementById(check_item);
    var carousel = document.getElementById(check_item + "_carousel");

    var checkBox_nofeature = document.getElementById("nofeature");
    var carousel_nofeature = document.getElementById("nofeature_carousel");

    if (checkBox.checked == true) {
        carousel.classList.remove("carousel_off")
        carousel.classList.add("carousel_on")
        if (check_item != 'nofeature') {
            checkBox_nofeature.checked = false
            carousel_nofeature.classList.remove("carousel_on")
            carousel_nofeature.classList.add("carousel_off")
        }
    } else {
        carousel.classList.remove("carousel_on")
        carousel.classList.add("carousel_off")
    }

    var ticks = 0;

    for (const [key, value] of Object.entries(review)) {
        if (value.menu_filter) {
            if (document.getElementById(value.name).checked == true) {
                console.log(value.name)
                ticks++
                /*
                break;
                */
            }
        }
    }

    if (ticks == 0) {
        checkBox_nofeature.checked == true;
        carousel_nofeature.classList.remove("carousel_off")
        carousel_nofeature.classList.add("carousel_on")
    }

}
