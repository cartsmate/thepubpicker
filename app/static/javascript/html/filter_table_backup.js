//function addJson(headers, visible) {
function addJson(visible) {
    json_list = []
    for (i=0; i<headers.length; i++) {
    //for (var key of Object.keys(visible)) {
        //console.log(key + " -> " + visible[key])
        json_list.push({target: i, visible: visible[headers[i]], searchable: true, })
        //json_list.push({target: i, visible: visible[key], searchable: true, })
    }
    return json_list
}

function delete_table() {
    console.log('delete_table')
    $('#pub_list').DataTable().destroy();
    $("#pub_list").remove();

}

function Reset() {
     window.location = "/pub/list";
}

function filter_table(visible, order, asc_desc) {
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
    //console.log('post-visible')
    //console.log(visible)
    //console.log('order')
    //console.log(order)
    $(document).ready(function () {
        $('#pub_list').DataTable({

            paging: true,
            //pagingType: 'first_last_numbers',
            info: false,
            //order: [[order, 'asc']],
            order: [[order, asc_desc]],
            //columnDefs: addJson(headers, visible)
            columnDefs: addJson(visible)
    });
    /*
    $(document).ready(function() {
        var eventFired = function ( type ) {
        var n = $('#demo_info')[0];
        n.innerHTML += '<div>'+type+' event - '+new Date().getTime()+'</div>';
        n.scrollTop = n.scrollHeight;
        }
    $('#example')
    .on( 'order.dt', function () {
        eventFired( 'Order' );
        })
    .on( 'search.dt', function () {
        eventFired( 'Search' );
        })
    .on( 'page.dt', function () {
        eventFired( 'Page' );
        })
    .dataTable(); } );
    */
    //console.log('end of filter table')

}

/*
$(document).ready(function () {
    $('#pub_list').DataTable({
        paging: true,
        //pagingType: 'first_last_numbers',
        info: false,
        //order: [[order, 'asc']],
        order: [[order, asc_desc]],
        //columnDefs: addJson(headers, visible)
        columnDefs: addJson(visible),
        snapshot: null
    });

});
*/