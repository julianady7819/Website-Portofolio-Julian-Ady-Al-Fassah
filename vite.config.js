import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  base: "/Website-Portofolio-Julian-Ady-Al-Fassah/",
  plugins: [
    react(),        
    tailwindcss(),
  ],
})