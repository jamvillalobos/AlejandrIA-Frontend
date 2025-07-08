import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// Add Node.js types for process.env
/// <reference types="node" />

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: '../static',
    emptyOutDir: true,
    sourcemap: true
  },
  server: {
    proxy: {
      '/ask': {
        target: process.env.VITE_BACKEND_URL || 'http://localhost:5000',
        changeOrigin: true,
        secure: false
      },
      '/chat': {
        target: process.env.VITE_BACKEND_URL || 'http://localhost:5000',
        changeOrigin: true,
        secure: false
      }
    }
  }
})
