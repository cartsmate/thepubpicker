function filter_by_feature(data) {
    console.log('FILTER_BY_FEATURE')
    ticked_list = []
    //var filtered_data = {{ all_data | tojson }}
    console.log('received data')
    console.log(data.length)
    filtered_data = data
    //ticked_data = []
    var review_list = ['brunch', 'dart', 'entertain', 'favourite', 'garden', 'history', 'late', 'music', 'pool', 'quiz', 'roast', 'sport']
    for (let i = 0; i < review_list.length; i++) {
        if (document.getElementById(review_list[i]).checked) {
            var filtered_data = filtered_data.filter(function(pub) {
                return pub[review_list[i]] == 'true'
                })
            //console.log('checked at: ' + total_list_obj['icon_list'][i])
        } else {
            var filtered_data = filtered_data.filter(function(pub) {
                return (pub[review_list[i]] == 'true' || pub[review_list[i]] == 'false' || pub[review_list[i]] == '')
                });
            //console.log('NOT checked at: ' + total_list_obj['icon_list'][i])
        }
    }
    console.log('sent data')
    console.log(filtered_data.length)
    return filtered_data
}
