function list_delete() {
    console.log('-- list_delete')
    $('#pub_list').DataTable().destroy();
    $("#pub_list").remove();

}
