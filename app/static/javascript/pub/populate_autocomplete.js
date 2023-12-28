function populate_autocomplete() {
    $("#selector").autocomplete({
        source: pub_list,
        select: function (event, ui) {
            $('#selector').text(ui.item.label),
            redirect_pub(ui.item.value);
        },
        minLength:1,
        autoFocus: true
    });
}
