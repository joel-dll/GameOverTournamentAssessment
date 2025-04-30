'use client';

import { useState } from 'react';
import { useAdminTournaments } from '/hooks/useAdminTournaments'; 
import '/styles/styles.css';
import TournamentsMapAdmin from './TournamentsMapAdmin'; 
import AdminRegistrations from './AdminRegistrations'; 


export default function AdminContainer() {
  const [view, setView] = useState('dashboard');

  const {
    tournaments,
    newTournament,
    setNewTournament,
    editingTournament,
    setEditingTournament,
    fetchTournaments,
    handleAddTournament,
    handleDeleteTournament,
    handleToggleStatus,
    handleEditTournament,
    handleSaveEdit,
  } = useAdminTournaments();

  return (
    <div className="admin-container">
      {/* navigation Tabs */}
      <div className="admin-nav">
        <button className='btn-admin-menu' onClick={() => setView('dashboard')}>Dashboard</button>
        <button className='btn-admin-menu' onClick={() => setView('map')}>Tournament Map</button>
        <button className='btn-admin-menu' onClick={() => setView('registrations')}>Registrations</button>
      </div>

      
      {view === 'dashboard' && (
        <>
          <h2>Admin - Manage Tournaments</h2>

          {/* tournament form to add a tournament */}
          <form className="admin-form" onSubmit={handleAddTournament}>
            <input type="text" placeholder="Game Title" value={newTournament.game_title} onChange={(e) => setNewTournament({ ...newTournament, game_title: e.target.value })} required />
            <input type="date" value={newTournament.date} onChange={(e) => setNewTournament({ ...newTournament, date: e.target.value })} required />
            <input type="text" placeholder="City" value={newTournament.city} onChange={(e) => setNewTournament({ ...newTournament, city: e.target.value })} required />
            <input type="text" placeholder="Country" value={newTournament.country} onChange={(e) => setNewTournament({ ...newTournament, country: e.target.value })} required />
            <input type="number" placeholder="Total Spots" value={newTournament.total_spots} onChange={(e) => setNewTournament({ ...newTournament, total_spots: e.target.value })} required />
            <input type="text" placeholder="Latitude" value={newTournament.latitude} onChange={(e) => setNewTournament({ ...newTournament, latitude: e.target.value })} required />
            <input type="text" placeholder="Longitude" value={newTournament.longitude} onChange={(e) => setNewTournament({ ...newTournament, longitude: e.target.value })} required />
            <button className="btnadmin" type="submit">Add Tournament</button>
          </form>

          {/* tournament list */}
          <div className="admin-tournament-list">
            {tournaments.map((t) => (
              <div key={t.id} className="admin-tournament-card">
                <strong>{t.game_title}</strong><br />
                Date: {t.date}<br />
                Location: {t.city}, {t.country}<br />
                Spots: {t.remaining_spots} / {t.total_spots}<br />
                Status: <strong>{t.status}</strong><br />
                <label className="switch">
                  <input
                    type="checkbox"
                    checked={t.status === 'active'}
                    onChange={() => handleToggleStatus(t.id, t.status)}
                  />
                  <span className="slider round"></span>
                </label>

                <div className="admin-buttons" style={{ marginTop: '0.8rem' }}>
                  <button className="btnadmin" onClick={() => handleEditTournament(t)}>Edit</button>
                  <button className="btnadmin" onClick={() => handleDeleteTournament(t.id)}>Delete</button>
                </div>

                {editingTournament && editingTournament.id === t.id && (
                  <form onSubmit={handleSaveEdit} className="admin-form" style={{ marginTop: '1rem' }}>
                    <input type="text" value={editingTournament.game_title} onChange={(e) => setEditingTournament({ ...editingTournament, game_title: e.target.value })} />
                    <input type="date" value={editingTournament.date} onChange={(e) => setEditingTournament({ ...editingTournament, date: e.target.value })} />
                    <input type="text" value={editingTournament.city} onChange={(e) => setEditingTournament({ ...editingTournament, city: e.target.value })} />
                    <input type="text" value={editingTournament.country} onChange={(e) => setEditingTournament({ ...editingTournament, country: e.target.value })} />
                    <input type="number" value={editingTournament.total_spots} onChange={(e) => setEditingTournament({ ...editingTournament, total_spots: e.target.value })} />
                    <input type="text" value={editingTournament.latitude} onChange={(e) => setEditingTournament({ ...editingTournament, latitude: e.target.value })} />
                    <input type="text" value={editingTournament.longitude} onChange={(e) => setEditingTournament({ ...editingTournament, longitude: e.target.value })} />
                    <div className="admin-buttons" style={{ marginTop: '0.5rem' }}>
                      <button className="btnadmin" type="submit">Save</button>
                      <button className="btnadmin" type="button" onClick={() => setEditingTournament(null)}>Cancel</button>
                    </div>
                  </form>
                )}
              </div>
            ))}
          </div>
        </>
      )}

      {view === 'map' && (
        <div style={{ marginTop: '2rem' }}>
          <TournamentsMapAdmin tournaments={tournaments} />
        </div>
      )}

      {view === 'registrations' && (
        <div style={{ marginTop: '2rem' }}>
          <AdminRegistrations />
        </div>
      )}
    </div>
  );
}
