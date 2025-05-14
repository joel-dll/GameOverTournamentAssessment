'use client';

import { useEffect, useState } from 'react';
import { FaStar } from 'react-icons/fa';
import { db, auth } from '../lib/firebase';
import { onAuthStateChanged } from 'firebase/auth';
import {
  collection,
  addDoc,
  Timestamp,
  getDocs
} from 'firebase/firestore';

export default function ReviewForm() {
  const [userId, setUserId] = useState('');
  const [tournamentId, setTournamentId] = useState('');
  const [rating, setRating] = useState(5);
  const [comment, setComment] = useState('');
  const [tournamentList, setTournamentList] = useState([]);

 
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user?.email) {
        setUserId(user.email);
      } else {
        setUserId('');
      }
    });

    return () => unsubscribe();
  }, []);


  useEffect(() => {
    const fetchTournaments = async () => {
      try {
        const snapshot = await getDocs(collection(db, 'tournaments'));
        const results = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setTournamentList(results);
      } catch (error) {
        console.error('Error fetching tournaments:', error);
      }
    };

    fetchTournaments();
  }, []);

 
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!userId || !tournamentId) {
      alert('Please log in and select a tournament.');
      return;
    }

    try {
      const selectedTournament = tournamentList.find(t => t.id === tournamentId);
      const reviewRef = collection(db, 'reviews', tournamentId, 'comments');

      await addDoc(reviewRef, {
        userId,
        rating,
        comment,
        game_title: selectedTournament?.game_title || '',
        timestamp: Timestamp.now(),
      });

      alert('Review submitted!');
      setComment('');
      setTournamentId('');
    } catch (error) {
      console.error('Error submitting review:', error);
      alert('Failed to submit review.');
    }
  };

  return (
    <div className="review-form">
      <form onSubmit={handleSubmit} style={{ marginBottom: '2rem' }}>
        <h3>Leave a Review</h3>

        <label className="tournament-select">
          Tournament:
          <select
            value={tournamentId}
            onChange={(e) => setTournamentId(e.target.value)}
            required
          >
            <option   value="">Select a tournament...</option>
            {tournamentList.map((t) => (
              <option key={t.id} value={t.id}>
                {t.game_title} – {t.date} ({t.location})
              </option>
            ))}
          </select>
        </label>

        <br /><br />

        <label style={{ display: 'block', marginTop: '9px' }}>
            Rating:
            <div style={{ display: 'flex', justifyContent: 'center', gap: '3px', marginTop: '5px'}}>
                {[1, 2, 3, 4, 5].map((n) => (
                    <FaStar
                        key={n}
                        size={24}
                        onClick={() => setRating(n)}
                        style={{ cursor: 'pointer' }}
                        color={n <= rating ? '#ffc107' : '#e4e5e9'}
                    />
                ))}
            </div>
        </label>

        <br /><br />

        <textarea
          className="comment-input"
          placeholder="Write your feedback..."
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          required
        />

        <br />

        <button type="submit" className="btnclose">
          Submit Review
        </button>
      </form>
    </div>
  );
}
