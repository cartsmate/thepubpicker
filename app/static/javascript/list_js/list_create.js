function list_create() {
    console.log('-- list_create')
    pubs_to_show = mapped_pubs
    var tbl = document.createElement("table");
    tbl.setAttribute("id", "pub_list");
    document.getElementById('pub_table').visible = false
    tbl.style.cssText = 'font-size:12px;'
    tbl.className = "table table-striped";

    var tblHead = document.createElement("thead");
    var tblBody = document.createElement("tbody");
    var row = document.createElement("tr");

//    const heading_0 = document.createElement("td")
//    heading_0.width = "30px"
//    heading_0.style.margin = "0px"
//    heading_0.style.padding = "0px"
//    heading_0.style.height = "40px"
//    heading_0.style.fontWeight = "bold"
//    heading_0.style.verticalAlign = "middle"
//    const headingText_0 = document.createTextNode('#')
//    heading_0.appendChild(headingText_0)
//    row.appendChild(heading_0);
    for (const [key, value] of Object.entries(pub_obj)) {
        for (const [k, v] of Object.entries(value)) {
            //console.log(v.name)
            if (v.table_visible) {
                const heading = document.createElement("td");
                if (v.name == 'ordering') {
                    //heading.width = "30px"
                    heading.classList.add("tbl_ordering")
                } else if (v.name == 'rank') {
                    //heading.width = "50px"
                    heading.classList.add("tbl_rank")
                } else if (v.name == 'event_day') {
                    //heading.width = "40px"
                    heading.classList.add("tbl_event_day")
                } else if (v.name == 'detail_name') {
                    //heading.width = "145px"
                    heading.classList.add("tbl_detail_name")
                } else if (v.name == 'station_name') {
                    //heading.width = "110px"
                    heading.classList.add("tbl_station_name")
                }
//                else {
//                    heading.width = "110px"
//                }

                heading.style.margin = "0px"
                heading.style.padding = "0px"
                heading.style.height = "40px"
                heading.style.fontWeight = "bold"
                heading.style.verticalAlign = "middle"
                const headingText = document.createTextNode(v.alias)
                heading.appendChild(headingText)
                row.appendChild(heading);
            }
        }
    }
    tblHead.appendChild(row);
    //console.log(tblHead)
    tbl.appendChild(tblHead);

    for (let i = 0; i < pubs_to_show.length; i++) {
        var row = document.createElement("tr");
//        const cell_0 = document.createElement("td");
//        cell_0.style.margin = "0px"
//        cell_0.style.padding = "0px"
//        cell_0.style.height = "40px"
//        cell_0.style.color = "#0d6efd"
//        cell_0.style.verticalAlign = "middle"
//        const href = document.createElement("a");
//        href.setAttribute("style", "text-decoration: none; color: #0d6efd;")
//        const cellText_0 = document.createTextNode(i)
//        cell_0.appendChild(cellText_0)
//        row.appendChild(cell_0);
        for (const [key, value] of Object.entries(pub_obj)) {
            for (const [k, v] of Object.entries(value)) {
                if (v.table_visible) {
                    const cell = document.createElement("td");
                    cell.style.margin = "0px"
                    cell.style.padding = "0px"
                    cell.style.height = "40px"
                    cell.style.color = "#0d6efd"
                    cell.style.verticalAlign = "middle"
                    const href = document.createElement("a");
                    href.setAttribute("style", "text-decoration: none; color: #0d6efd;")
                    if (v.name == 'station_name') {
                        //cell.width = "135px"
                        href.setAttribute("href", "#");
                        href.setAttribute("onclick", "update_station('" + pubs_to_show[i]['station_identity'] + "')");
                        const cellText = document.createTextNode(pubs_to_show[i][v.name].toString().substring(0,16));
                        href.appendChild(cellText);
                        cell.appendChild(href)
                        row.appendChild(cell);
                    } else if (v.name == 'detail_name') {
                        //cell.width = "135px"
                        href.setAttribute("href", "#");
                        href.setAttribute("onclick", "redirect_pub_search('" + pubs_to_show[i]['pub_identity'] + "')");
                        const cellText = document.createTextNode(pubs_to_show[i][v.name].toString().substring(0,19));
                        href.appendChild(cellText);
                        cell.appendChild(href)
                        row.appendChild(cell);
                    } else if (v.name == 'rank') {
                        //cell.width = "30px"
                        const cellText = document.createTextNode(pubs_to_show[i][v.name]);
                        cell.appendChild(cellText)
                        row.appendChild(cell);
                    } else {
                        //console.log(v.name)
                        //cell.width = "135px"
                        const cellText = document.createTextNode(pubs_to_show[i][v.name]);
                        cell.appendChild(cellText)
                        row.appendChild(cell);
                    }
                }
            }
        }
        tblBody.appendChild(row);
    }
    //console.log(tblBody)

    tbl.appendChild(tblBody);

    document.getElementById('pub_table').appendChild(tbl)

    tbl.setAttribute("border", "2");

}
