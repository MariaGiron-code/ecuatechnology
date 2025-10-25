import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: './', // 👈 esto soluciona los errores de rutas en producción (Vercel, GitHub Pages, etc.)
})
