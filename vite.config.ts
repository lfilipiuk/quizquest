import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import AutoImport from "unplugin-auto-import/vite";

export default defineConfig(() => {
  return {
    plugins: [
      react(),
      AutoImport({
        imports: ["vitest"],
        dts: true, // generate TypeScript declaration
      }),
    ],
    resolve: {
      alias: {
        '@': '/src'
      }
    }
  };
});