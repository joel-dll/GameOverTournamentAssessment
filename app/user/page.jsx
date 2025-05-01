'use client';

import TournamentSearchForm from '/components/TournamentSearchForm';
import TournamentResults from '/components/TournamentResults';
import UserRegistrations from '/components/UserRegistrations';
import TournamentsMap from '/components/TournamentsMap';


import { useTournaments } from '../../hooks/useTournaments'; 

export default function UserPage() {
  const { tournaments, fetchTournaments, handleRegister } = useTournaments();

  return (
    <div>
      <TournamentSearchForm onSearch={fetchTournaments} />
      <TournamentResults tournaments={tournaments} refresh={fetchTournaments} />
      <UserRegistrations />
      <TournamentsMap tournaments={tournaments}  onRegister={handleRegister} />
      
    </div>
  );
}
