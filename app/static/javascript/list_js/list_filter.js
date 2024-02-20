function list_filter(visible, order, asc_desc) {
    console.log('-- list_filter')

    $(document).ready(function () {
        $('#pub_list').DataTable({
            paging: true,
            info: false,
            order: [[order, asc_desc]],
            columnDefs: list_addjson(visible),
            searching: false,
            bDestroy: true
        });
    });
}


function Reset() {
     window.location = "/pub/list";
}