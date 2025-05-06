import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vite.dev/config/
export default defineConfig({
  base: '/vueTest',
  plugins: [vue()],
  test: {
    globals: true,
    environment: 'jsdom',
  },
  server: {
    cors: {
      origin: ['https://dovile-mart.github.io'],
      methods: 'GET,HEAD,PUT,PATCH,DELETE'
    },
  },
})
