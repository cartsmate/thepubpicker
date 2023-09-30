function populate_station(data) {
    console.log('POPULATE_STATION')
    console.log('received data')
    console.log(data.length)
    var select= document.getElementById("station");
    var option = document.createElement("option");
    filter_clear('checks_station')
    for (i=0; i<stations_directions_list.length; i++) {
        var filtered_data = data.filter(function(pub) {
            return pub.station_identity == stations_directions_list[i][0]
        })
        if (filtered_data.length > -1) {
            record = document.createElement("div")
            record.className = 'row'
            checks_area = document.getElementById('checks_station')
            checks_area.appendChild(record)

            label = document.createElement("div")
            label.style.width = "150px"
            label.innerHTML = stations_directions_list[i][1] + "( " + filtered_data.length + " )"
            record.appendChild(label)

            input = document.createElement("input")
            input.type = "checkbox"
            input.id = stations_directions_list[i][0]
            //input.checked = true
            input.onclick = function() { eventFunc() }
            //input.onclick = "filter_direction_changed()"
            record.appendChild(input)
        }
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