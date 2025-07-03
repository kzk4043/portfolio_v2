import { defineConfig } from 'vite'

export default defineConfig({
  base: process.env.NODE_ENV === 'production' ? '/portfolio_v2/' : '/',
  build: {
    outDir: 'dist',
    assetsDir: 'assets'
  }
})