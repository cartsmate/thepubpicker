function click_home(data, limit) {

    filtered_data = populate_test(data)

    if (limit != 'all') {
        limit_data = filtered_data.slice(0, limit)
    } else {
        limit_data = filtered_data
    }

    update_data(limit_data)

    update_icons(limit_data)
}
