import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { fileURLToPath } from 'url'
import { dirname, resolve } from 'path'

// Configuration Vite dédiée au frontend
// - root: pointe vers le dossier frontend
// - proxy: redirige les appels /api vers le backend local
const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

export default defineConfig({
  root: __dirname,
  plugins: [react()],
  // Plus d'alias nécessaire, le code a été migré dans frontend/src
  base: '/',
  server: {
    port: 3000,
    open: true,
    proxy: {
      '/api': {
        target: 'http://localhost:5001',
        changeOrigin: true,
        secure: false,
      },
    },
  },
  build: {
    outDir: resolve(__dirname, 'dist'),
    emptyOutDir: true,
  },
  publicDir: resolve(__dirname, '../public'),
})


