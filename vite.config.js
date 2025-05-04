import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
// import tailwindcssMotion from "tailwindcss-motion"; 


// https://vite.dev/config/
export default defineConfig({
  plugins: [ tailwindcss(),react()],
})
