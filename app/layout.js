'use client';

import { usePathname, useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { auth } from '../lib/firebase';
import { signOut } from 'firebase/auth';
import '../styles/styles.css';
import AuthDetails from '../components/AuthDetails';



export default function RootLayout({ children }) {
  const pathname = usePathname();
  const router = useRouter();
  const [userEmail, setUserEmail] = useState(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setUserEmail(user?.email || null);
    });

    return () => unsubscribe();
  }, []);

  const handleLogout = async () => {
    await signOut(auth);
    router.push('/');
  };

  const isUserPage = pathname === '/user';
  const isAdminPage = pathname === '/admin';

  return (
    <html lang="en">
      <head>
        {/* Google Fonts */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link
          href="https://fonts.googleapis.com/css2?family=Play:wght@400;700&family=Poppins:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body style={{ fontFamily: "'Play', 'Poppins', sans-serif" }}>
        {(isUserPage || isAdminPage) && <div className="backgroundpicture" />}
        {(isUserPage || isAdminPage) && <AuthDetails />}
        <main style={{ position: 'relative', zIndex: 1 }}>{children}</main>

       
      </body>
    </html>
  );
}
