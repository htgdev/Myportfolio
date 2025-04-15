import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  base: '/Myportfolio/', // 👈 MUST match the repo name exactly
  plugins: [vue()],
})
