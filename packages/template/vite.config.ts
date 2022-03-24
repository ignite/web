import { nodeResolve } from '@rollup/plugin-node-resolve'
import vue from '@vitejs/plugin-vue'
import { Buffer } from 'buffer'
import { defineConfig } from 'vite'
import { dynamicImport } from 'vite-plugin-dynamic-import'
import envCompatible from 'vite-plugin-env-compatible'

// https://vitejs.dev/config/
export default defineConfig({
  define: {
    global: {
      Buffer: Buffer
    }
  },
  server: {
    watch: {
      ignored: [
        '!**/node_modules/@starport/vue/src/**',
        '!**/node_modules/@starport/vue/node_modules/**',
        '!**/node_modules/@ignt/client/**',
        '!**/node_modules/@ignt/vue/**'
      ]
    }
  },
  plugins: [vue(), nodeResolve(), dynamicImport(), envCompatible()],
  optimizeDeps: {
    include: [
      'gradient-avatar',
      'crypto-js',
      'axios',
      'qrcode',
      '@cosmjs/encoding'
    ]
  }
})
