import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import * as path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  root: './site',
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
});
