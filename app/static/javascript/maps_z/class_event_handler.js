
class ClickEventHandler {
    origin;
    map;
    placesService;
    constructor(map, origin) {
        this.origin = origin;
        this.map = map;
        this.placesService = new google.maps.places.PlacesService(map);
        this.map.addListener("click", this.handleClick.bind(this));
    }
    handleClick(event) {
        if (isIconMouseEvent(event)) {
            event.stop();
            if (event.placeId) {
                this.getPlaceInformation(event.placeId, key, stations);
            }
        }
    }
    getPlaceInformation(placeId) {
    const me = this;
    this.placesService.getDetails({ placeId: placeId }, (place, status) => {
        if (status === "OK" && place && place.geometry && place.geometry.location) {
            console.log('clickEventHandler class')
            document.getElementById("pub_name").value = place.name;
            document.getElementById("address").value = place.formatted_address;
            document.getElementById("place").value = place.place_id;

            var place_text = String(place.types)
            var array2 = place_text.split(",")
            var text;
            var place_set = false;
            var myStringArray = array2;
            var arrayLength = myStringArray.length;
            for (var i = 0; i < arrayLength; i++) {
                if (myStringArray[i] == "bar" || myStringArray[i] == "restaurant") {
                    text = myStringArray[i].charAt(0).toUpperCase() + myStringArray[i].slice(1);
                    place_set = true;
                    break;
                }
            }
            if (place_set == false) { text='Other' }
            document.getElementById("category").value = text;
        }
    });
}


}