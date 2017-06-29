
$(document).ready(function(){
  //  map = getDaytonMap();

  var tileLayer = L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
	maxZoom: 19,
	attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
});

var map = L.map('mapDayton', {
   center: [39.7589, -84.1916],
   zoom: 13,
   layers: [tileLayer]
});
//    var circle = L.circle([39.7589, -84.1916], {
//     color: 'red',
//     fillColor: '#f03',
//     fillOpacity: 0.5,
//     radius: 500
// }).addTo(map);
});
