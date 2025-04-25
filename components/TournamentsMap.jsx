'use client';

import { useEffect, useRef } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import '../styles/styles.css'; // or wherever your CSS is

export default function TournamentsMap({ tournaments = [], onRegister }) {
  const mapRef = useRef(null);

  useEffect(() => {
    // Prevent re-initializing on every render
    if (mapRef.current) return;

    const map = L.map('leaflet-map').setView([51.505, -0.09], 5); // initial coords

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; OpenStreetMap contributors',
    }).addTo(map);

    tournaments.forEach(t => {
      const marker = L.marker([t.latitude, t.longitude]).addTo(map);
      marker.bindPopup(`
        <div style="text-align:center">
          <strong>${t.game_title}</strong><br/>
          Date: ${t.date}<br/>
          Location: ${t.city}, ${t.country}<br/>
          <button class="popup-register-btn" data-id="${t.id}" data-title="${t.game_title}">Register</button>
        </div>
      `);
    });

    // Handle register clicks from popup
    map.on('popupopen', function (e) {
      const button = e.popup._contentNode.querySelector('.popup-register-btn');
      if (button) {
        button.addEventListener('click', () => {
          const id = button.getAttribute('data-id');
          const title = button.getAttribute('data-title');
          if (onRegister) onRegister(id, title);
        });
      }
    });

    mapRef.current = map;
  }, [tournaments, onRegister]);

  return <div id="leaflet-map" className="map-container" />;

}
