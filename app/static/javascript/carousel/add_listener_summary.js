function add_listener_summary() {
    //model_format = {{model_formats | tojson}}['icon_list']
    //env_vars['google_key']
    console.log('ADD LISTENER SUMMARY')

    document.getElementById('pub_summary_test').addEventListener('click', (function () {
        return function () {
            var base_url = window.location.hostname
            if (env_vars['env'] == 'qual') {
                var url = "http://" + base_url + ":5000/pub/"
            } else {
                var url = "http://" + base_url + "/pub/"
            }
            const myUrlWithParams = new URL(url);
            myUrlWithParams.searchParams.append('pub_id', pub[0]['pub_identity']);
            window.location.replace(myUrlWithParams.href);
        }
    }))
}
