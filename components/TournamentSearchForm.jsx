'use client';
import { useState } from 'react';

export default function TournamentSearchForm({ onSearch }) {
  const [title, setTitle] = useState('');
  const [date, setDate] = useState('');
  const [location, setLocation] = useState('');

  return (
    <div className="search-form">
      <input placeholder="Game Title" value={title} onChange={(e) => setTitle(e.target.value)} />
      <input type="date" value={date} onChange={(e) => setDate(e.target.value)} />
      <input placeholder="Location" value={location} onChange={(e) => setLocation(e.target.value)} />
      <button onClick={() => onSearch({ title, date, location })}>Search</button>
    </div>
  );
}
