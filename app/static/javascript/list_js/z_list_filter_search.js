function list_filter_search(visible, order, asc_desc) {
    console.log('list filter search')
//    console.log('pub count: ' + pub.length)
    //console.log('headers')
    //console.log(headers)

    /*
    console.log('visible')
    console.log(visible)
    for (const key in visible) {
        let trueStr = visible[key]
        //console.log(typeof(trueStr) + " : " + trueStr)
        trueStr = (trueStr === "true")
        //console.log(typeof(trueStr) + " : " + trueStr)
        visible[key] = trueStr
    }
    */
    $(document).ready(function () {
        $('#pub_list').DataTable({
            paging: true,
            info: false,
            order: [[order, asc_desc]],
            columnDefs: list_addjson_search(visible)
        });
    });
    //console.log('end of filter table')
}


function Reset() {
     window.location = "/pub/list";
}