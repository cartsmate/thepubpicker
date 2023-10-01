function populate_feature(data) {
    console.log('POPULATE_FEATURE')
    console.log('received data')
    console.log(data.length)


/*
    var select= document.getElementById("feature");
    var option = document.createElement("option");
    for (i=0; i<total_list_obj['icon_list'].length; i++) {


    var review_list = ['brunch', 'dart', 'entertain', 'favourite', 'garden', 'history', 'late', 'music', 'pool', 'quiz', 'roast', 'sport']
    for (let i = 0; i < review_list.length; i++) {
        if (document.getElementById(total_list_obj['icon_list'][i]).checked) {
            var filtered_data = data.filter(function(pub) {
                return pub[total_list_obj['icon_list'][i]] == 'true'

                })
        } else {
            var filtered_data = data.filter(function(pub) {
                return (pub[total_list_obj['icon_list'][i]] == 'true' || pub[total_list_obj['icon_list'][i]] == 'false' || pub[total_list_obj['icon_list'][i]] == '')
                });

            console.log('checked at: ' + total_list_obj['icon_list'][i])
            ticked_list.push(total_list_obj['icon_list'][i])
            ticked_data = ticked_data.concat(filtered_data)
        }
        var count = filtered_data
*/
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
        label.style.width = "150px"
        label.id = total_list_obj['icon_list'][i] + "_id"
        label.innerHTML = total_list_obj['icon_list'][i] + "( " + filtered_data.length + " )"
        record.appendChild(label)

        input = document.createElement("input")
        input.type = "checkbox"
        input.id = total_list_obj['icon_list'][i]
        input.onclick = function() { on_click() }
        record.appendChild(input)

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
