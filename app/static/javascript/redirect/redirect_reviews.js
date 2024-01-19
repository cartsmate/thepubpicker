function redirect_reviews(id) {
    console.log("redirect_reviews")

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
function redirect_reviews2(url) {
    console.log("redirect_reviews2")

    window.open(url)
}
function redirect_website(website) {
    console.log("redirect_website")

    window.open(website)
}
