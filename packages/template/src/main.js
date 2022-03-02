import starportLibrary from '@starport/vue'
import { createPinia } from 'pinia'
import { createApp } from 'vue'

import App from './App.vue'
import router from './router'
import store from './store'

let pinia = createPinia()
const app = createApp(App)

app.use(store).use(pinia).use(router).use(starportLibrary).mount('#app')
