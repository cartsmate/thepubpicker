
function set_feature_icon_colour(check_item, theme) {
    console.log('set feature icon colour')
    var checkBox = document.getElementById(check_item + "_check");
    var image = document.getElementById(check_item + "_img");
    var caption = document.getElementById(check_item + "_caption");
    var checkCol = document.getElementById(check_item + "_col");
    var checkFace = document.getElementById(check_item + "_face");
    var checkCarousel = document.getElementById(check_item + "_carousel");
    if (checkBox.checked == true) {
        console.log('checkbox is true')
        checkCol.style.opacity = "1.0"
        checkCarousel.classList.add("carousel_on")
        //caption.style.opacity = "1.0"
        //caption.style.color = "white"
        //checkCol.style.background = "coral"
        //checkFace.style.background = "coral"
        //checkFace.style.background = theme
        //checkCol.style.border = "thin solid coral";
        checkBox.value = true
    } else {
        console.log('checkbox is false')
        checkCol.style.opacity = "0.5"
        checkCarousel.classList.add("carousel_off")
        //caption.style.opacity = "0.5"
        //caption.style.color = "black"
        //checkCol.style.background = "white"
        //checkFace.style.background = "white"
        //checkCol.style.border = "thin solid coral";
        //checkFace.style.border = "thin solid coral";
        //checkFace.style.border = "thin solid #808000";
        checkBox.value = false
    }
}
