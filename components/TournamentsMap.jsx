'use client';

import { useEffect, useRef } from 'react';
import 'leaflet/dist/leaflet.css';
import '../styles/styles.css';
import { useTranslation } from 'react-i18next';

export default function TournamentsMap({ tournaments = [], onRegister, className, zoomLevel = 3 }) {
  const mapRef = useRef(null);
  const { t } = useTranslation();

  
  const labelDate = t('date');
  const labelLocation = t('location');
  const labelRegister = t('register');

  useEffect(() => {
    async function initMap() {
      const L = await import('leaflet');

      if (mapRef.current) {
        mapRef.current.remove();
        mapRef.current = null;
      }

      const map = L.map('leaflet-map').setView([51.505, -0.10], zoomLevel);

      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; OpenStreetMap contributors',
      }).addTo(map);

      const largerRedIcon = L.icon({
        iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-red.png',
        shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
        iconSize: [25, 36],
        iconAnchor: [17, 46],
        popupAnchor: [1, -34],
        shadowSize: [31, 31],
      });

      tournaments.forEach(t => {
        if (typeof t.latitude === 'number' && typeof t.longitude === 'number') {
          const popupContent = `
            <div style="text-align:center">
              <strong>${t.game_title}</strong><br/>
              ${labelDate}: ${t.date}<br/>
              ${labelLocation}: ${t.city}, ${t.country}<br/>
              <button class="popup-register-btn" data-id="${t.id}" data-title="${t.game_title}">
                ${labelRegister}
              </button>
            </div>
          `;

          const marker = L.marker([t.latitude, t.longitude], { icon: largerRedIcon }).addTo(map);
          marker.bindPopup(popupContent);
        }
      });

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
    }

    initMap();
  }, [tournaments, onRegister, zoomLevel, labelDate, labelLocation, labelRegister]); 

  return <div id="leaflet-map" className={className || 'map-container'} />;
}
