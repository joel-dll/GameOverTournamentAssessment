'use client';

import { useState, useEffect } from 'react';
import '/styles/styles.css'; // make sure your styles are properly imported

export default function AdminRegistrations() {
  const [registrations, setRegistrations] = useState([]);

  useEffect(() => {
    fetchRegistrations();
  }, []);

  const fetchRegistrations = async () => {
    try {
      const res = await fetch('/api/admin/registrations');
      const data = await res.json();
      setRegistrations(data);
    } catch (err) {
      console.error('Failed to fetch registrations:', err);
    }
  };

  return (
    <div className="admin-registrations">
      <h2>Registrations List</h2>

      {registrations.length === 0 ? (
        <p>No registrations found.</p>
      ) : (
        <table className="registrations-table">
          <thead>
            <tr>
              <th>User</th>
              <th>Game Title</th>
              <th>Date</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {registrations.map((reg) => (
              <tr key={reg.id}>
                <td>{reg.user_id}</td>
                <td>{reg.game_title}</td>
                <td>{reg.date}</td>
                <td>{reg.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}
