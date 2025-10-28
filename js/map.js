// Initialize the map
let map;
let markers = {};
let currentLocationId = null;

// Get location from URL parameter
function getLocationFromURL() {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get('location');
}

// Initialize map when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    initMap();
});

function initMap() {
    // Get the location from QR code parameter
    currentLocationId = getLocationFromURL();
    
    // Default center (Fortaleza, CE)
    let centerLat = -3.7400;
    let centerLng = -38.5100;
    let zoomLevel = 13;
    
    // If a specific location was provided, center on it
    if (currentLocationId && collectionPoints[currentLocationId]) {
        const location = collectionPoints[currentLocationId];
        centerLat = location.lat;
        centerLng = location.lng;
        zoomLevel = 15;
    }
    
    // Initialize Leaflet map
    map = L.map('map').setView([centerLat, centerLng], zoomLevel);
    
    // Add OpenStreetMap tile layer
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
        maxZoom: 19
    }).addTo(map);
    
    // Add markers for all collection points
    addMarkers();
    
    // Display location info if coming from QR code
    if (currentLocationId && collectionPoints[currentLocationId]) {
        displayLocationInfo(collectionPoints[currentLocationId]);
    }
}

function addMarkers() {
    // Define custom icon colors
    const defaultIcon = L.icon({
        iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-green.png',
        shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-shadow.png',
        iconSize: [25, 41],
        iconAnchor: [12, 41],
        popupAnchor: [1, -34],
        shadowSize: [41, 41]
    });
    
    const highlightIcon = L.icon({
        iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-yellow.png',
        shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-shadow.png',
        iconSize: [25, 41],
        iconAnchor: [12, 41],
        popupAnchor: [1, -34],
        shadowSize: [41, 41]
    });
    
    // Add markers for each collection point
    Object.values(collectionPoints).forEach(point => {
        const isCurrentLocation = point.id === currentLocationId;
        const icon = isCurrentLocation ? highlightIcon : defaultIcon;
        
        const marker = L.marker([point.lat, point.lng], { icon: icon })
            .addTo(map)
            .bindPopup(`
                <div class="marker-popup">
                    <h3>${point.name}</h3>
                    <p><strong>Endereço:</strong> ${point.address}</p>
                    <p><strong>Horário:</strong> ${point.hours}</p>
                    <p>${point.description}</p>
                    ${isCurrentLocation ? '<p style="color: #00ff88; font-weight: bold;">📍 Você está aqui</p>' : ''}
                </div>
            `);
        
        // Open popup for current location
        if (isCurrentLocation) {
            marker.openPopup();
        }
        
        markers[point.id] = marker;
    });
}

function displayLocationInfo(location) {
    const infoDiv = document.getElementById('location-info');
    
    // Calculate distances to other points (simplified)
    const distances = calculateDistances(location);
    
    let distanceHTML = '';
    if (distances.length > 0) {
        distanceHTML = '<h4>Outros pontos de coleta próximos:</h4><ul>';
        distances.forEach(dist => {
            distanceHTML += `<li><strong>${dist.name}:</strong> ${dist.address} (aprox. ${dist.distance.toFixed(1)} km)</li>`;
        });
        distanceHTML += '</ul>';
    }
    
    infoDiv.innerHTML = `
        <h3>📍 Sua localização: ${location.name}</h3>
        <p><strong>Endereço:</strong> ${location.address}</p>
        <p><strong>Horário de funcionamento:</strong> ${location.hours}</p>
        <p>${location.description}</p>
        ${distanceHTML}
        <p style="margin-top: 1rem; padding-top: 1rem; border-top: 1px solid #00ff88;">
            <small>💡 Dica: Clique nos marcadores no mapa para ver mais informações sobre cada ponto de coleta.</small>
        </p>
    `;
}

function calculateDistances(currentLocation) {
    const distances = [];
    
    Object.values(collectionPoints).forEach(point => {
        if (point.id !== currentLocation.id) {
            const distance = getDistanceFromLatLon(
                currentLocation.lat, currentLocation.lng,
                point.lat, point.lng
            );
            distances.push({
                name: point.name,
                address: point.address,
                distance: distance
            });
        }
    });
    
    // Sort by distance
    distances.sort((a, b) => a.distance - b.distance);
    
    return distances;
}

// Haversine formula to calculate distance between two coordinates
function getDistanceFromLatLon(lat1, lon1, lat2, lon2) {
    const R = 6371; // Radius of the earth in km
    const dLat = deg2rad(lat2 - lat1);
    const dLon = deg2rad(lon2 - lon1);
    const a = 
        Math.sin(dLat/2) * Math.sin(dLat/2) +
        Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2)) * 
        Math.sin(dLon/2) * Math.sin(dLon/2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
    const d = R * c; // Distance in km
    return d;
}

function deg2rad(deg) {
    return deg * (Math.PI/180);
}

