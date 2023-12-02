document.addEventListener('DOMContentLoaded', function () {
    // Initialize the map
    const map = L.map('map').setView([0, 0], 2); // Initial center and zoom level

    // Add OpenStreetMap as the base layer
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '© OpenStreetMap contributors'
    }).addTo(map);

    // Add a search control
    const searchControl = L.Control.geocoder({
        defaultMarkGeocode: false, // Do not add a marker on the map for the default geocode result
        collapsed: false, // Expand the search bar by default
        placeholder: 'Search for a location...',
        errorMessage: 'Nothing found.'
    }).addTo(map);

    // Handle geocode result events
    searchControl.on('markgeocode', function (event) {
        const { geocode } = event;
        map.fitBounds(geocode.bbox);
    });
});
