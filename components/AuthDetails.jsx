'use client';

import React, { useState, useEffect } from "react";
import { auth } from "../lib/firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { useRouter } from "next/navigation";
import "../styles/styles.css";

const AuthDetails = () => {
  const [user, setUser] = useState(null);
  const router = useRouter();
  const adminEmail = 'admin@gameover.com'; 

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });

    return () => unsubscribe();
  }, []);

  const handleLogout = () => {
    signOut(auth)
      .then(() => {
        console.log("User signed out");
        router.push("/");
      })
      .catch((error) => console.error("Sign Out Error:", error));
  };

  return (
    <div className="auth-details">
      {user ? (
        <div>
          <p className="authdetails-msg">
            {user?.email === adminEmail ? (
              <>
                Administrative access granted<br />
                <strong>{user?.email}</strong>
              </>
            ) : (
              <>
                Let the games begin<br />
                <strong>{user?.email}</strong>
              </>
            )}
          </p>

          <button className="btn logout-btn" onClick={handleLogout}>
          Logout
        </button>
      </div>
    ) : null} 
  </div>
);
};

export default AuthDetails;