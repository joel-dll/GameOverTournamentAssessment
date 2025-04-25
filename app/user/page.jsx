'use client';
import { useState, useEffect } from 'react';
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
    if (!user) return alert("Login required");

    try {
      await axios.post('/api/register', {
        user_id: user.email,
        tournament_id: tournamentId,
        game_title: gameTitle,
      });

      alert(`Registered for ${gameTitle}`);
      fetchTournaments();
      document.dispatchEvent(new Event('updateRegistrations'));
    } catch (err) {
      alert(err.response?.data?.error || 'Registration failed');
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
