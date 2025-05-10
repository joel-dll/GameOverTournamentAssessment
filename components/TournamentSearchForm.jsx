'use client';

import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

export default function TournamentSearchForm({ onSearch }) {
  const { t } = useTranslation();
  const [mounted, setMounted] = useState(false);

  const [title, setTitle] = useState('');
  const [date, setDate] = useState('');
  const [location, setLocation] = useState('');

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="search-form">
      <input placeholder={t('gameTitle')} value={title} onChange={(e) => setTitle(e.target.value)} />
      <input type="date" value={date} onChange={(e) => setDate(e.target.value)} />
      <input placeholder={t('location')} value={location} onChange={(e) => setLocation(e.target.value)} />
      <button onClick={() => onSearch({ title, date, location })}>{t('search')}</button>
    </div>
  );
}
