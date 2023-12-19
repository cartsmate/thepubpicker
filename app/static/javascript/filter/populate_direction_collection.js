function populate_direction_collection(pub_filtered) {
    console.log('populate direction collection')
//    console.log('pub_filtered data: ' + pub_filtered.length)
//    console.log('pub count: ' + pub.length)
    document.getElementById('button_direction').innerHTML = '<a>by area (' + pub_filtered.length + ')</a>'
    var select= document.getElementById("direction");
    var option = document.createElement("option");
    filter_clear('checks_direction')
    for (i=0; i<directions_list.length; i++) (function(i, pub_filtered){
        //console.log('filtered data inside loop')
        //console.log(directions_list[i][0])
        //console.log(pub)
//        console.log(directions_list[i])
        var filtered_data = pub_filtered.filter(function(x) {
            return x.direction_identity == directions_list[i][0]
        })
        record = document.createElement("div")
        record.className = 'row'
        checks_direction = document.getElementById('checks_direction')
        checks_direction.appendChild(record)

        col1 = document.createElement("div")
        //col1.ClassName("col-1")
        record.appendChild(col1)

        col2 = document.createElement("div")
        //col2.ClassName("col-11")
        record.appendChild(col2)

        label = document.createElement("div")
        label.style.width = "200px"
        label.style.padding = "0px"
        label.style.margin = "0px"
        //label.style.font-size = "20px"
        //label.classList.add("mystyle");

        label.id = directions_list[i][0] + "_id"
        label.innerHTML = "<a style='font-size: 12px; padding: 0px; margin: 0px;'>" + directions_list[i][1] + " (" + filtered_data.length + ")" + "</a>"
        col2.appendChild(label)

        input = document.createElement("input")
        input.type = "checkbox"
        input.id = directions_list[i][0] + "_filter"
        input.onclick = function() { on_click_direction() }
        if (filtered_data.length > 0) {
            label.style.display = "block"
            input.checked = true
        } else {
            label.style.display = "none"
        }
        label.appendChild(input)
    })(i, pub_filtered)
}

//function f_b_d(xx) {
//    console.log('inside f_b_d')
//    console.log('i got it right: ' + xx)
//    }

function on_click_direction() {
    console.log('USER INPUT - on click direction')

    pub_filtered = filter_all_data(pub)
    console.log(pub_filtered.length)
    list_setup(pub_filtered)

    populate_station(pub_filtered)
    populate_feature(pub_filtered)
    populate_review(pub_filtered)
    //filter_direction_change()
    populate_header(pub_filtered.length)
    //document.getElementById('pub_length').innerHTML = "<a>" + "Number of pubs: " + pub_filtered.length + "</a>"
    /*
    for (i=0; i<directions_list.length; i++) {
        console.log('on click')
        console.log(directions_list[i][0])
        //console.log(document.getElementById(stations_directions_list[i][2]))
        if (document.getElementById(directions_list[i][0] + "_filter").checked) {
            document.getElementById(directions_list[i][0] + "_filter").style.display = 'block'
            document.getElementById(directions_list[i][0] + "_id").style.display = 'block'
        } else {
            document.getElementById(directions_list[i][0] + "_filter").style.display = 'none'
            document.getElementById(directions_list[i][0] + "_id").style.display = 'none'
        }
    }
    */
    //on_click()
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
