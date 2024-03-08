function list_addjson(visible){console.log('-- list_addjson')
json_list=[]
i=0
for(const[key,value]of Object.entries(pub_obj)){for(const[k,v]of Object.entries(value)){if(v.table_visible){if(visible[v.name]==true){}
json_list.push({"targets":i,"visible":visible[v.name],})
i++}}}
return json_list}
function list_columns(){console.log('-- list_columns')
visible={}
for(const[key,value]of Object.entries(pub_obj)){for(const[k,v]of Object.entries(value)){if(v.table_visible){visible[v.name]=false}}}
visible['ordering']=true
visible['detail_name']=true
var e=filter_selection['event']
var s=filter_selection['station']
var d=filter_selection['diary']
if((e=='on')&&(s=='on')&&(d=='on')){visible['station_name']=false
visible['event_day']=false
visible['event_type']=false
visible['event_detail']=true
visible['ranking']=true}
if((e=='on')&&(s=='on')&&(d=='off')){visible['station_name']=false
visible['event_day']=false
visible['event_type']=false
visible['event_detail']=true
visible['ranking']=true}
if((e=='on')&&(s=='off')&&(d=='on')){visible['station_name']=true
visible['event_day']=false
visible['event_type']=false
visible['event_detail']=true
visible['ranking']=false}
if((e=='off')&&(s=='on')&&(d=='on')){visible['station_name']=false
visible['event_day']=false
visible['event_type']=false
visible['event_detail']=false
visible['ranking']=true}
if((e=='on')&&(s=='off')&&(d=='off')){visible['station_name']=true
visible['event_day']=false
visible['event_type']=false
visible['event_detail']=false
visible['ranking']=true}
if((e=='off')&&(s=='on')&&(d=='off')){visible['station_name']=false
visible['event_day']=false
visible['event_type']=false
visible['event_detail']=false
visible['ranking']=true}
if((e=='off')&&(s=='off')&&(d=='on')){visible['station_name']=true
visible['event_day']=false
visible['event_type']=false
visible['event_detail']=false
visible['ranking']=true}
if((e=='off')&&(s=='off')&&(d=='off')){visible['station_name']=true
visible['event_day']=false
visible['event_type']=false
visible['event_detail']=false
visible['ranking']=true}
asc_desc='asc'
order=0
return[visible,order,asc_desc]}
function list_create(mapped_pubs){console.log('-- list_create: mapped_pubs: '+mapped_pubs.length)
pubs_to_show=mapped_pubs
var tbl=document.createElement("table");tbl.setAttribute("id","pub_table");tbl.style.cssText='font-size:12px;'
tbl.className="table table-striped";var tblHead=document.createElement("thead");var tblBody=document.createElement("tbody");var row=document.createElement("tr");for(const[key,value]of Object.entries(pub_obj)){for(const[k,v]of Object.entries(value)){if(v.table_visible){const heading=document.createElement("td");if(v.name=='ordering'){heading.classList.add("tbl_ordering")}
else if(v.name=='rank'){heading.classList.add("tbl_rank")}
else if(v.name=='event_day'){heading.classList.add("tbl_event_day")}
else if(v.name=='detail_name'){heading.classList.add("tbl_detail_name")}
else if(v.name=='station_name'){heading.classList.add("tbl_station_name")}
heading.style.margin="0px"
heading.style.padding="0px"
heading.style.height="40px"
heading.style.fontWeight="bold"
heading.style.verticalAlign="middle"
const headingText=document.createTextNode(v.alias)
heading.appendChild(headingText)
row.appendChild(heading);}}}
tblHead.appendChild(row);tbl.appendChild(tblHead);for(let i=0;i<pubs_to_show.length;i++){var row=document.createElement("tr");for(const[key,value]of Object.entries(pub_obj)){for(const[k,v]of Object.entries(value)){if(v.table_visible){const cell=document.createElement("td");cell.style.margin="0px"
cell.style.padding="0px"
cell.style.height="40px"
cell.style.color="#0d6efd"
cell.style.verticalAlign="middle"
const href=document.createElement("a");href.setAttribute("style","text-decoration: none; color: #0d6efd;")
if(v.name=='station_name'){href.setAttribute("href","#");href.setAttribute("onclick","update_station('"+pubs_to_show[i]['station_identity']+"')");const cellText=document.createTextNode(pubs_to_show[i][v.name].toString().substring(0,16));href.appendChild(cellText);cell.appendChild(href)
row.appendChild(cell);}else if(v.name=='detail_name'){href.setAttribute("href","#");href.setAttribute("onclick","redirect_pub_search('"+pubs_to_show[i]['pub_identity']+"')");const cellText=document.createTextNode(pubs_to_show[i][v.name].toString().substring(0,19));href.appendChild(cellText);cell.appendChild(href)
row.appendChild(cell);}else if(v.name=='rank'){const cellText=document.createTextNode(pubs_to_show[i][v.name]);cell.appendChild(cellText)
row.appendChild(cell);}else{const cellText=document.createTextNode(pubs_to_show[i][v.name]);cell.appendChild(cellText)
row.appendChild(cell);}}}}
tblBody.appendChild(row);}
tbl.appendChild(tblBody);document.getElementById('pub_table_template').appendChild(tbl)
tbl.setAttribute("border","2");}
function list_delete(){console.log('-- list_delete')
$('#pub_table').DataTable().destroy();$("#pub_table").remove();}
function list_filter(visible,order,asc_desc){console.log('-- list_filter')
var json_var=list_addjson(visible)
var test_var=[{targets:0,visible:false},{targets:1,visible:false},{targets:2,visible:false},{targets:3,visible:false},{targets:4,visible:false},{targets:5,visible:true},{targets:6,visible:true},{targets:[7,8,9,10,11,12,13,14,15,16,17,18],visible:false}]
$(document).ready(function(){console.log('INSIDE THE LIST FILTER')
$('#pub_table').DataTable({paging:true,info:false,order:[[order,asc_desc]],columnDefs:json_var,searching:false,bDestroy:true});});}
function Reset(){window.location="/pub/list";}
function list_setup(mapped_pubs){console.log('LIST SETUP: '+mapped_pubs.length)
list_delete()
list_create(mapped_pubs)
const[new_visible,new_order,new_asc_desc]=list_columns()
list_filter(new_visible,new_order,new_asc_desc)}