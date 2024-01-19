function list_create(pub_filtered) {
    console.log('LIST_CREATE')

    // creates a <table> element and a <tbody> element
    var tbl = document.createElement("table");
    tbl.setAttribute("id", "pub_list");
    document.getElementById('pub_table').visible = false
    tbl.style.cssText = 'font-size:12px;'
    tbl.className = "table table-striped";
    tbl.width = "300px"

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
        //td.width = "100px"
        if (pub_attributes[k] == 'station_name') {
            heading.width = "120px"
        } else if (pub_attributes[k] == 'detail_name') {
            heading.width = "120px"
        } else if (pub_attributes[k] == 'rank') {
            heading.width = "50px"
        }
        heading.style.margin = "0px"
        heading.style.padding = "0px"
        heading.style.height = "40px"
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
            cell.style.margin = "0px"
            cell.style.padding = "0px"
            cell.style.height = "40px"
            cell.style.color = "#0d6efd"
            cell.style.verticalAlign = "middle"
            const href = document.createElement("a");
            href.setAttribute("style", "text-decoration: none; color: #0d6efd;")
            if (pub_attributes[j] == 'station_name') {
                cell.width = "110px"
                href.setAttribute("href", "#");
                //href.setAttribute("onclick", "redirect_station('" + pub_filtered[i]['station_identity'] + "', 'collection')");
                href.setAttribute("onclick", "update_station('" + pub_filtered[i]['station_identity'] + "')");

                text_ref = pub_filtered[i][pub_attributes[j]].toString().substring(0,17)
                const cellText = document.createTextNode(text_ref);

                href.appendChild(cellText);
                cell.appendChild(href)
                row.appendChild(cell);
                } else if (pub_attributes[j] == 'detail_name') {
                    cell.width = "150px"
                    href.setAttribute("href", "#");

                    href.setAttribute("onclick", "redirect_pub_search('" + pub_filtered[i]['pub_identity'] + "')");
                    text_ref = pub_filtered[i][pub_attributes[j]].toString().substring(0,20)
                    const cellText = document.createTextNode(text_ref);
                    href.appendChild(cellText);
                    cell.appendChild(href)
                    row.appendChild(cell);
                } else if (pub_attributes[j] == 'rank') {
                    cell.width = "14px"
                    const cellText = document.createTextNode(pub_filtered[i][pub_attributes[j]]);
                    cell.appendChild(cellText)
                    row.appendChild(cell);
                } else {
                    cell.width = "110px"
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
