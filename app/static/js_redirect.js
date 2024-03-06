function redirect_add(back){console.log("USER INPUT: redirect_add")
var base_url=window.location.hostname
if(env_vars['env']=='qual'){var url="http://"+base_url+":5000/add/"}else{var url="http://"+base_url+"/add/"}
const myUrlWithParams=new URL(url);myUrlWithParams.searchParams.append('back',back);window.location.replace(myUrlWithParams.href);}
function redirect_edit(id,back){console.log("redirect_edit")
var base_url=window.location.hostname
if(env_vars['env']=='qual'){var url="http://"+base_url+":5000/edit/"}else{var url="http://"+base_url+"/edit/"}
const myUrlWithParams=new URL(url);myUrlWithParams.searchParams.append('id',id);myUrlWithParams.searchParams.append('back',back);window.location.replace(myUrlWithParams.href);}
function redirect_home(){console.log("redirect_home")
var base_url=window.location.hostname
if(env_vars['env']=='qual'){var url="http://"+base_url+":5000/"}else{var url="http://"+base_url+"/"}
const myUrlWithParams=new URL(url);window.location.replace(myUrlWithParams.href);}
function redirect_pub(id){console.log("redirect_pub")
var base_url=window.location.hostname
if(env_vars['env']=='qual'){var url="http://"+base_url+":5000/pub/"}else{var url="http://"+base_url+"/pub/"}
const myUrlWithParams=new URL(url);myUrlWithParams.searchParams.append('id',id);myUrlWithParams.searchParams.append('filters','none');window.location.replace(myUrlWithParams.href);}
function redirect_pub_search(id){console.log("redirect_pub_search")
filters=get_filter_values()
var base_url=window.location.hostname
if(env_vars['env']=='qual'){var url="http://"+base_url+":5000/pub/"}else{var url="http://"+base_url+"/pub/"}
const myUrlWithParams=new URL(url);myUrlWithParams.searchParams.append('id',id);myUrlWithParams.searchParams.append('filters',filters);window.location.replace(myUrlWithParams.href);}
function redirect_pub_search_edit(id,filters){console.log("redirect_pub_search_edit")
var base_url=window.location.hostname
if(env_vars['env']=='qual'){var url="http://"+base_url+":5000/edit/"}else{var url="http://"+base_url+"/edit/"}
const myUrlWithParams=new URL(url);myUrlWithParams.searchParams.append('id',id);myUrlWithParams.searchParams.append('filters',filters);window.location.replace(myUrlWithParams.href);}
function redirect_reviews_id(id){console.log("redirect_reviews_id")
var base_url=window.location.hostname
if(env_vars['env']=='qual'){var url="http://"+base_url+":5000/pub/"}else{var url="http://"+base_url+"/pub/"}
const myUrlWithParams=new URL(url);myUrlWithParams.searchParams.append('id',id);window.location.replace(myUrlWithParams.href);}
function redirect_reviews(url){console.log("redirect_reviews")
window.open(url)}
function redirect_station(station_identity){console.log("redirect station")
filters=get_filter_values()
var base_url=window.location.hostname
if(env_vars['env']=='qual'){var url="http://"+base_url+":5000/collection/"}else{var url="http://"+base_url+"/collection/"}
const myUrlWithParams=new URL(url);myUrlWithParams.searchParams.append('station_id',station_identity);myUrlWithParams.searchParams.append('filters',filters);window.location.replace(myUrlWithParams.href);}
function redirect_stations(back){console.log("redirect stations")
var base_url=window.location.hostname
if(env_vars['env']=='qual'){var url="http://"+base_url+":5000/collection/"}else{var url="http://"+base_url+"/collection/"}
const myUrlWithParams=new URL(url);myUrlWithParams.searchParams.append('station_id',pub[0]['station_identity']);myUrlWithParams.searchParams.append('back',back);window.location.replace(myUrlWithParams.href);}
function redirect_timeout(pubs){console.log('redirect_timeout')
console.log(pubs.length)
console.log(document.getElementById('burger_toggle').checked)
document.getElementById('burger_toggle').checked=false
filter_reset()
create_filter_(pubs)
center_map()
}
function redirect_website(website){console.log("redirect_website")
window.open(website)}
function update_station(station_identity){document.getElementById(station_identity+"_filter").checked=true
pub_filtered=filter_all_data(pub)
list_setup_beta(pub_filtered)
populate_feature(pub_filtered)
populate_header(pub_filtered.length)
map_load_collection()}