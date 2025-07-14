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
<<<<<<< HEAD
    allowedHosts: ['vite-50a2.onrender.com'],
  },
})
=======
    port: 10000, // or leave this out to use $PORT
    allowedHosts: 'all',
  },
})
>>>>>>> 57b04545a40f2e3b20aadb9a2964d77b185b01d0
