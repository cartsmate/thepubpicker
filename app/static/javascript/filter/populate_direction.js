function populate_direction(data) {
    console.log('POPULATE_DIRECTION')
    console.log('received data')
    console.log(data.length)
    var select= document.getElementById("direction");
    var option = document.createElement("option");
    filter_clear('checks_direction')
    for (i=0; i<directions_list.length; i++) (function(i, data){
        //console.log('filtered data inside loop')
        //console.log(filtered_data)
        //console.log(directions_list[i])
        var filtered_data = data.filter(function(pub) {
            return pub.direction_identity == directions_list[i][0]
        })
        if (filtered_data.length > -1) {
            record = document.createElement("div")
            record.className = 'row'
            checks_direction = document.getElementById('checks_direction')
            checks_direction.appendChild(record)

            label = document.createElement("div")
            label.style.width = "150px"
            label.innerHTML = directions_list[i][1] + "( " + filtered_data.length + " )"
            record.appendChild(label)

            input = document.createElement("input")
            input.type = "checkbox"
            input.id = directions_list[i][0]
            //input.checked = true
            //var xx = directions_list[i][1]
            input.onclick = function() { on_click_direction() }
            record.appendChild(input)
        }
    })(i, data)
}

function f_b_d(xx) {
    console.log('inside f_b_d')
    console.log('i got it right: ' + xx)
    }

function on_click_direction() {
    for (i=0; i<stations_directions_list.length; i++) {
        if ( document.getElementById(stations_directions_list[i][2]).checked) {
            document.getElementById(stations_directions_list[i][0]).style.display = 'block'
            document.getElementById(stations_directions_list[i][0] + "_id").style.display = 'block'
        } else {
            document.getElementById(stations_directions_list[i][0]).style.display = 'none'
            document.getElementById(stations_directions_list[i][0] + "_id").style.display = 'none'
        }
    }
    on_click()
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
