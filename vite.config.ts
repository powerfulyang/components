import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import * as path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  root: path.resolve(__dirname, 'site'),
  build: {
    outDir: path.resolve(__dirname, 'build'),
    emptyOutDir: true,
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        includePaths: [path.resolve(__dirname, 'src/styles')],
      },
    },
  },
  server: {
    proxy: {
      '/api': {
        target: 'https://api.powerfulyang.com',
        changeOrigin: true,
      },
    },
  },
  define: {
    'process.env.SITE': JSON.stringify(process.env.SITE),
  },
});
