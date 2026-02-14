import { defineConfig } from 'vite'
import { resolve } from 'path'

// https://vitejs.dev/config/
export default defineConfig({
    base: '/openneural/',
    build: {
        rollupOptions: {
            input: {
                main: resolve(__dirname, 'index.html'),
                research: resolve(__dirname, 'research.html'),
                infrastructure: resolve(__dirname, 'infrastructure.html'),
                initiatives: resolve(__dirname, 'initiatives.html'),
                corporation: resolve(__dirname, 'corporation.html'),
            },
        },
    },
})
