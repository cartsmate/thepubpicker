var table = $('#example').DataTable({
   snapshot: null
})
.on('search.dt', function() {
  var snapshot = table
     .rows({ search: 'applied', order: 'index'})
     .data()
     .toArray()
     .toString();

  var currentSnapshot = table.settings().init().snapshot;

  if (currentSnapshot != snapshot) {
   table.settings().init().snapshot = snapshot;
   if (currentSnapshot != null) $('#example').trigger('datachange.dt')
  }
})
.on('datachange.dt', function() {
  alert('data has changed')
  //updateGraph( GraphData )
})