/// <reference types="vitest" />
/// <reference types="vite/client" />

import { defineConfig } from 'vitest/config'
import * as path from "path";
export default defineConfig({
    test: {
        globals: true,
        environment: 'jsdom',
        setupFiles: './setup.ts',
        css: true,
    },
    resolve: {
        alias: {
            '@': path.resolve(__dirname, 'src'),
        },
    },
});