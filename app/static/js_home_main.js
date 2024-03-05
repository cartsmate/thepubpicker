function display_counter(counter){document.getElementById("digit_100000").textContent=counter.substring(0,1)
document.getElementById("digit_10000").textContent=counter.substring(1,2)
document.getElementById("digit_1000").textContent=counter.substring(2,3)
document.getElementById("digit_100").textContent=counter.substring(3,4)
document.getElementById("digit_10").textContent=counter.substring(4,5)
document.getElementById("digit_1").textContent=counter.substring(5,6)
console.log('display counter: '+counter)}
function get_no_reviews(){var rev_num=0
for(const[key,value]of Object.entries(review)){if(value.quick_filter=='yes'){rev_num++}}
return rev_num}
function get_unique_list(filtered_pubs){unique_data=filtered_pubs.filter(function(a){var key=a.pub_identity
if(!this[key]){this[key]=true;return true;}},Object.create(null));return unique_data}
function setup_filters(){console.log('create filters')
toggle_overlay()
toggle_filters()
}
function setup_filters_populate(data){console.log('setup_filters_populate')
create_filter_(data)
console.log('filters: '+filters)
pre_populate(filters)
pub_filtered=filter_by_(data)
create_filter_(pub_filtered)
return pub_filtered}