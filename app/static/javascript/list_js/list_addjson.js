//function addJson(headers, visible) {
function list_addjson() {
    json_list = []
    //for (i=0; i<headers.length; i++) {
    var i = 0
    for (var key in pub[0]) {
    //pub[0].forEach((key, index) => {
        //console.log(index, club);
    //});
    //for (const [index, key] of pub[0].entries()) {
        //console.log(index, club);
    //}
    //for (var key of Object.keys(visible)) {
        //console.log(key + " -> " + visible[key])
        json_list.push({target: i, visible: visible[key], searchable: true, })
        i++
        //json_list.push({target: i, visible: visible[key], searchable: true, })
    }
    return json_list
}
