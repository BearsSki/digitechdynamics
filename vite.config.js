import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': '/src',
    },
  },
  esbuild: {
    loader: 'jsx',  // Set the loader for JSX
    include: /src\/.*\.jsx?$/,  // Apply this loader to all .js and .jsx files in the src folder
  },
});
