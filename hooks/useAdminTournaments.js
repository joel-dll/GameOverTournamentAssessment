'use client';

import { useState, useEffect } from 'react';
import axios from 'axios';

export function useAdminTournaments() {
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
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const fetchTournaments = async () => {
    try {
      setLoading(true);
      setError('');
      const res = await axios.get('/api/admin/tournaments');
      setTournaments(res.data);
    } catch (err) {
      console.error('Fetch tournaments failed:', err);
      setError(err.message || 'Error fetching tournaments');
    } finally {
      setLoading(false);
    }
  };

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

  useEffect(() => {
    fetchTournaments();
  }, []);

  return {
    tournaments,
    newTournament,
    setNewTournament,
    editingTournament,
    setEditingTournament,
    loading,
    error,
    fetchTournaments,
    handleAddTournament,
    handleDeleteTournament,
    handleToggleStatus,
    handleEditTournament,
    handleSaveEdit,
  };
}
