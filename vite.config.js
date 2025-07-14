import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],
  preview: {
    host: '0.0.0.0',
    allowedHosts: ['vite-50a2.onrender.com'],
    // Do NOT set port here; Render will set it via --port $PORT in your start command
  },
})
