import { fileURLToPath, URL } from "node:url";

import tailwindcss from "@tailwindcss/vite";
import vue from "@vitejs/plugin-vue";
import { defineConfig } from "vite";
import { nodePolyfills } from "vite-plugin-node-polyfills";
import vueDevTools from "vite-plugin-vue-devtools";
// https://vite.dev/config/
export default defineConfig({
  plugins: [
    nodePolyfills({
      // Whether to polyfill specific globals.
      globals: {
        Buffer: true, // can also be 'build', 'dev', or false
        global: true,
        process: true,
      },
    }),
    vue(),
    vueDevTools(),
    tailwindcss()
  ],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL(
        "./src",
        import.meta.url
      ))
    },
  },
});
