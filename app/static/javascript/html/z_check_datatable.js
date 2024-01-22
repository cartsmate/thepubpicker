function myDataTableTest(){
    console.log('inside myDataTableTest')
    var table = document.getElementById('pub_list');
    rows = table.rows;
    rowcount = rows.length;
    names_list = []
    for (r=0; r<rowcount; r++) {
        if (r<11) {
            cells = rows[r].cells;
            cellcount = cells.length;
            for( c=0; c<cellcount; c++) {
                cell = cells[c];
                // now do something.
                //console.log(cell)
                if (r>0 && c==0) {
                    cell_str = String(cell.outerHTML)
//                    console.log(cell_str)
                    let total_length = cell_str.length;
                    let x_length = total_length - 9
//                    console.log(total_length)
//                    console.log(x_length)
                    let result = cell_str.substring(80, x_length);
                    console.log(result)
                    names_list.push(result)
                }
            }
        } else {
            break;
        }
    }
    console.log(names_list)
    /*
    for (var i = 0, row; row = table.rows[i]; i++) {
        if (i < 10) {
           //iterate through rows
           //rows would be accessed using the "row" variable assigned in the for loop
           console.log(row)
           for (var j = 0, col; col = row.cells[j]; j++) {
                console.log(col)
             //iterate through columns
             //columns would be accessed using the "col" variable assigned in the for loop
           }
        } else {
            break;
        }
    }
    */
}
