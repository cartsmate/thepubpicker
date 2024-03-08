function list_filter(visible, order, asc_desc) {
    console.log('-- list_filter')
//    console.log('visible')
//    console.log(visible)
    var json_var = list_addjson(visible)
//    console.log('json_var')
//    console.log(json_var)
    var test_var = [
            { targets: 0, visible: false},
            { targets: 1, visible: false},
            { targets: 2, visible: false},
            { targets: 3, visible: false},
            { targets: 4, visible: false},
            { targets: 5, visible: true},
            { targets: 6, visible: true},
            { targets: [7,8,9,10,11,12,13,14,15,16,17,18], visible: false }
            ]
//    console.log('test_var')
//    console.log(test_var)
    $(document).ready(function () {
        console.log('INSIDE THE LIST FILTER')
        //let table = new DataTable('#pub_table');
        $('#pub_table').DataTable({
            paging: true,
            info: false,
            order: [[order, asc_desc]],
//            columnDefs: [
//            { targets: 0, visible: false},
//            { targets: 1, visible: false},
//            { targets: 2, visible: false},
//            { targets: 3, visible: false},
//            { targets: 4, visible: false},
//            { targets: 5, visible: true},
//            { targets: 6, visible: true},
//            { targets: [7,8,9,10,11,12,13,14,15,16,17,18], visible: false }
//            ],
//            columnDefs : test_var,
            columnDefs : json_var,
            searching: false,
            bDestroy: true
        });
    });
}
function Reset() {
     window.location = "/pub/list";
}
