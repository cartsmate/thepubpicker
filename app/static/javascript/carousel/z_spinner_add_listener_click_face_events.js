function spinner_add_listener_click_face_events() {
    console.log('spinner add listener FACE CLICK added')
    for (const [key, value] of Object.entries(review)) {
        if (value.event_filter == 'yes') {

            var marker = value.name
            //console.log('spinner click listener added for : ' + marker)
            document.getElementById(value.name + "_carousel").addEventListener('click', (function (marker) {
                return function () {
                    console.log('carousel spinner listener triggered')

                    if (document.getElementById(marker + '_carousel').style.opacity == '1') {
                        console.log(marker)

//                        if (document.getElementById(marker + "_filter").checked == true){
//                            console.log('already TRUE - blank out')
//                            document.getElementById(marker + "_filter").checked = false;
//                            document.getElementById(marker + "_word").style.color = "black"
//                            current_carousel = document.getElementById(marker + "_carousel")
//                            current_carousel.classList.remove('carousel_on')
//                            current_carousel.classList.add('carousel_off')
//
//                        } else {
//                            console.log(marker + ': was blank - make HIGHLIGHT')
//                            for (const [key, value] of Object.entries(review)) {
//                                if (value.event_filter == 'yes') {
//                                    document.getElementById(value.name + "_filter").checked = false;
//                                    document.getElementById(value.name + "_word").style.color = "black"
//                                    temp_carousel = document.getElementById(value.name + "_carousel")
//                                    temp_carousel.classList.remove('carousel_on')
//                                    temp_carousel.classList.add('carousel_off')
//                                }
//                            }
//                            document.getElementById(marker + "_filter").checked = true;
//                            document.getElementById(marker + "_word").style.color = "white"
//                            current_carousel = document.getElementById(marker + "_carousel")
//                            current_carousel.classList.remove('carousel_off')
//                            current_carousel.classList.add('carousel_on')
//                        }
                        update_filters_events()
                        center_map_events()
                    }
                }
            })(marker))
        }
    }
}
