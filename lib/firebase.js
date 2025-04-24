import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyDnnZyBbKPFUsWAIlIePksgRg3dlJjRmek",
  authDomain: "game-over-tournament.firebaseapp.com",
  projectId: "game-over-tournament",
  storageBucket: "game-over-tournament.appspot.com",
  messagingSenderId: "300576503315",
  appId: "1:300576503315:web:443fe9cc5f031ffb6531e6"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
