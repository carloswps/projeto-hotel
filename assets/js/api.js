// Map
document.addEventListener("DOMContentLoaded", function () {
    var map = L.map('map').setView([-23.5505, -46.6333], 13);
    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 15,
    }).addTo(map);

    var circle = L.circle([-23.5505, -46.6333], {
        color: 'red',
        fillColor: '#f03',
        fillOpacity: 0.5,
        radius: 500
    }).addTo(map);

    var popup = L.popup()
    .setLatLng([-23.5505, -46.6333])
    .setContent("Coordenadas fictícias.")
    .openOn(map);
});

