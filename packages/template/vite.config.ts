import { defineConfig } from 'vite'
const path = require('path')

import vue from '@vitejs/plugin-vue'
import envCompatible from 'vite-plugin-env-compatible'
import { dynamicImport } from 'vite-plugin-dynamic-import'
import { nodeResolve } from '@rollup/plugin-node-resolve'

import { Buffer } from 'buffer'

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      // "@": path.resolve(__dirname, "./src"),
    }
  },
  define: {
    'process.env': process.env,
    global: {
      Buffer: Buffer
    }
  },
  plugins: [vue(), nodeResolve(), dynamicImport(), envCompatible()]
})
