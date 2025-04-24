'use client';
import React, { useState } from 'react';
import { auth } from '../../lib/firebase';
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider
} from 'firebase/auth';
import { useRouter } from 'next/navigation';

const provider = new GoogleAuthProvider();

export default function AuthForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const router = useRouter();

  const handleSignIn = async (e) => {
    e.preventDefault();
    setError('');
    try {
      await signInWithEmailAndPassword(auth, email, password);
      router.push('/dashboard');
    } catch (err) {
      setError(err.message);
    }
  };

  const handleSignUp = async (e) => {
    e.preventDefault();
    setError('');
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      router.push('/dashboard');
    } catch (err) {
      setError(err.message);
    }
  };

  const handleGoogleLogin = async () => {
    setError('');
    try {
      await signInWithPopup(auth, provider);
      router.push('/dashboard');
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <form className="auth-container">
      <div className="inputs-style">
        <input
          type="email"
          className="input-window"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          className="input-window"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </div>

      <div className="auth-buttons">
        <button className="btn" onClick={handleSignIn}>Sign In</button>
        <button className="btn" onClick={handleSignUp}>Sign Up</button>
        <button className="btn" type="button" onClick={handleGoogleLogin}>
          Sign in with Google
        </button>
      </div>

      {error && <p style={{ color: 'red', marginTop: '1rem' }}>{error}</p>}
    </form>
  );
}
