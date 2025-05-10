'use client';

import React, { useState, useEffect } from "react";
import { auth } from "../lib/firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { useRouter } from "next/navigation";
import "../styles/styles.css";
import { useTranslation } from "react-i18next"; 

const AuthDetails = () => {
  const [user, setUser] = useState(null);
  const router = useRouter();
  const { t } = useTranslation(); 

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
                {t('adminAccess')}<br />
                <strong>{user?.email}</strong>
              </>
            ) : (
              <>
                {t('userAccess')}<br />
                <strong>{user?.email}</strong>
              </>
            )}
          </p>

          <button className="btn logout-btn" onClick={handleLogout}>
            {t('logout')}
          </button>
        </div>
      ) : null}
    </div>
  );
};

export default AuthDetails;
