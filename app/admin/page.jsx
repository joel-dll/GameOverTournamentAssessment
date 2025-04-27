'use client';

import { useEffect, useState } from 'react';
import axios from 'axios';
import '/styles/styles.css'; // adjust if your CSS is elsewhere

export default function AdminDashboard() {
  const [tournaments, setTournaments] = useState([]);
  const [newTournament, setNewTournament] = useState({
    game_title: '',
    date: '',
    city: '',
    country: '',
    total_spots: '',
    latitude: '',
    longitude: '',
  });
  const [editingTournament, setEditingTournament] = useState(null);

  // ✅ Fetch tournaments
  const fetchTournaments = async () => {
    try {
      const res = await axios.get('/api/admin/tournaments');
      setTournaments(res.data);
    } catch (err) {
      console.error('Fetch tournaments failed:', err);
    }
  };

  useEffect(() => {
    fetchTournaments();
  }, []);

  // ✅ Add tournament
  const handleAddTournament = async (e) => {
    e.preventDefault();
    try {
      await axios.post('/api/admin/add', newTournament);
      alert('Tournament added!');
      setNewTournament({
        game_title: '',
        date: '',
        city: '',
        country: '',
        total_spots: '',
        latitude: '',
        longitude: '',
      });
      fetchTournaments();
    } catch (err) {
      console.error('Add tournament failed:', err);
      alert('Failed to add tournament');
    }
  };

  // ✅ Delete tournament
  const handleDeleteTournament = async (id) => {
    if (!confirm('Are you sure you want to delete this tournament?')) return;
    try {
      await axios.delete(`/api/admin/delete?id=${id}`);
      alert('Tournament deleted.');
      fetchTournaments();
    } catch (err) {
      console.error('Delete tournament failed:', err);
      alert('Failed to delete tournament');
    }
  };

  // ✅ Toggle active/cancelled status
  const handleToggleStatus = async (id, currentStatus) => {
    const newStatus = currentStatus === 'active' ? 'cancelled' : 'active';
    try {
      await axios.post('/api/admin/toggle-status', { id, status: newStatus });
      fetchTournaments();
    } catch (err) {
      console.error('Toggle status failed:', err);
      alert('Failed to update status');
    }
  };

  // ✅ Edit tournament
  const handleEditTournament = (tournament) => {
    setEditingTournament(tournament);
  };

  const handleSaveEdit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('/api/admin/edit', editingTournament);
      alert('Tournament updated!');
      setEditingTournament(null);
      fetchTournaments();
    } catch (err) {
      console.error('Edit tournament failed:', err);
      alert('Failed to update tournament');
    }
  };

  return (
    <div className="admin-container">
      <h2>Admin - Manage Tournaments</h2>

      {/* ➡️ Add Tournament Form */}
      <form className="admin-form" onSubmit={handleAddTournament}>
        <input
          type="text"
          placeholder="Game Title"
          value={newTournament.game_title}
          onChange={(e) => setNewTournament({ ...newTournament, game_title: e.target.value })}
          required
        />
        <input
          type="date"
          value={newTournament.date}
          onChange={(e) => setNewTournament({ ...newTournament, date: e.target.value })}
          required
        />
        <input
          type="text"
          placeholder="City"
          value={newTournament.city}
          onChange={(e) => setNewTournament({ ...newTournament, city: e.target.value })}
          required
        />
        <input
          type="text"
          placeholder="Country"
          value={newTournament.country}
          onChange={(e) => setNewTournament({ ...newTournament, country: e.target.value })}
          required
        />
        <input
          type="number"
          placeholder="Total Spots"
          value={newTournament.total_spots}
          onChange={(e) => setNewTournament({ ...newTournament, total_spots: e.target.value })}
          required
        />
        <input
          type="text"
          placeholder="Latitude"
          value={newTournament.latitude}
          onChange={(e) => setNewTournament({ ...newTournament, latitude: e.target.value })}
          required
        />
        <input
          type="text"
          placeholder="Longitude"
          value={newTournament.longitude}
          onChange={(e) => setNewTournament({ ...newTournament, longitude: e.target.value })}
          required
        />
        <button className="btnadmin" type="submit">Add Tournament</button>
      </form>

      {/* ➡️ Tournament List */}
      <div className="admin-tournament-list">
        {tournaments.map((t) => (
          <div key={t.id} className="admin-tournament-card">
            <strong>{t.game_title}</strong><br/>
            Date: {t.date}<br/>
            Location: {t.city}, {t.country}<br/>
            Spots: {t.remaining_spots} / {t.total_spots}<br/>
            Status: <strong>{t.status}</strong>
            <br/>
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

            {/* ➡️ Inline Edit Form */}
            {editingTournament && editingTournament.id === t.id && (
              <form onSubmit={handleSaveEdit} className="admin-form" style={{ marginTop: '1rem' }}>
                <input
                  type="text"
                  value={editingTournament.game_title}
                  onChange={(e) => setEditingTournament({ ...editingTournament, game_title: e.target.value })}
                />
                <input
                  type="date"
                  value={editingTournament.date}
                  onChange={(e) => setEditingTournament({ ...editingTournament, date: e.target.value })}
                />
                <input
                  type="text"
                  value={editingTournament.city}
                  onChange={(e) => setEditingTournament({ ...editingTournament, city: e.target.value })}
                />
                <input
                  type="text"
                  value={editingTournament.country}
                  onChange={(e) => setEditingTournament({ ...editingTournament, country: e.target.value })}
                />
                <input
                  type="number"
                  value={editingTournament.total_spots}
                  onChange={(e) => setEditingTournament({ ...editingTournament, total_spots: e.target.value })}
                />
                <input
                  type="text"
                  value={editingTournament.latitude}
                  onChange={(e) => setEditingTournament({ ...editingTournament, latitude: e.target.value })}
                />
                <input
                  type="text"
                  value={editingTournament.longitude}
                  onChange={(e) => setEditingTournament({ ...editingTournament, longitude: e.target.value })}
                />
                <div className="admin-buttons" style={{ marginTop: '0.5rem' }}>
                  <button className="btnadmin" type="submit">Save</button>
                  <button className="btnadmin" type="button" onClick={() => setEditingTournament(null)}>Cancel</button>
                </div>
              </form>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
