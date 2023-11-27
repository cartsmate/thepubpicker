function list_create() {
    console.log('CREATE_TABLE')
    console.log('pub received')
    console.log(pub.length)
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

    var tblBody = document.createElement("tbody");
    var header = tbl.createTHead();
    var row = header.insertRow(0);

    /*
    for (var key in pub[0]) {
        alert(' name=' + key );
        // do some more stuff with response[key]
    }

    for (let k = 0; k < headers.length; k++) {
    */
    for (var key in pub[0]) {
        var cell = row.insertCell(key);
        cell.innerHTML = "<b>" + alias[key] + "</b>";
    }

  // creating all cells
    for (let i = 0; i < pub.length; i++) {
    // creates a table row
        var row = document.createElement("tr");

        for (var key in pub[0]) {
//        for (let j = 0; j < headers.length; j++) {
            const cell = document.createElement("td");
            const href = document.createElement("a");
            if (key == 'station_name') {
                href.setAttribute("href", "#");
                href.setAttribute("onclick", "click_station('" + pub[i]['station_identity'] + "')");
                text_ref = pub[i][key]
                const cellText = document.createTextNode(text_ref);
                href.appendChild(cellText);
                cell.appendChild(href)
                row.appendChild(cell);
                } else if (key == 'pub_name') {
                    href.setAttribute("href", "#");
                    href.setAttribute("onclick", "redirect_pub('" + pub[i]['pub_identity'] + "',)");
                    text_ref = pub[i][key]
                    const cellText = document.createTextNode(text_ref);
                    href.appendChild(cellText);
                    cell.appendChild(href)
                    row.appendChild(cell);
                } else {
                    text_ref = pub[i][key]
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

  // put the <tbody> in the <table>
    tbl.appendChild(tblBody);
  // appends <table> into <body>
  //document.body.appendChild(tbl);
    document.getElementById('dynamic_table').visible = false
    document.getElementById('dynamic_table').appendChild(tbl)
  // sets the border attribute of tbl to '2'
    tbl.setAttribute("border", "2");

}
