'use client';
export default function TournamentResults({ tournaments }) {
  return (
    <div className="list-container">
      {tournaments.map(t => (
        <div key={t.id} className="tournament-card">
          <h3>{t.game_title}</h3>
          <p>Date: {t.date}</p>
          <p>Location: {t.city}, {t.country}</p>
          <p>Spots Remaining: {t.remaining_spots} / {t.total_spots}</p>
        </div>
      ))}
    </div>
  );
}
