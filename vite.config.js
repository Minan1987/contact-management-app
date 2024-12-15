import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/contact-management-app/',
  build: {
    outDir: 'dist',
  },
  plugins: [react()],
  assetsInclude: ['**/*.JPG', '**/*.jpg'],

})
