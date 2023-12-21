function map_addListener_bounds_changed2(map, searchBox) {
    console.log("listen_search")
    map.addListener("bounds_changed", () => {
        searchBox.setBounds(map.getBounds());
    });
}
