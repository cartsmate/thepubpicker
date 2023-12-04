function list_create() {
    console.log('CREATE_TABLE')
    console.log('pub received')
    console.log(pub.length)
    console.log(pub)
    //console.log(pub[0]['address'])
    //console.log(pub[0]['distance'])
    //console.log('visible')
    //console.log(visible)
    //console.log('all_data')
    //console.log(all_data)
    //var tbl = document.getElementById('pub_list');
        //if(tbl) tbl.parentNode.removeChild(tbl);
  // creates a <table> element and a <tbody> element
    var tbl = document.createElement("table");
    tbl.setAttribute("id", "pub_list");
    tbl.style.cssText = 'font-size:12px;'
    tbl.className = "table table-striped";
    tbl.width = "310px"

    var tblHead = document.createElement("thead");
    var tblBody = document.createElement("tbody");

    //var header = tbl.createTHead();
    //var row = header.insertRow(0);

    pub_attributes = []
    a=0
    for (var key in pub[0]) {
        pub_attributes.push(key)
        a++
    }
    console.log('pub_attributes')
    console.log(pub_attributes)
    console.log(a)

    var row = document.createElement("tr");
    b=0
    for (let k = 0; k < pub_attributes.length; k++) {
        const heading = document.createElement("td");
        const headingText = document.createTextNode(pub_attributes[k]);
        heading.appendChild(headingText)
        row.appendChild(heading);
        b++
        }
    tblHead.appendChild(row);
    tbl.appendChild(tblHead);
    console.log(b)
//    for (var key in pub[0]) {
//        var cell = row.insertCell(key);
//        cell.innerHTML = "<b>" + alias[key] + "</b>";
//    }

  // creating all cells
    for (let i = 0; i < pub.length; i++) {
        var row = document.createElement("tr");
        c=0
        for (let j = 0; j < pub_attributes.length; j++) {
            c++
            const cell = document.createElement("td");
            const href = document.createElement("a");
            if (pub_attributes[j] == 'station_name') {
                href.setAttribute("href", "#");
                href.setAttribute("onclick", "click_station('" + pub[i]['station_identity'] + "')");
                text_ref = pub[i][pub_attributes[j]]
                const cellText = document.createTextNode(text_ref);
                href.appendChild(cellText);
                cell.appendChild(href)
                row.appendChild(cell);
                } else if (pub_attributes[j] == 'pub_name') {
                    href.setAttribute("href", "#");
                    href.setAttribute("onclick", "redirect_pub('" + pub[i]['pub_identity'] + "',)");
                    text_ref = pub[i][pub_attributes[j]]
                    const cellText = document.createTextNode(text_ref);
                    href.appendChild(cellText);
                    cell.appendChild(href)
                    row.appendChild(cell);
                } else {
                    text_ref = pub[i][pub_attributes[j]]
                    //console.log('else')
                    //console.log(pub[i][headers[j]])
                    const cellText = document.createTextNode(text_ref);
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
    document.getElementById('dynamic_table').visible = false
    document.getElementById('dynamic_table').appendChild(tbl)
  // sets the border attribute of tbl to '2'
    tbl.setAttribute("border", "2");
    console.log('tbl')
    console.log(tbl)
}
