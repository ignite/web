import starportLibrary from '@starport/vue'
import { createApp } from 'vue'
import { Buffer } from 'buffer'

import App from './App.vue'
import router from './router'

// @ts-ignore
globalThis['Buffer'] = Buffer

const app = createApp(App)
app.use(router).use(starportLibrary).mount('#app')
