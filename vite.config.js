import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

const repoName = process.env.GITHUB_REPOSITORY?.split('/').pop();

export default defineConfig({
  base: repoName ? `/${repoName}/` : '/',
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
