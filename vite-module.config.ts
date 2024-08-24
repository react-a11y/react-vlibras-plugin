import { resolve } from 'path';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    lib: {
      entry: resolve(__dirname, 'src/main-module.tsx'),
      name: 'ReactVLibras',
      fileName: 'react-vlibras-plugin', // For ES Module, fileName should be without format
      formats: ['es'], // Ensure that only ES module format is generated
    },
    rollupOptions: {
      external: ['react'], // Externalize peer dependencies
      output: {
        // No need for globals in ES module format
        globals: {},
        sourcemap: false, // Optional: Disable source maps if not needed
        compact: true, // Optional: Minify the output
      },
    },
    target: 'esnext', // Set target to modern JavaScript
    minify: 'terser', // Use Terser for minification
    chunkSizeWarningLimit: 500, // Optional: Set chunk size warning limit (in KB)
  },
});
