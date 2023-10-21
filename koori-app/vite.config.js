// vite.config.js
import { defineConfig } from 'vite'

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: 'index.html',
        about: 'about.html',
        request: 'request.html',
        contact: 'contact.html'
        // Add more entry files if you have more pages
      }
    }
  },
  // Define base URL
  base: '/',
  // Define the output directory
  outDir: 'dist'
})
