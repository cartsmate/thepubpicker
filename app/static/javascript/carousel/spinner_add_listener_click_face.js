function spinner_add_listener_click_face() {
    console.log('spinner_add_listener_click_face')
    for (const [key, value] of Object.entries(review)) {
        if (value.quick_filter) {
            var marker = value.name
            document.getElementById(value.name + "_carousel").addEventListener('click', (function (marker) {
                return function () {
                    if (document.getElementById(marker + '_carousel').style.opacity == '1') {
                        if (document.getElementById(marker + "_filter").checked == true){
                            update_carousel(marker, false)
//                            document.getElementById(marker + "_filter").checked = false;
//                            current_carousel = document.getElementById(marker + "_carousel")
//                            current_carousel.classList.remove('carousel_on')
//                            current_carousel.classList.add('carousel_off')

                        } else {
                            for (const [key, value] of Object.entries(review)) {
                                if (value.quick_filter) {
                                    update_carousel(value.name, false)
//                                    document.getElementById(value.name + "_filter").checked = false;
//                                    temp_carousel = document.getElementById(value.name + "_carousel")
//                                    temp_carousel.classList.remove('carousel_on')
//                                    temp_carousel.classList.add('carousel_off')
                                }
                            }
                            update_carousel(marker, true)
//                            document.getElementById(marker + "_filter").checked = true;
//                            current_carousel = document.getElementById(marker + "_carousel")
//                            current_carousel.classList.remove('carousel_off')
//                            current_carousel.classList.add('carousel_on')
                        }
                        center_map()
                    } else {
                        console.log('opacity=0')
                    }
                }
            })(marker))
        }
    }
}

function update_carousel(feature, status) {
    document.getElementById(feature + "_filter").checked = status;
    current_carousel = document.getElementById(feature + "_carousel")
    if (status) {
        current_carousel.classList.remove('carousel_off')
        current_carousel.classList.add('carousel_on')
    } else {
        current_carousel.classList.remove('carousel_on')
        current_carousel.classList.add('carousel_off')
    }

}
//document.getElementById(marker + "_filter").checked = false;
//current_carousel = document.getElementById(marker + "_carousel")
//current_carousel.classList.remove('carousel_on')
//current_carousel.classList.add('carousel_off')
//
//document.getElementById(value.name + "_filter").checked = false;
//temp_carousel = document.getElementById(value.name + "_carousel")
//temp_carousel.classList.remove('carousel_on')
//temp_carousel.classList.add('carousel_off')
//
//document.getElementById(marker + "_filter").checked = true;
//current_carousel = document.getElementById(marker + "_carousel")
//current_carousel.classList.remove('carousel_off')
//current_carousel.classList.add('carousel_on')