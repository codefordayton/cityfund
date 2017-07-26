const daytonCenter = {lat: 39.7589, lng: -84.1916};

$(document).ready(function(){
  var tileLayer = getTileLayer();

  var map = L.map('mapDayton', {
    center: [daytonCenter.lat, daytonCenter.lng],
    zoom: 13,
    layers: [tileLayer]
  });

  addPinPoint(map, daytonCenter.lat, daytonCenter.lng, "green", 1000);
  addPinPoint(map, 39.768917, -84.1429034, "red", 100);
  addPinPoint(map, 39.7690566, -84.1433837, "red", 100);
  addPinPoint(map, 39.7375402, -84.1465927, "red", 100);
  addPinPoint(map, 39.7375209, -84.1459058, "red", 100);


});

function addPinPoint(map, lat, lng, color, radius){
  addMarker(map, lat, lng);
  addCircle(map, lat, lng, color, radius);
}

function addCircle(map, lat, lng, color, radius){
  var circle = L.circle([lat, lng], {
   color: color,
   fillColor: color,
   fillOpacity: 0.10,
   radius: radius
  }).addTo(map);
}

function addMarker(map, lat, lng){
  var marker = L.marker([lat, lng]).addTo(map);
}

function getTileLayer(){
  return L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  maxZoom: 19,
  attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
});
}
