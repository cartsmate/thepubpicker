function toggle_filters() {

    var button_direction = document.getElementById('button_direction')
    var button_station = document.getElementById('button_station')
    var button_feature = document.getElementById('button_feature')
    var button_diary = document.getElementById('button_diary')
    var button_event = document.getElementById('button_event')
    var button_pub_identity = document.getElementById('button_pub_identity')
    var button_reset = document.getElementById('button_reset')

    var content_direction = document.getElementById('content_direction')
    var content_station = document.getElementById('content_station')
    var content_feature = document.getElementById('content_feature')
    var content_diary = document.getElementById('content_diary')
    var content_event = document.getElementById('content_event')
    var content_pub_identity = document.getElementById('content_pub_identity')

    button_direction.addEventListener("click", function() {
        if (content_direction.style.display === "none") {
            content_direction.style.display = "flex";
            content_station.style.display = "none"
            content_diary.style.display = "none"
            content_feature.style.display = "none"
            content_event.style.display = "none"
            content_pub_identity.style.display = "none"
        } else {
            content_direction.style.display = "none"
        }
    })

    button_station.addEventListener("click", function() {
        if (content_station.style.display === "none")
            {
                content_station.style.display = "flex";
                content_direction.style.display = "none"
                content_feature.style.display = "none"
                content_diary.style.display = "none"
                content_event.style.display = "none"
                content_pub_identity.style.display = "none"
            } else {
                content_station.style.display = "none"
            }
    });

    button_feature.addEventListener("click", function() {
        if (content_feature.style.display === "none") {
            content_feature.style.display = "flex";
            content_direction.style.display = "none"
            content_station.style.display = "none"
            content_diary.style.display = "none"
            content_event.style.display = "none"
            content_pub_identity.style.display = "none"
        } else {
            content_feature.style.display = "none"
        }
    })

    button_diary.addEventListener("click", function() {
        if (content_diary.style.display === "none") {
            content_diary.style.display = "flex";
            content_direction.style.display = "none"
            content_station.style.display = "none"
            content_feature.style.display = "none"
            content_event.style.display = "none"
            content_pub_identity.style.display = "none"
        } else {
            content_diary.style.display = "none"
        }
    })

    button_event.addEventListener("click", function() {
        if (content_event.style.display === "none") {
            content_event.style.display = "flex";
            content_direction.style.display = "none"
            content_station.style.display = "none"
            content_feature.style.display = "none"
            content_diary.style.display = "none"
            content_pub_identity.style.display = "none"
        } else {
            content_event.style.display = "none"
        }
    })

    button_pub_identity.addEventListener("click", function() {
        if (content_pub_identity.style.display === "none") {
            content_pub_identity.style.display = "flex";
            content_direction.style.display = "none"
            content_station.style.display = "none"
            content_feature.style.display = "none"
            content_diary.style.display = "none"
            content_event.style.display = "none"
        } else {
            content_pub_identity.style.display = "none"
        }
    })
    button_reset.addEventListener("click", function() {
        filter_reset()
        console.log('USER INPUT: reset click')
        create_filter_(pub_all)
        document.getElementById('template_map').style.display = 'none'
        document.getElementById('template_list').style.display = 'none'
        document.getElementById('template_header').style.display = 'none'
    })

}
