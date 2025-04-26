'use client';
import { useState, useEffect } from 'react';

import { auth } from '../../lib/firebase'; 

import TournamentSearchForm from '/components/TournamentSearchForm';
import TournamentResults from '/components/TournamentResults';
import FooterBlack from '/components/FooterBlack'; 
import UserRegistrations from '/components/UserRegistrations';
import TournamentsMap from '/components/TournamentsMap';

export default function UserPage() {
  const [tournaments, setTournaments] = useState([]);

  const fetchTournaments = async (filters = {}) => {
    const params = new URLSearchParams();
    if (filters.title) params.append('game_title', filters.title);
    if (filters.date) params.append('date', filters.date);
    if (filters.location) params.append('location', filters.location);

    const res = await fetch(`/api/tournaments/search?${params.toString()}`);
    const data = await res.json();
    setTournaments(data);
  };
  const handleRegister = async (tournamentId, gameTitle) => {
    const user = auth.currentUser;
    if (!user) {
      alert("Login required");
      return;
    }
  
    try {
      console.log('📩 Sending Register request:', {
        user_id: user.email,
        tournament_id: tournamentId,
        game_title: gameTitle,
      });
  
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
        console.log('✅ Registered successfully:', data);
        alert(`Registered for ${gameTitle}`);
        document.dispatchEvent(new Event('updateRegistrations'));
      }
    } catch (err) {
      console.error('❌ Registration Error:', err);
      alert('Registration failed');
    }
  };

  useEffect(() => {
    fetchTournaments();
  }, []);

  return (
    <div>
      <TournamentSearchForm onSearch={fetchTournaments} />
      <TournamentResults tournaments={tournaments} refresh={fetchTournaments} />
      <UserRegistrations />
      <TournamentsMap tournaments={tournaments} onRegister={handleRegister} />
      <FooterBlack />
    </div>
  );
}
