function list_filter(visible, order, asc_desc) {
    console.log('FILTER_TABLE')
    //console.log('headers')
    //console.log(headers)
    //console.log('visible')
    //console.log(visible)
    for (const key in visible) {
        let trueStr = visible[key]
        //console.log(typeof(trueStr) + " : " + trueStr)
        trueStr = (trueStr === "true")
        //console.log(typeof(trueStr) + " : " + trueStr)
        visible[key] = trueStr
    }

    $(document).ready(function () {
        $('#pub_list').DataTable({
            paging: true,
            //pagingType: 'first_last_numbers',
            info: false,
            //order: [[order, 'asc']],
            order: [[order, asc_desc]],
            //columnDefs: addJson(headers, visible)
            columnDefs: list_addjson()
        });
    });
    //console.log('end of filter table')
}


function Reset() {
     window.location = "/pub/list";
}