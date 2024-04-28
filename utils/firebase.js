// Import the functions you need from the SDKs you need
import { initializeApp, getApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyC0jRaEosVqCYEo7TVT1CukL7InDKKjm5I",
  authDomain: "e-commerce-shop-25c48.firebaseapp.com",
  projectId: "e-commerce-shop-25c48",
  storageBucket: "e-commerce-shop-25c48.appspot.com",
  messagingSenderId: "861084465044",
  appId: "1:861084465044:web:0f6d68a4982c02ecb0c181",
  measurementId: "G-80FHXZDB2Y"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp()
const analytics = getAnalytics(app);

export const auth = getAuth();