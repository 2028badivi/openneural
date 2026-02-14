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
                leadership: resolve(__dirname, 'leadership.html'),
                programs: resolve(__dirname, 'programs.html'),
                olympiad: resolve(__dirname, 'olympiad.html'),
            },
        },
    },
})
