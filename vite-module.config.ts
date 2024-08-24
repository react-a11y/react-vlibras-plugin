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
      fileName: (format) => `react-vlibras-plugin.${format}.js`, // Ensure proper file naming
    },
    rollupOptions: {
      external: ['react'], // Externalize peer dependencies
      output: {
        globals: {
          react: 'React', // Ensure proper global variable for UMD build
        },
        // Optimize the output format
        sourcemap: false, // Optional: Enable source maps for debugging
        compact: true, // Optional: Minify the output
      },
    },
    target: 'esnext', // Set target to modern JavaScript
    minify: 'terser', // Use Terser for minification
    chunkSizeWarningLimit: 500, // Optional: Set chunk size warning limit (in KB)
  },
});
