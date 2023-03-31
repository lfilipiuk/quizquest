import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import AutoImport from 'unplugin-auto-import/vite'
import * as path from "path";

export default defineConfig({
  plugins: [react(),
    AutoImport({
      imports: ['vitest'],
      dts: true, // generate TypeScript declaration
    }),
  ],
});