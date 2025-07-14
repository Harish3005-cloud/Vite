import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import emailjs from '@emailjs/browser';
import './index.css'
import App from './App.jsx';
// Initialize EmailJS with error handling
try {
  const publicKey = import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY;
  if (!publicKey) {
    throw new Error('EmailJS public key is not defined in environment variables');
  }
  emailjs.init({ publicKey });
  console.log('EmailJS initialized successfully');
} catch (error) {
  console.error('Failed to initialize EmailJS:', error);
}
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
