import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

export default defineConfig({
  // Set by the GitHub Pages workflow: "/" for <user>.github.io, "/<repo>/" otherwise.
  base: process.env.BASE_PATH || '/',
  plugins: [react()],
})
