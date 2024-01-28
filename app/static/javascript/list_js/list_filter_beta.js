function list_filter_beta(visible, order, asc_desc) {
    console.log('-- list_ filter_beta')

    $(document).ready(function () {
        $('#pub_list').DataTable({
            paging: true,
            info: false,
            order: [[order, asc_desc]],
            columnDefs: list_addjson(visible),
            searching: false
        });
    });
}


function Reset() {
     window.location = "/pub/list";
}