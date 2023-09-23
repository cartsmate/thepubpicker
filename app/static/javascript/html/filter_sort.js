function filter_sort(filtered_data) {
    console.log('FILTER_SORT')
    if (document.getElementById('search-input-navbar').value != '') {
        console.log('sort by distance')
        let sortedDates = filtered_data.sort((p1, p2) => (p1.distance > p2.distance) ? 1 : (p1.distance < p2.distance) ? -1 : 0);
        filtered_data = sortedDates
    } else {
        console.log('sort by rank')
        filtered_data = filtered_data.sort((a, b) => {
            if (a.rank < b.rank) {
                return -1;
                }
            });
    }
    return filtered_data
}
