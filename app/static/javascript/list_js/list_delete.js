function list_delete() {
    console.log('-- list_delete')
    $('#pub_table').DataTable().destroy();
    $("#pub_table").remove();

}
