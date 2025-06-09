import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'


import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyCvUH5nKkzzk_igypLGB2K2ZfAZKcRmQAA",
  authDomain: "daily-day-1d0d4.firebaseapp.com",
  projectId: "daily-day-1d0d4",
  storageBucket: "daily-day-1d0d4.firebasestorage.app",
  messagingSenderId: "543924415046",
  appId: "1:543924415046:web:aa4944420f6ae13900b847"
};


const app = initializeApp(firebaseConfig);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
