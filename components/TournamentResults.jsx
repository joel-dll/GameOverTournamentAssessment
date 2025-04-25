'use client';

import { auth } from '../lib/firebase';
import { useEffect } from 'react';
import axios from 'axios';
import '../styles/styles.css'; // adjust path if needed

export default function TournamentResults({ tournaments, refresh }) {
  // ✅ Listen for external event to refresh tournaments
  useEffect(() => {
    const listener = () => {
      console.log('🔁 updateTournaments triggered');
      refresh(); // ✅ reload tournaments
    };
    document.addEventListener('updateTournaments', listener);
    return () => document.removeEventListener('updateTournaments', listener);
  }, [refresh]);

  // ✅ Handle register
  const handleRegister = async (tournamentId, gameTitle) => {
    const user = auth.currentUser;
    if (!user) return alert("Login required");
  
    try {
      const res = await axios.post('/api/register', {
        user_id: user.email,
        tournament_id: tournamentId,
        game_title: gameTitle,
      });
  
      alert(`Registered for ${gameTitle}`);
      refresh(); // ✅ Refresh tournament list
      document.dispatchEvent(new Event('updateRegistrations')); // ✅ Refresh registration list
    } catch (err) {
      alert(err.response?.data?.error || 'Registration failed');
    }
  };

  // ✅ Render tournaments
  return (
    <div className="list-container">
      {tournaments.map((t) => (
        <div key={t.id} className="tournament-card-horizontal">
          <button
            className="register-btn"
            onClick={() => handleRegister(t.id, t.game_title)}
          >
            Register
          </button>

          <span className="game-title">*{t.game_title}*</span>
          <span><strong>Date:</strong> {t.date}</span>
          <span><strong>Location:</strong> {t.city}, {t.country}</span>
          <span><strong>Spots Remaining:</strong> {t.remaining_spots} / {t.total_spots}</span>
        </div>
      ))}
    </div>
  );
}
