import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    port: 3000, // Vite Dev Server Port
    proxy: {
      '/api': {
        target: 'http://localhost:4000', // Express server running on port 4000
        changeOrigin: true,
        secure: false, // Set to true if using HTTPS
        rewrite: (path) => path.replace(/^\/api/, '') // Optional: removes "/api" from request path
      }
    }
  }
})