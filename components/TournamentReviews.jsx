'use client';

import { useEffect, useState } from 'react';
import { db } from '../lib/firebase';
import {
  collectionGroup,
  onSnapshot,
  query,
  orderBy
} from 'firebase/firestore';
import { format } from 'date-fns';

export default function AllTournamentReviews() {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const q = query(
      collectionGroup(db, 'comments'),
      orderBy('timestamp', 'desc')
    );

    const unsubscribe = onSnapshot(q, (snapshot) => {
      const results = snapshot.docs.map(doc => {
        const data = doc.data();
        const tournamentId = doc.ref.parent.parent.id;
        return {
          ...data,
          tournamentId,
        };
      });
      setReviews(results);
    });

    return () => unsubscribe();
  }, []);

  return (    
    <div className="admin-registrations">
      <h3 style={{ marginTop: '10px' }}> All Tournament Reviews</h3>

      {reviews.length === 0 ? (
        <p>No reviews submitted yet.</p>
      ) : (
        <ul className="registration-list">
          {reviews.map((r, i) => (
            <li
              key={i}
              style={{
                padding: '12px',
                borderBottom: '1px solid #ccc',
                textAlign: 'left',
                width: '90%'
              }}
            >
              <p><strong>Game:</strong> {r.game_title || r.tournamentId}</p>
              <p><strong>Comment:</strong> {r.comment}</p>
              <p><strong>Rating:</strong> {r.rating}</p>
              <p>
                <strong>Date:</strong>{' '}
                {r.timestamp?.toDate
                  ? format(r.timestamp.toDate(), 'dd MMM yyyy HH:mm')
                  : 'N/A'}
              </p>
              <p><strong>User:</strong> {r.userId}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
