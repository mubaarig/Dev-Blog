// vite.config.ts
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import mdx from '@mdx-js/rollup'
import { VitePWA } from 'vite-plugin-pwa'
import { imagetools } from 'vite-imagetools'

export default defineConfig({
  plugins: [
    react(),
    mdx(),
    imagetools(),
    VitePWA({
      registerType: 'autoUpdate',
      workbox: {
        globPatterns: ['**/*.{js,css,html,ico,png,svg,mdx}']
      },
      manifest: {
        name: 'Dev Blog',
        short_name: 'DevBlog',
        description: 'A developer blog built with React and MDX',
        theme_color: '#3b82f6',
        icons: [
          {
            src: '/icon-192.png',
            sizes: '192x192',
            type: 'image/png'
          },
          {
            src: '/icon-512.png',
            sizes: '512x512',
            type: 'image/png'
          }
        ]
      }
    })
  ],
  optimizeDeps: {
    include: ['react', 'react-dom', 'react-router-dom']
  },
  css: {
    postcss: './postcss.config.js'
  }
})