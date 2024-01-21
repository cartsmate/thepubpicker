function get_no_reviews() {
    console.log('get no of reviews')
    let root = document.documentElement;
    let rev_num = document.getElementById('body').getAttribute("data-reviews")
    root.style.setProperty('--no_of_reviews', rev_num)

}
