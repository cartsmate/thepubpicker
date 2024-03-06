function list_addjson(visible){console.log('-- list_addjson')
json_list=[]
i=0
for(const[key,value]of Object.entries(pub_obj)){for(const[k,v]of Object.entries(value)){if(v.table_visible){json_list.push({target:i,visible:visible[v.name],})
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
visible['rank']=true}
if((e=='on')&&(s=='on')&&(d=='off')){visible['station_name']=false
visible['event_day']=false
visible['event_type']=false
visible['event_detail']=true
visible['rank']=true}
if((e=='on')&&(s=='off')&&(d=='on')){visible['station_name']=true
visible['event_day']=false
visible['event_type']=false
visible['event_detail']=true
visible['rank']=false}
if((e=='off')&&(s=='on')&&(d=='on')){visible['station_name']=false
visible['event_day']=false
visible['event_type']=false
visible['event_detail']=false
visible['rank']=true}
if((e=='on')&&(s=='off')&&(d=='off')){visible['station_name']=true
visible['event_day']=false
visible['event_type']=false
visible['event_detail']=false
visible['rank']=true}
if((e=='off')&&(s=='on')&&(d=='off')){visible['station_name']=false
visible['event_day']=false
visible['event_type']=false
visible['event_detail']=false
visible['rank']=true}
if((e=='off')&&(s=='off')&&(d=='on')){visible['station_name']=true
visible['event_day']=false
visible['event_type']=false
visible['event_detail']=false
visible['rank']=true}
if((e=='off')&&(s=='off')&&(d=='off')){visible['station_name']=true
visible['event_day']=false
visible['event_type']=false
visible['event_detail']=false
visible['rank']=true}
asc_desc='asc'
order=0
return[visible,order,asc_desc]}
function list_create(mapped_pubs){console.log('-- list_create: mapped_pubs: '+mapped_pubs.length)
pubs_to_show=mapped_pubs
var tbl=document.createElement("table");tbl.setAttribute("id","pub_list");document.getElementById('pub_table').visible=false
tbl.style.cssText='font-size:12px;'
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
tbl.appendChild(tblBody);document.getElementById('pub_table').appendChild(tbl)
tbl.setAttribute("border","2");}
function list_delete(){console.log('-- list_delete')
$('#pub_list').DataTable().destroy();$("#pub_list").remove();}
function list_filter(visible,order,asc_desc){console.log('-- list_filter')
$(document).ready(function(){$('#pub_list').DataTable({paging:true,info:false,order:[[order,asc_desc]],columnDefs:list_addjson(visible),searching:false,bDestroy:true});});}
function Reset(){window.location="/pub/list";}
function list_setup(mapped_pubs){console.log('LIST SETUP')
list_delete()
list_create(mapped_pubs)
const[new_visible,new_order,new_asc_desc]=list_columns()
list_filter(new_visible,new_order,new_asc_desc)}