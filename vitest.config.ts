/// <reference types="vitest" />
/// <reference types="vite/client" />

import { defineConfig } from 'vitest/config'
export default defineConfig({
    test: {
        globals: true,
        environment: 'jsdom',
        setupFiles: './setup.ts',
        // you might want to disable it, if you don't have tests that rely on CSS
        // since parsing CSS is slow
        css: true,
    },
})