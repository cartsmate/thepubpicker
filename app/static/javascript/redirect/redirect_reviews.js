function redirect_reviews_id(id) {
    console.log("redirect_reviews_id")

    var base_url = window.location.hostname
    if (env_vars['env'] == 'qual') {
        var url = "http://" + base_url + ":5000/pub/"
    } else {
        var url = "http://" + base_url + "/pub/"
    }
    const myUrlWithParams = new URL(url);
    myUrlWithParams.searchParams.append('id', id);
    window.location.replace(myUrlWithParams.href);
}
function redirect_reviews(url) {
    console.log("redirect_reviews")

    window.open(url)
}
function redirect_website(website) {
    console.log("redirect_website")

    window.open(website)
}
