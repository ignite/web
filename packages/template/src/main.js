import starportLibrary from '@starport/vue'
import { createApp } from 'vue'

import App from './App.vue'
import router from './router'
import store from './store'

import config from '../starport.config'

store.dispatch('common/env/init', config.env)

const app = createApp(App)
app.use(store).use(router).use(starportLibrary).mount('#app')
