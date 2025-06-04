import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  css: {
    devSourcemap: true, // ✅ CSS Source Maps Enable
  },
  assetsInclude: ['**/*.PNG'],
})


