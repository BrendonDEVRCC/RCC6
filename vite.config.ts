import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/', // Garante que os caminhos sejam relativos à raiz
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
  }
});
