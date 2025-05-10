'use client';

import { auth } from '../lib/firebase';
import axios from 'axios';
import '../styles/styles.css';
import { useTranslation } from 'react-i18next'; 

export default function TournamentResults({ tournaments, refresh }) {
  const { t } = useTranslation(); 

  const handleRegister = async (tournamentId, gameTitle) => {
    const user = auth.currentUser;
    if (!user) return alert(t('loginRequired'));

    try {
      await axios.post('/api/register', {
        user_id: user.email,
        tournament_id: tournamentId,
        game_title: gameTitle,
      });

      alert(t('registeredFor', { game: gameTitle }));
      refresh();
      document.dispatchEvent(new Event('updateRegistrations'));
    } catch (err) {
      alert(err.response?.data?.error || t('registrationFailed'));
    }
  };

  return (
    <div className="list-container">
      {tournaments.map((tournament) => (
        <div key={tournament.id} className="tournament-card-horizontal">
          <button
            className="register-btn"
            onClick={() => handleRegister(tournament.id, tournament.game_title)}
          >
            {t('register')}
          </button>

          <span className="game-title">*{tournament.game_title}*</span>
          <span><strong>{t('date')}:</strong> {tournament.date}</span>
          <span><strong>{t('location')}:</strong> {tournament.city}, {tournament.country}</span>
          <span><strong>{t('spotsRemaining')}:</strong> {tournament.remaining_spots} / {tournament.total_spots}</span>
          <span><strong>{t('status')}:</strong> {tournament.status}</span>
        </div>
      ))}
    </div>
  );
}
