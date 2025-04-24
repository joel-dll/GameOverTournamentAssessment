'use client';
import { useState, useEffect } from 'react';
import TournamentSearchForm from '/components/TournamentSearchForm';
import TournamentResults from '/components/TournamentResults';
import FooterBlack from '/components/FooterBlack'; 

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

  useEffect(() => {
    fetchTournaments();
  }, []);

  return (
    <div>
      <TournamentSearchForm onSearch={fetchTournaments} />
      <TournamentResults tournaments={tournaments} refresh={fetchTournaments} />
      <FooterBlack />
    </div>
  );
}
