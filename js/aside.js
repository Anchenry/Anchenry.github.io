function loadLocationMap(lon,lat) {
    var map = L.map('locationMap',{attributionControl: false}).setView([lat, lon], 8);

    // OSM加载
    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(map);
}