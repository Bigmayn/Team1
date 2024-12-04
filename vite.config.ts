import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist' // Ensure the output directory is set to 'dist'
  },
  base: './', // Use a relative base path for easier deployment
  optimizeDeps: {
    exclude: ['lucide-react'], // Keeping your original configuration here
  },
});
