import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
const url = String.raw`{wcm}`;


// https://vitejs.dev/config/
export default defineConfig({
  build: {
    outDir: 'docs'
  },
  plugins: [vue()],
   base:'/timeRecord/'
})
