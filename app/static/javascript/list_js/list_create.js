function list_create(pub_filtered) {
    console.log('LIST_CREATE')

    // creates a <table> element and a <tbody> element
    var tbl = document.createElement("table");
    tbl.setAttribute("id", "pub_list");
    document.getElementById('pub_table').visible = false
    tbl.style.cssText = 'font-size:12px;'
    tbl.className = "table table-striped";
    tbl.width = "310px"

    var tblHead = document.createElement("thead");
    var tblBody = document.createElement("tbody");

    pub_attributes = []
    a=0
    for (var key in pub[0]) {
        pub_attributes.push(key)
        a++
    }

    console.log('alias')
    console.log(alias)
//    console.log({{alias['pub_identity']}})
    var row = document.createElement("tr");
    b=0
    for (let k = 0; k < pub_attributes.length; k++) {
        const heading = document.createElement("td");

        const headingText = document.createTextNode(alias[pub_attributes[k]])
        heading.appendChild(headingText)
        row.appendChild(heading);
        b++
        }
    tblHead.appendChild(row);
    tbl.appendChild(tblHead);

  // creating all cells
    for (let i = 0; i < pub_filtered.length; i++) {
        var row = document.createElement("tr");
        for (let j = 0; j < pub_attributes.length; j++) {
            const cell = document.createElement("td");

            const href = document.createElement("a");
            if (pub_attributes[j] == 'station_name') {
                href.setAttribute("href", "#");
                //href.setAttribute("onclick", "redirect_station('" + pub_filtered[i]['station_identity'] + "', 'collection')");
                href.setAttribute("onclick", "update_station('" + pub_filtered[i]['station_identity'] + "')");
                text_ref = pub_filtered[i][pub_attributes[j]].toString().substring(0,11)
                const cellText = document.createTextNode(text_ref);
                href.appendChild(cellText);
                cell.appendChild(href)
                row.appendChild(cell);
                } else if (pub_attributes[j] == 'detail_name') {
                    href.setAttribute("href", "#");
                    href.setAttribute("onclick", "redirect_pub_search('" + pub_filtered[i]['pub_identity'] + "')");

//                    console.log('LOOK HERE !!!')
//                    console.log(pub_filtered)
//                    console.log(pub_attributes[j])
//                    console.log(pub_filtered[i][pub_attributes[j]])
//                    console.log(pub_filtered[i][pub_attributes[j]].toString)
                    text_ref = pub_filtered[i][pub_attributes[j]].toString().substring(0,15)

//                    text_ref = pub_filtered[i][pub_attributes[j]]
                    const cellText = document.createTextNode(text_ref);
                    href.appendChild(cellText);
                    cell.appendChild(href)
                    row.appendChild(cell);
                } else {

                    //console.log('else')
                    //console.log(pub[i][headers[j]])
                    const cellText = document.createTextNode(pub_filtered[i][pub_attributes[j]]);
                    cell.appendChild(cellText)
                    row.appendChild(cell);
                }
            }

    // add the row to the end of the table body
        tblBody.appendChild(row);
        }
    //console.log(c)
  // put the <tbody> in the <table>
    tbl.appendChild(tblBody);
  // appends <table> into <body>
  //document.body.appendChild(tbl);

    document.getElementById('pub_table').appendChild(tbl)
  // sets the border attribute of tbl to '2'
    tbl.setAttribute("border", "2");
//    console.log('tbl')
//    console.log(tbl)
}
