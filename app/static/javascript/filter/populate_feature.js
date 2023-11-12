function populate_feature(data) {
    console.log('POPULATE_FEATURE')
    console.log('received data')
    console.log(data.length)
    filter_clear('checks_feature')
    for (i=0; i<total_list_obj['icon_list'].length; i++) {
        var filtered_data = data.filter(function(pub) {
            return pub[total_list_obj['icon_list'][i]] == 'true'
        })

        record = document.createElement("div")
        record.className = 'row'
        checks_feature = document.getElementById("checks_feature")
        checks_feature.appendChild(record)

        label = document.createElement("div")
        label.style.width = "200px"
        label.id = total_list_obj['icon_list'][i] + "_id"
        label.innerHTML = total_list_obj['icon_list'][i] + " (" + filtered_data.length + ")"
        record.appendChild(label)

        input = document.createElement("input")
        input.type = "checkbox"
        input.id = total_list_obj['icon_list'][i] + "_filter"
        input.onclick = function() { on_click() }
        label.appendChild(input)

    }

}

function f_b_d(xx) {
    console.log('inside f_b_d')
    console.log('i got it right: ' + xx)
    }

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
