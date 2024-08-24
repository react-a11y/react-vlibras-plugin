import { resolve } from 'path';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    lib: {
      entry: resolve(__dirname, 'src/main-module.tsx'),
      name: 'ReactVLibras',
      fileName: 'react-vlibras-plugin',
      formats: ['es'],
    },
    rollupOptions: {
      external: ['react'],
      output: {
        globals: {},
        sourcemap: false,
        compact: true,
        inlineDynamicImports: true,
        manualChunks: undefined,
        preserveModules: false,
        minifyInternalExports: true,
      },
      treeshake: {
        moduleSideEffects: false,
        tryCatchDeoptimization: false,
        propertyReadSideEffects: false,
        unknownGlobalSideEffects: false,
      },
    },
    target: 'esnext',
    chunkSizeWarningLimit: 500,
  },
});
