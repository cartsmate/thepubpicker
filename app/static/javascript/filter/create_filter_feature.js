function create_filter_feature(pub_filtered) {
    console.log('---- create_filter_feature: ' + pub_filtered.length)

    clear_filter('checks_feature')

    for (const [key, value] of Object.entries(review)) {
        if (value.menu_filter && !value.event_filter) {
            //console.log(key, value.quick_filter)

            var filtered_data = pub_filtered.filter(function(x) {
                return x[value.name] == '1'
            })

            record = document.createElement("div")
            record.className = 'row'
            checks_feature = document.getElementById("checks_feature")

            label = document.createElement("div")
            label.style.width = "230px"
            label.style.font = "8px"
            label.id = value.name + "_id"
            label.innerHTML = "<a style='font-size: 12px; padding: 0px; margin: 0px;'>" + value.alias2 + " (" + filtered_data.length + ") " + "</a>"
            record.appendChild(label)
            checks_feature.appendChild(record)

            input = document.createElement("input")
            input.type = "checkbox"
            //console.log('id: ' + value.name)
            input.id = value.name + "_filter"
            input.onclick = function() { on_click_feature() }
            if (filtered_data.length > 0) {
                label.style.display = "block"
            } else {
                label.style.display = "none"
            }
            if (filtered_data.length == pub_filtered.length) {
                input.checked = true
            }
            label.appendChild(input)

            if (value.quick_filter == 'yes') {
                if (filtered_data.length > 0) {
                    label.style.display = "block"
                    //console.log(value.name)
                    document.getElementById(value.name + '_carousel').style.opacity = '1.0'
                    document.getElementById(value.name + '_icon').style.opacity = '1.0'
                    document.getElementById(value.name + '_word').style.opacity = '1.0'
                } else {
                    label.style.display = "none"
                    //console.log(value.name)
                    document.getElementById(value.name + '_carousel').style.opacity = '0.25'
                    document.getElementById(value.name + '_icon').style.opacity = '0.25'
                    document.getElementById(value.name + '_word').style.opacity = '0.25'
                }
            }
        }
    }
}
