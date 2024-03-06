function populate_pub(show_pub, page) {
    console.log('POPULATE_PUB consolidated')
    if (page != 'add') {
        populate_title(show_pub);
    }
    if (page == 'pub') {
//        populate_summary(show_pub);
        populate_extra(show_pub)
    }
    populate_detail(show_pub);
    populate_review(show_pub, page);
    populate_station(show_pub);
    populate_direction(show_pub);
//    populate_diary(show_pub)
}
