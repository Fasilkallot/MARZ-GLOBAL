import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/MARZ-GLOBAL/',
  plugins: [react()],
  resolve: {
    alias: {
      '@': '/src',
    },
  },
})
