import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  // GitHub Pages project site served from https://opensourcekingprojects.github.io/resumebuilder/
  // Adjust base if you later serve from a different path or custom domain.
  base: '/resumebuilder/',
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src')
    }
  },
  server: {
    historyApiFallback: true,
  },
   build: {
    outDir: 'dist',
    sourcemap: true
  },
});
