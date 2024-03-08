function get_no_reviews() {
//    let root = document.documentElement;
//    let rev_num = document.getElementById('body').getAttribute("data-reviews")
//    root.style.setProperty('--no_of_reviews', rev_num)
//    console.log('no of review features: ' + rev_num)
    var rev_num = 0
    for (const [key, value] of Object.entries(review)) {
        if (value.quick_filter == 'yes') {
            rev_num ++
        }
    }
//    rev_num = model_formats['icon_list'].length - 1
    return rev_num
}
