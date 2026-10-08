import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'
import { visualizer } from 'rollup-plugin-visualizer';

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    visualizer({ open: false, filename: 'stats.html' })
  ],
  preview: {
    host: '0.0.0.0',
    port: 10000, // or leave this out to use $PORT
    allowedHosts: ['vite-50a2.onrender.com'],
  },
})
