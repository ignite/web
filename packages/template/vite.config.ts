import { nodeResolve } from '@rollup/plugin-node-resolve'
import vue from '@vitejs/plugin-vue'
import { Buffer } from 'buffer'
import { defineConfig } from 'vite'
import { dynamicImport } from 'vite-plugin-dynamic-import'
import envCompatible from 'vite-plugin-env-compatible'

// https://vitejs.dev/config/
export default defineConfig({
	resolve: {
		alias: {
			// "@": path.resolve(__dirname, "./src"),
		}
	},
	define: {
		// 'process.env': process.env,
		global: {
			Buffer: Buffer,
		}
	},
	plugins: [vue(), nodeResolve(), dynamicImport(), envCompatible()],
})
