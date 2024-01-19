function populate_feature(pub_filtered, theme) {
    console.log('-- populate feature')
    //console.log('data in: ' + pub_filtered.length)
    filter_clear('checks_feature')
    for (i=0; i<model_formats['icon_list'].length; i++) {
        var filtered_data = pub_filtered.filter(function(x) {
            return x[model_formats['icon_list'][i]] == '1'
        })
        record = document.createElement("div")
        record.className = 'row'
        checks_feature = document.getElementById("checks_feature")

        label = document.createElement("div")
        label.style.width = "230px"
        label.style.font = "8px"
        label.id = model_formats['icon_list'][i] + "_id"
        label.innerHTML = "<a style='font-size: 12px; padding: 0px; margin: 0px;'>" + model_formats['icon_list'][i] + " (" + filtered_data.length + ")" + "</a>"
        record.appendChild(label)
        checks_feature.appendChild(record)

        input = document.createElement("input")
        input.type = "checkbox"
        input.id = model_formats['icon_list'][i] + "_filter"
        input.onclick = function() { on_click_feature(theme) }
        if (filtered_data.length > 0) {
            //console.log(model_formats['icon_list'][i] + ' >0')
            label.style.display = "block"
            if (model_formats['icon_list'][i] != 'nofeature') {
                document.getElementById(model_formats['icon_list'][i] + '_carousel').style.opacity = '1.0'
                document.getElementById(model_formats['icon_list'][i] + '_icon').style.opacity = '1.0'
                document.getElementById(model_formats['icon_list'][i] + '_word').style.opacity = '1.0'
            }
        } else {
            //console.log(model_formats['icon_list'][i] + ' <0')
            label.style.display = "none"
            if (model_formats['icon_list'][i] != 'nofeature') {
                document.getElementById(model_formats['icon_list'][i] + '_carousel').style.opacity = '0.5'
                document.getElementById(model_formats['icon_list'][i] + '_icon').style.opacity = '0.5'
                document.getElementById(model_formats['icon_list'][i] + '_word').style.opacity = '0.5'
            }
        }
        if (filtered_data.length == pub_filtered.length) {
            input.checked = true
        }
        label.appendChild(input)

    }
}
