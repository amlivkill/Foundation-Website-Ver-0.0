import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/Foundation-Website-Ver-0.0/',
  server: {
    proxy: {
      // Jab bhi frontend '/api' use karega, ye use localhost:5000 par bhej dega
      '/api': {
        target: 'http://localhost:5000',
        changeOrigin: true,
        secure: false,
      },
    },
  },
})