var map;

$(document).ready(function(){
   map = getDaytonMap();
   var circle = L.circle([39.7589, -84.1916], {
    color: 'red',
    fillColor: '#f03',
    fillOpacity: 0.5,
    radius: 500
}).addTo(map);
});

function getDaytonMap(){


// img.src = "https://maps.googleapis.com/maps/api/js?center=39.7589,-84.1916&zoom=5&size=300x300&v=3.exp&sensor=false"
  // img.src = "http://maps.googleapis.com/maps/api/staticmap?&sensor=true&visualRefresh=true";
  return L.map('mapDayton').setView([39.7589, -84.1916], 13);
}
