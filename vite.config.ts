import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: './', // Ensures paths are relative, which is crucial for deployment
  build: {
    outDir: 'dist', // Specify the build directory
  }
});
