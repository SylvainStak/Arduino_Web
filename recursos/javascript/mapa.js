var mymap = L.map('mapid').setView([28.455766, -16.282890], 16);

L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw', {
    maxZoom: 18,    
    id: 'mapbox.streets'
}).addTo(mymap);


L.marker([28.455766, -16.282890]).addTo(mymap).openPopup();