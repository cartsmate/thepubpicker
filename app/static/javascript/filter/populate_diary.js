function populate_diary(pub_filtered) {
    console.log('populate diary')
    console.log('data in: ' + pub_filtered.length)
//    console.log('pub count: ' + pub.length)

    document.getElementById('button_diary').innerHTML = '<a>by day (' + pub_filtered.length + ')</a>'
    var select= document.getElementById("diary");
    var option = document.createElement("option");
    filter_clear('checks_diary')
    diary_headers = ['monday','tuesday','wednesday','thursday','friday','saturday','sunday']
    for (i=0; i<diary_headers.length; i++) (function(i, pub_filtered){
        //console.log('filtered data inside loop')
        //console.log(directions_list[i][0])
        //console.log(pub)
//        console.log(directions_list[i])
        /*
        var filtered_data = pub_filtered.filter(function(x) {
            return x.direction_identity == directions_list[i][0]
        })
        */
        filtered_data = pub_filtered
        if (filtered_data.length > -1) {
            record = document.createElement("div")
            record.className = 'row'
            checks_direction = document.getElementById('checks_diary')
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

            label.id = diary_headers[i] + "_id"
            label.innerHTML = "<a style='font-size: 12px; padding: 0px; margin: 0px;'>" + diary_headers[i] + " (" + filtered_data.length + ")" + "</a>"
            col2.appendChild(label)

            input = document.createElement("input")
            input.type = "checkbox"
            input.id = diary_headers[i] + "_filter"
            input.onclick = function() { on_click_diary() }
            /*
            if (filtered_data.length > 0) {
                label.style.display = "block"
            } else {
                label.style.display = "none"
            }
            */
            label.appendChild(input)
        }
    })(i, pub_filtered)
}

function on_click_diary() {
    console.log('USER INPUT - on click diary')

    list_setup_diary(pub_filtered)
}
