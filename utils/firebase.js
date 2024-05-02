import { useEffect, useState } from 'react';
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyC0jRaEosVqCYEo7TVT1CukL7InDKKjm5I",
  authDomain: "e-commerce-shop-25c48.firebaseapp.com",
  projectId: "e-commerce-shop-25c48",
  storageBucket: "e-commerce-shop-25c48.appspot.com",
  messagingSenderId: "861084465044",
  appId: "1:861084465044:web:0f6d68a4982c02ecb0c181",
  measurementId: "G-80FHXZDB2Y"
};

let app;
let analytics;
let auth;

export const useFirebase = () => {
  const [firebaseInitialized, setFirebaseInitialized] = useState(false);

  useEffect(() => {
    if (!firebaseInitialized && typeof window !== 'undefined') {
      app = initializeApp(firebaseConfig);
      analytics = getAnalytics(app);
      auth = getAuth(app);
      setFirebaseInitialized(true);
    }
  }, []);
  
  return { app, analytics, auth };
};
