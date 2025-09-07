import { defineConfig } from 'vite';

export default defineConfig({
  // Base public path when served in development or production
  base: './',
  
  // Development server configuration
  server: {
    port: 3000,
    open: true,
    host: true,
    cors: true,
  },
  
  // Build configuration
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    sourcemap: true,
    minify: 'terser',
    rollupOptions: {
      input: {
        main: './index.html'
      },
      output: {
        manualChunks: {
          vendor: ['tailwindcss'],
        }
      }
    }
  },
  
  // CSS configuration
  css: {
    devSourcemap: true,
  },
  
  // Plugin configuration
  plugins: [],
  
  // Define global constants
  define: {
    __APP_VERSION__: JSON.stringify(process.env.npm_package_version),
  },
  
  // Optimize dependencies
  optimizeDeps: {
    include: ['tailwindcss']
  },
  
  // Preview server configuration
  preview: {
    port: 4173,
    open: true,
    host: true,
  }
});
