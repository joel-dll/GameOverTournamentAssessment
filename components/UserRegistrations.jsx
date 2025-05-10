'use client';

import { useState, useEffect } from 'react';
import { auth } from '../lib/firebase';
import { onAuthStateChanged } from 'firebase/auth';
import { useTranslation } from 'react-i18next';
import '../styles/styles.css';

export default function UserRegistrations() {
  const { t } = useTranslation();
  const [mounted, setMounted] = useState(false);
  const [registrations, setRegistrations] = useState([]);
  const [selected, setSelected] = useState(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        fetch(`/api/registrations?user_id=${user.email}`)
          .then(res => res.json())
          .then(setRegistrations)
          .catch(err => console.error("Fetch error:", err));
      }
    });

    const listener = () => {
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
          tournament_id: selected.tournament_id,
          game_title: selected.game_title,
          date: selected.date,
        }),
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data.error);

      setSelected(null);
      document.dispatchEvent(new Event('updateRegistrations'));
      document.dispatchEvent(new Event('updateTournaments'));
      alert(t('cancelSuccess'));
    } catch (err) {
      console.error('Cancel error:', err);
      alert(t('cancelFail'));
    }
  };

  if (!mounted) return null;

  return (
    <div className="registration-box">
      <h2>{t('yourRegistrations')}</h2>
      <p style={{ fontSize: '0.85rem', color: 'darkred' }}>
        {t('clickToSeeDetails')}
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
          <p><strong>{t('date')}:</strong> {selected.date}</p>
          <p><strong>{t('location')}:</strong> {selected.city}, {selected.country}</p>
          <p><strong>{t('status')}:</strong> {selected.status}</p>

          <div style={{ display: 'flex', gap: '1rem', marginTop: '10px', justifyContent: 'center' }}>
            <button className="btnclose" onClick={() => setSelected(null)}>
              {t('close')}
            </button>
            <button className="btndelete" onClick={handleCancel}>
              {t('cancelRegistration')}
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
