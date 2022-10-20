var map = L.map('map', {
  center: [39.9697580692459, -75.1446355214347],
  zoom: 11,
});


var Satellite = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);
