function populate_feature_collection(pub_filtered) {
    console.log('populate feature collection')
    console.log('pub_filtered')
    console.log(pub_filtered.length)
    document.getElementById('button_feat').innerHTML = '<a>by feature (' + pub_filtered.length + ')</a>'
    filter_clear('checks_feature')
    for (i=0; i<model_formats['icon_list'].length; i++) {
//        console.log(pub_filtered)
//        console.log(model_formats['icon_list'][i])
        var filtered_data = pub_filtered.filter(function(x) {
            return x[model_formats['icon_list'][i]] == 'true'
        })
        record = document.createElement("div")
        record.className = 'row'
        checks_feature = document.getElementById("checks_feature")
        checks_feature.appendChild(record)

        label = document.createElement("div")
        label.style.width = "200px"
        label.style.font = "8px"
        label.id = model_formats['icon_list'][i] + "_id"
        label.innerHTML = "<a style='font-size: 12px; padding: 0px; margin: 0px;'>" + model_formats['icon_list'][i] + " (" + filtered_data.length + ")" + "</a>"
        record.appendChild(label)

        input = document.createElement("input")
        input.type = "checkbox"
        input.id = model_formats['icon_list'][i] + "_filter"
        input.onclick = function() { filter_by_feature_menu() }
        if (filtered_data.length > 0) {
            label.style.display = "block"
        } else {
            label.style.display = "none"
        }
        if (filtered_data.length == pub_filtered.length) {
            input.checked = true
        }
        label.appendChild(input)

    }

}

//functionion f_b_d(xx) {
//    console.log('inside f_b_d')
//    console.log('i got it right: ' + xx)
//    }

/*
function eventFunc() {
    page_layout('home')
    data = filter_all_data(all_data)
    //populate_direction(data)
    //populate_station(data)
    //populate_feature(data)
    table_setup(data)

    }
*/
