function pub_of_the_week() {
    //alert(document.getElementById('random_name').text)
    //var id = '6d9c8d4e-fa1d-433d-aea4-ff3f5c36cb64'
    var id = document.getElementById('random_description').text
    //alert('pub_id: ' + id)
    redirect_pub(id)
    /*
    var base_url = window.location.hostname
    var url = "http://" + base_url + ":5000/home/"
    const myUrlWithParams = new URL(url);
    myUrlWithParams.searchParams.append('pub_id', id);
    window.location.replace(myUrlWithParams.href);

    href.setAttribute("href", "#");
    href.setAttribute("onclick", "click_front_pub('" + pubs_selection[i]['pub_identity'] + "',)");
    */
}
