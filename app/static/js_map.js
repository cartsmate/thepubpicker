function map_addListener_bounds_changed(map,mapped_pubs){console.log('map_addListener_bounds_changed ADDED')
google.maps.event.addListener(map,'bounds_changed',function(){console.log('map_addListener - BOUNDS CHANGED')
console.log('unique_data')
console.log(unique_data)
marker_in_bounds=0
pubs_to_show=[]
bounds=map.getBounds();let ne=bounds.getNorthEast();let sw=bounds.getSouthWest();let north_east=ne.toString().replace(/[()]/g,"");var north_east_str=north_east.toString().split(',');let south_west=sw.toString().replace(/[()]/g,"");var south_west_str=south_west.toString().split(',');let direction={"north":{"name":"NORTH","html_name":"north_note","bounds_value":north_east_str[0],"extra_pubs":0},"south":{"name":"SOUTH","html_name":"south_note","bounds_value":south_west_str[0],"extra_pubs":0},"east":{"name":"EAST","html_name":"east_note","bounds_value":north_east_str[1],"extra_pubs":0},"west":{"name":"WEST","html_name":"west_note","bounds_value":south_west_str[1],"extra_pubs":0}};for(i=0;i<Math.min(unique_data.length,100);i++){console.log('inside < 100')
if(parseFloat(unique_data[i]['detail_latitude'])>direction['south'].bounds_value&&parseFloat(unique_data[i]['detail_latitude'])<direction['north'].bounds_value&&parseFloat(unique_data[i]['detail_longitude'])>direction['west'].bounds_value&&parseFloat(unique_data[i]['detail_longitude'])<direction['east'].bounds_value){console.log('inside bounds')
marker_in_bounds++
pubs_to_show.push(unique_data[i])
}
if(unique_data[i]['detail_latitude']<direction['south'].bounds_value){direction['south'].extra_pubs++}
if(unique_data[i]['detail_latitude']>direction['north'].bounds_value){direction['north'].extra_pubs++}
if(unique_data[i]['detail_longitude']<direction['west'].bounds_value){direction['west'].extra_pubs++}
if(unique_data[i]['detail_longitude']>direction['east'].bounds_value){direction['east'].extra_pubs++}}
for(let i in direction){console.log(i)
if(direction[i].extra_pubs>0){document.getElementById(direction[i].html_name).textContent=direction[i].extra_pubs+" more pubs due "+direction[i].name}else{document.getElementById(direction[i].html_name).textContent=''}}
console.log('page: '+page)
mapped_pubs=pubs_to_show
console.log('pubs_to_show')
console.log(pubs_to_show)
console.log('mapped_pubs: '+mapped_pubs.length)
if(page=='home'){if(unique_data.length>100){list_setup(unique_data.slice(0,100))}else{list_setup(unique_data)}}});}
var markersArray=[];function clearOverlays(){for(var i=0;i<markersArray.length;i++){markersArray[i].setMap(null);}
markersArray.length=0;}
function map_addListener_click_placeid(map){console.log('map click listener added')
var infowindow=new google.maps.InfoWindow();map.addListener('click',function(event){console.log('event')
event.stop();infowindow.close();console.log(JSON.stringify(event))
if(event.placeId){console.log('USER INPUT - place id clicked')
var request={placeId:event.placeId,};var find_request={placeId:event.placeId,};var service=new google.maps.places.PlacesService(map);service.getDetails(request,function(place,status){if(status===google.maps.places.PlacesServiceStatus.OK){console.log('place')
console.log(place)
event.stop();infowindow.close();infowindow.setPosition(event.latLng);infowindow.setContent("<p>"+place.name+"</p><p><b><a href='/add/?place_id="+event.placeId+"'>Add Venue</a></b></p>")
infowindow.open(map);}});}})}
function map_addListener_click_add(map){console.log('map addListener click')
map.addListener('click',function(event){if(event.placeId){console.log('placeId: '+event.placeId)
var request={placeId:event.placeId,};var find_request={placeId:event.placeId,};var service=new google.maps.places.PlacesService(map);service.getDetails(request,function(place,status){if(status===google.maps.places.PlacesServiceStatus.OK){console.log(place)
var reviews=place.reviews;if(place.rating===undefined){console.log('undefined')
var ranking=0}else{console.log(place.rating)
var ranking=place.rating}
document.getElementById("rank").value=ranking
console.log('place response')
console.log(place)
place_text=String(place.types)
var array2=place_text.split(",")
var text;var place_set=false;var myStringArray=array2;var arrayLength=myStringArray.length;for(var i=0;i<arrayLength;i++){if(myStringArray[i]=="bar"||myStringArray[i]=="restaurant"){text=myStringArray[i].charAt(0).toUpperCase()+myStringArray[i].slice(1);place_set=true;break;}}
if(place_set==false){text='Other'}
document.getElementById("category").value=text;}});event.stop();document.getElementById("place").value=event.placeId;console.log('event: '+JSON.stringify(event))
lat_lng_json=JSON.stringify(event.latLng.toJSON());var lat_lng_obj=JSON.parse(lat_lng_json);document.getElementById("detail_latitude").value=lat_lng_obj.lat;document.getElementById("detail_longitude").value=lat_lng_obj.lng;console.log('after map tick')
console.log(lat_lng_obj.lat,lat_lng_obj.lng)
nearest_station(place,lat_lng_obj)
pinColor="#808000";var labelOriginHole=new google.maps.Point(12,15);var pinSVGHole="M12,11.5A2.5,2.5 0 0,1 9.5,9A2.5,2.5 0 0,1 12,6.5A2.5,2.5 0 0,1 14.5,9A2.5,2.5 0 0,1 12,11.5M12,2A7,7 0 0,0 5,9C5,14.25 12,22 12,22C12,22 19,14.25 19,9A7,7 0 0,0 12,2Z";var markerImage2={path:pinSVGHole,anchor:new google.maps.Point(12,17),fillOpacity:1,fillColor:pinColor,strokeWeight:2,strokeColor:"white",scale:2,labelOrigin:labelOriginHole};marker=new google.maps.Marker({position:new google.maps.LatLng(lat_lng_obj.lat,lat_lng_obj.lng),map:map,icon:markerImage2,})
const center=new google.maps.LatLng(lat_lng_obj.lat,lat_lng_obj.lng);window.map.panTo(center);}})}
function center_map(){filtered_pubs=filter_by_()
console.log('center_map: '+filtered_pubs.length)
create_filter_(filtered_pubs)
if(window.navigator.onLine==true){if(search_string==''){filtered_pubs=map_center_from_pubs(filtered_pubs)
map.setCenter({lat:parseFloat(filtered_pubs[0]['detail_latitude']),lng:parseFloat(filtered_pubs[0]['detail_longitude'])});}else{filtered_pubs=map_center_from_searchbox(filtered_pubs)}
if(document.getElementById('sunday_filter').checked==false&&document.getElementById('saturday_filter').checked==false&&document.getElementById('friday_filter').checked==false&&document.getElementById('thursday_filter').checked==false&&document.getElementById('wednesday_filter').checked==false&&document.getElementById('tuesday_filter').checked==false&&document.getElementById('monday_filter').checked==false){unique_data=get_unique_list(filtered_pubs)}else{console.log('DAY selected')
unique_data=filtered_pubs}
var central_map=map.getCenter();map.panTo(central_map);clearOverlays()
for(i=0;i<Math.min(unique_data.length,100);i++){unique_data[i]['ordering']=i
marker_add(unique_data[i])}}else{list_setup(filtered_pubs)}
finalise_results(filtered_pubs)}
function map_center_from_searchbox(filtered_pubs){console.log('map_center_from_searchbox')
for(i=0;i<filtered_pubs.length;i++){lat_diff=Math.abs(parseFloat(filtered_pubs[i]['detail_latitude'])-central_obj.lat())
lng_diff=Math.abs(parseFloat(filtered_pubs[i]['detail_longitude'])-central_obj.lng())
tot_diff=lat_diff+lng_diff
filtered_pubs[i]['distance']=tot_diff}
filtered_pubs=filtered_pubs.sort((a,b)=>{if(a.distance<b.distance){return-1;}});return filtered_pubs}
function map_center_from_pubs(filtered_pubs){console.log('map_center_from_pubs: '+filtered_pubs.length)
console.log(filtered_pubs)
var total_lat=0
var avg_lat=0
var total_lng=0
var avg_lng=0
for(i=0;i<filtered_pubs.length;i++){total_lat+=parseFloat(filtered_pubs[i]['detail_latitude'])
total_lng+=parseFloat([i]['detail_longitude'])}
avg_lat=total_lat/filtered_pubs.length
avg_lng=total_lng/filtered_pubs.length
filtered_pubs=get_unique_list(filtered_pubs)
for(i=0;i<filtered_pubs.length;i++){lat_diff=Math.abs(parseFloat(filtered_pubs[i]['detail_latitude'])-avg_lat)
lng_diff=Math.abs(parseFloat(filtered_pubs[i]['detail_longitude'])-avg_lng)
tot_diff=lat_diff+lng_diff
filtered_pubs[i]['distance']=tot_diff}
filtered_pubs=filtered_pubs.sort((a,b)=>{if(a.distance<b.distance){return-1;}});return filtered_pubs}
function map_create(lat,lng,zoom){console.log("map create: lat: "+lat+'| lng: '+lng+' | zoom: '+zoom);var map_prop={center:new google.maps.LatLng(lat,lng),zoom:zoom,zoomControl:true,controlSize:30,streetViewControl:false,restriction:{latLngBounds:get_london_bounds(),strictBounds:true,},disableDefaultUI:true,}
map=new google.maps.Map(document.getElementById('new_map'),map_prop)
return map}
var markersArray=[];function clearOverlays(){for(var i=0;i<markersArray.length;i++){markersArray[i].setMap(null);}
markersArray.length=0;}
function map_init(){console.log('map init: '+page)
if(page=='home'){var display_pub=pub_all}else{var display_pub=pub_1}
if(page=='add'){var zoom=22}else{var zoom=13}
map=map_create(display_pub[0].detail_latitude,display_pub[0].detail_longitude,zoom)
if(page=='home'){setup_searchbox()}
if(page!='add'){map_addListener_bounds_changed(map,page);}
if(page=='home'){map_addListener_click_placeid(map)}else if(page=='add'){map_addListener_click_add(map)}}
function map_init_none(){console.log("INIT MAP NONE");}
function setup_searchbox(){const input=document.getElementById("search-input-navbar");var options={bounds:get_london_bounds(),componentRestrictions:{country:'uk'}};var searchBox=new google.maps.places.Autocomplete(input,options);searchbox_addListener_places_changed(map,searchBox);}
function get_london_bounds(){var northEast=new google.maps.LatLng(52,0.3);var southWest=new google.maps.LatLng(51.2,-0.56);var GreaterLondon=new google.maps.LatLngBounds(southWest,northEast);return GreaterLondon}
function map_load(page){console.log('map load on '+page+' | on-line?: '+window.navigator.onLine)
var js=document.createElement("script");js.type="text/javascript";if(window.navigator.onLine==true){js.setAttribute("defer","defer");map_initiator='map_init'
js.src='https://maps.googleapis.com/maps/api/js?key='+env_vars['google_key']+'&libraries=places&callback='+map_initiator
document.head.appendChild(js)}else{map_init_none()}}
function marker_add(the_pub){console.log('ADD MARKERS')
var pinSVGHole="M12,11.5A2.5,2.5 0 0,1 9.5,9A2.5,2.5 0 0,1 12,6.5A2.5,2.5 0 0,1 14.5,9A2.5,2.5 0 0,1 12,11.5M12,2A7,7 0 0,0 5,9C5,14.25 12,22 12,22C12,22 19,14.25 19,9A7,7 0 0,0 12,2Z";var labelOriginHole=new google.maps.Point(12,15);var pinSVGFilled="M 12,2 C 8.1340068,2 5,5.1340068 5,9 c 0,5.25 7,13 7,13 0,0 7,-7.75 7,-13 0,-3.8659932 -3.134007,-7 -7,-7 z";var labelOriginFilled=new google.maps.Point(12,9);var infowindow=new google.maps.InfoWindow();var pinColor='#808000'
var pin=pinSVGHole
var markerImage={path:pinSVGFilled,anchor:new google.maps.Point(12,17),fillOpacity:1,fillColor:pinColor,strokeWeight:2,strokeColor:"white",scale:2,labelOrigin:labelOriginFilled,};marker=new google.maps.Marker({position:new google.maps.LatLng(the_pub['detail_latitude'],the_pub['detail_longitude']),map:map,icon:markerImage,label:{color:'white',fontSize:'10px',text:the_pub['ordering'].toString()}})
markersArray.push(marker)
google.maps.event.addListener(marker,'click',(function(marker){return function(){infowindow.x=the_pub.detail_name;infowindow.setContent("<p><b>"+the_pub.detail_name+"</b></p>"+
"<a href='/pub/?id="+the_pub.pub_identity+"'>click for details</a>");infowindow.open(map,marker);}})(marker));return marker}
function nearest_station(place,lat_lng_obj){console.log('nearest_station')
records=[]
for(let i=0;i<stations.length;i++){lat_diff=Math.abs(stations[i]['station_latitude']-lat_lng_obj.lat)
lng_diff=Math.abs(stations[i]['station_longitude']-lat_lng_obj.lng)
tot_diff=lat_diff+lng_diff
var record={name:stations[i]['station_name'],id:stations[i]['station_identity'],distance:tot_diff}
records.push(record);}
records=records.sort((a,b)=>{if(a.distance<b.distance){return-1;}});document.getElementById("station_name").value=records[0]['name']
document.getElementById("station_identity").value=records[0]['id']
}
function searchbox_addListener_places_changed(map,searchBox){console.log('searchbox addListener places changed ADDED')
let markers=[];searchBox.addListener("place_changed",()=>{console.log('search box has changed place')
const place=searchBox.getPlace();console.log('place')
console.log(place)
if(place.length==0){return;}
markers.forEach((marker)=>{marker.setMap(null);});markers=[];const bounds=new google.maps.LatLngBounds();if(!place.geometry||!place.geometry.location){console.log("returned place contains no geometry");return}
lat1=place.geometry.location.lat()
lng1=place.geometry.location.lng();if(place.geometry.viewpoint){bounds.union(place.geometry.viewpoint);}else{bounds.extend(place.geometry.location);}
var newArray=pub_all.filter(function(el){return el.place==place.place_id});console.log(newArray)
if(newArray.length!=0){console.log('pub in DB found')
console.log(newArray)
console.log(newArray[0]['pub_identity'])
redirect_pub_search(newArray[0]['pub_identity'])}else{console.log('NEW place')
console.log(newArray)
map.setCenter({lat:lat1,lng:lng1});if(place.types.includes('bar')||place.types.includes('restaurant')){map.setZoom(22)}else{map.setZoom(13)}
central_obj=map.getCenter()
search_string=place
center_map()}});}
function sort_by_distance(data,map){console.log('sort by distance')
console.log('data in: '+data.length)
console.log(data)
for(var i=0;i<data.length;i++){records=[]
latlng_center=map.getCenter();lat_diff=Math.abs(data[i]['detail_latitude']-latlng_center.lat())
lng_diff=Math.abs(data[i]['detail_longitude']-latlng_center.lng())
tot_diff=lat_diff+lng_diff
data[i]['distance']=tot_diff
}
data=data.sort((a,b)=>{if(a.distance<b.distance){return-1;}});console.log('data out sorted: '+data.length)
console.log(data)
return data
}