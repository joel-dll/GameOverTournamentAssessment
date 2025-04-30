'use client';

import React from 'react';
import '../styles/styles.css';
import Image from 'next/image';
import AuthForm from '../components/auth/AuthForm';


export default function Home() {
  return (
    <div className="login-container">
      {/* background video */}
      <video autoPlay loop muted className="video-bg">
        <source src="/images/GameOver.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* title and subtitle */}
      <div className="title-container">
        <h2 className="h2-title">- European Tournament -</h2>
        <h1 className="title">Game Over</h1>
      </div>

      {/* year text */}
      <div className="year-text">2025</div>

      <AuthForm />

      {/* social media icons */}
      <div className="social-icons">
        <a href="https://facebook.com" target="_blank">
          <Image src="/images/facebook-icon.png" alt="Facebook" width={24} height={24} className="social-icon" />
        </a>
        <a href="https://instagram.com" target="_blank">
          <Image src="/images/instagram.png" alt="Instagram" width={24} height={24} className="social-icon" />
        </a>
        <a href="https://twitter.com" target="_blank">
          <Image src="/images/x.png" alt="X/Twitter" width={24} height={24} className="social-icon" />
        </a>
      </div>

      {/*footer */}
      <div className="footer">
        <p>© 2025 Joel Freitas. All rights reserved.</p>
      </div>
    </div>
  );
}
