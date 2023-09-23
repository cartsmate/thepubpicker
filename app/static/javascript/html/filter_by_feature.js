function filter_by_feature(filtered_data) {
    console.log('FILTER_BY_FEATURE')
    var review_list = ['brunch', 'dart', 'entertain', 'favourite', 'garden', 'history', 'late', 'music', 'pool', 'quiz', 'roast', 'sport']
    for (let i = 0; i < review_list.length; i++) {
        if (document.getElementById(review_list[i]).value == 'true') {
            var filtered_data = filtered_data.filter(function(pub) {
                return pub[review_list[i]] == 'true'
                });
        } else {
            var filtered_data = filtered_data.filter(function(pub) {
                return (pub[review_list[i]] == 'true' || pub[review_list[i]] == 'false' || pub[review_list[i]] == '')
                });
        }
    }
    return filtered_data
}
