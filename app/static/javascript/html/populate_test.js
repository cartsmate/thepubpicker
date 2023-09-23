function populate_test() {
    console.log('POPULATE_TEST')

    filtered_data = all_data

    filtered_data = filter_by_station(filtered_data)

    filtered_data = filter_by_feature(filtered_data)

    filtered_data = filter_sort(filtered_data)
//    if (document.getElementById('search-input-navbar').value != '') {
//        console.log('sort by distance')
//        let sortedDates = filtered_data.sort((p1, p2) => (p1.distance > p2.distance) ? 1 : (p1.distance < p2.distance) ? -1 : 0);
//        filtered_data = sortedDates
//    } else {
//        console.log('sort by rank')
//        filtered_data = filtered_data.sort((a, b) => {
//            if (a.rank < b.rank) {
//                return -1;
//                }
//            });
//    }
    console.log('filtered_data')
    console.log(filtered_data)
    return filtered_data
}

function compare(a, b) {
    if (a < b) {
        return -1;
    } else if (a > b) {
        return 1;
    } else {
        return 0;
    }
}
