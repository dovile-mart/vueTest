import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vite.dev/config/
export default defineConfig({
  base: 'https://github.com/dovile-mart/vueTest.git',
  plugins: [vue()],
  test: {
    globals: true,
    environment: 'jsdom',
  },
})
