import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css'; // Import your styles (ensure this file exists)
import App from './App.jsx';  // Ensure App.jsx is in the same directory

// Initialize theme (light/dark mode)
const savedTheme = localStorage.getItem('theme') || 
                  (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
document.documentElement.classList.add(savedTheme);

// Render the app
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>
);
