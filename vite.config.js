import { defineConfig } from 'vite'
import { resolve } from 'path'

export default defineConfig({
  base: '/WalterAssets/',
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        services: resolve(__dirname, 'services.html'),
        solutions: resolve(__dirname, 'solutions.html'),
        kubernetes: resolve(__dirname, 'kubernetes-center.html'),
        contact: resolve(__dirname, 'contact.html'),
      },
    },
  },
})
