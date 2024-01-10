function findPubs() {

    pub_filtered = filter_all_data()
    populate_all_filters(pub_filtered)
    list_setup(pub_filtered)
    populate_header(pub_filtered.length)
    map_load_collection(pub_filtered)

    document.getElementById('pub_header').style.display = 'block';
    document.getElementById('col_map').style.display = 'block';
    document.getElementById('pub_table').style.display = 'block';

}
