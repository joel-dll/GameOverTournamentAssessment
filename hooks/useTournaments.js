'use client';

import { useState, useEffect } from 'react';
import { auth } from '../lib/firebase';

export function useTournaments() {
  const [tournaments, setTournaments] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const fetchTournaments = async (filters = {}) => {
    try {
      setLoading(true);
      setError('');

      const params = new URLSearchParams();
      if (filters.title) params.append('game_title', filters.title);
      if (filters.date) params.append('date', filters.date);
      if (filters.location) params.append('location', filters.location);

      const response = await fetch(`/api/tournaments/search?${params.toString()}`);
      if (!response.ok) throw new Error('Failed to fetch tournaments');

      const data = await response.json();
      setTournaments(data);
    } catch (err) {
      console.error('Tournament fetch error:', err);
      setError(err.message || 'Error fetching tournaments');
    } finally {
      setLoading(false);
    }
  };

  const handleRegister = async (tournamentId, gameTitle) => {
    const user = auth.currentUser;
    if (!user) {
      alert("Login required");
      return;
    }

    try {
      const res = await fetch('/api/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          user_id: user.email,
          tournament_id: tournamentId,
          game_title: gameTitle,
        }),
      });

      const data = await res.json();
      if (!res.ok) {
        console.error('❌ Register failed:', data);
        alert(data.error || 'Registration failed');
      } else {
        alert(`Registered for ${gameTitle}`);
        document.dispatchEvent(new Event('updateRegistrations'));
        fetchTournaments(); // Optional refresh after register
      }
    } catch (err) {
      console.error('❌ Registration Error:', err);
      alert('Registration failed');
    }
  };

  useEffect(() => {
    fetchTournaments();
  }, []);

  return {
    tournaments,
    loading,
    error,
    fetchTournaments,
    handleRegister,
  };
}
