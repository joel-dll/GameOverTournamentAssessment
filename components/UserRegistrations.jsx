'use client';

import { useState, useEffect } from 'react';
import { auth } from '../lib/firebase';
import { onAuthStateChanged } from 'firebase/auth';
import '../styles/styles.css';

export default function UserRegistrations() {
  const [registrations, setRegistrations] = useState([]);
  const [selected, setSelected] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        fetch(`/api/registrations?user_id=${user.email}`)
          .then(res => res.json())
          .then(setRegistrations)
          .catch(err => console.error("Fetch error:", err));
      }
    });

    // ✅ Refresh listener
    const listener = () => {
      console.log("🔁 updateRegistrations triggered");
      const user = auth.currentUser;
      if (user) {
        fetch(`/api/registrations?user_id=${user.email}`)
          .then(res => res.json())
          .then(setRegistrations)
          .catch(err => console.error("Fetch error (on event):", err));
      }
    };

    document.addEventListener('updateRegistrations', listener);

    return () => {
      unsubscribe();
      document.removeEventListener('updateRegistrations', listener);
    };
  }, []);

  const handleCancel = async () => {
    try {
      const res = await fetch('/api/cancel', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          user_id: auth.currentUser.email,
          game_title: selected.game_title,
          date: selected.date,
        }),
      });
  
      const data = await res.json();
      if (!res.ok) throw new Error(data.error);
  
      setSelected(null);
      document.dispatchEvent(new Event('updateRegistrations')); // ✅ refresh registration list
      document.dispatchEvent(new Event('updateTournaments'));   // ✅ refresh tournament spots
      alert('Registration cancelled.');
    } catch (err) {
      console.error('Cancel error:', err);
      alert('Failed to cancel registration.');
    }
  };

  return (
    <div className="registration-box">
      <h2>Your Registrations</h2>
      <p style={{ fontSize: '0.85rem', color: 'darkred' }}>
        (Click on a game to see full details)
      </p>

      <ul className="registration-list">
        {registrations.map((r, index) => (
          <li key={index}>
            <button onClick={() => setSelected(r)} className="reg-btn">
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

          <div style={{ display: 'flex', gap: '1rem', marginTop: '10px', justifyContent: 'center'  }}>
            <button className="btnclose" onClick={() => setSelected(null)}>Close</button>
            <button className="btndelete"  onClick={handleCancel}>
              Cancel Registration
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
