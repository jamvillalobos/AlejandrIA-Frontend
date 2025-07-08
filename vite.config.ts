// Import '@vitejs/plugin-react' to enable React support in Vite
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// Add Node.js types for process.env
/// <reference types="node" />

// This Vite configuration file sets up a React project with specific build and server settings
// It includes plugins for React, specifies the output directory for the build, enables source maps,
// and configures a proxy for API requests to a backend server.
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
