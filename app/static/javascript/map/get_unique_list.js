function get_unique_list(filtered_pubs) {
//    console.log('get_unique_list: ' + filtered_pubs.length)
    unique_data = filtered_pubs.filter(function (a) {
        var key = a.pub_identity
        if (!this[key]) {
            this[key] = true;
            return true;
        }
    }, Object.create(null));
    return unique_data
}
