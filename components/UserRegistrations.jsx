'use client';

import { useState, useEffect } from 'react';
import { auth } from '../lib/firebase';
import { onAuthStateChanged } from 'firebase/auth';

export default function UserRegistrations() {
  const [registrations, setRegistrations] = useState([]);
  const [selected, setSelected] = useState(null);

  useEffect(() => {
    let currentUser = null;

    // 🔁 Define shared function
    const fetchRegistrations = async () => {
      if (!currentUser) return;

      try {
        const res = await fetch(`/api/registrations?user_id=${currentUser.email}`);
        if (!res.ok) throw new Error('Failed to fetch');
        const data = await res.json();
        setRegistrations(data);
      } catch (err) {
        console.error('❌ Fetch error:', err);
      }
    };

    // ✅ Wait for login before fetching
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        currentUser = user;
        fetchRegistrations();
      }
    });

    // ✅ Refresh when custom event is triggered
    const listener = () => {
      console.log('🔁 updateRegistrations triggered');
      fetchRegistrations();
    };

    document.addEventListener('updateRegistrations', listener);

    return () => {
      unsubscribe();
      document.removeEventListener('updateRegistrations', listener);
    };
  }, []);

  return (
    <div className="registration-box">
      <h2>Your Registrations</h2>
      <p style={{ fontSize: '0.85rem', color: 'darkred' }}>(Click on a game to see full details)</p>

      <ul className="registration-list">
        {registrations.map((r, index) => (
          <li key={index}>
            <button
              style={{ all: 'unset', cursor: 'pointer' }}
              onClick={() => setSelected(r)}
            >
              {r.game_title} - {r.date}
            </button>
          </li>
        ))}
      </ul>

      {selected && (
        <div className="registration-details">
          <h3>{selected.game_title}</h3>
          <p><strong>Date:</strong> {selected.date}</p>
          <p><strong>Location:</strong> {selected.city}, {selected.country}</p>
          <p><strong>Status:</strong> {selected.status}</p>
          <button className="btn" onClick={() => setSelected(null)}>Close</button>
        </div>
      )}
    </div>
  );
}
