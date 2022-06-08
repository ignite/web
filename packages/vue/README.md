# `@starport/vue`

A collection of Vue 3 components to help build [Ignite CLI](https://github.com/ignite-hq/cli) front-end applications.

## Install

Assuming you have a Vue 3 project, just run:

```
npm install --save @starport/vue
```

The components also require `@starport/vuex` to be installed that is set as a peer dependency. For more information, see [packages/vuex](https://github.com/ignite-hq/web/tree/develop/packages/vuex).

## Usage

If you want to import the entire library, in your `main.js` file:

```js
import { createApp } from 'vue'
import App from './App.vue'
import store from './store' // See @starport/vuex documentation
import vueLib from '@starport/vue'

const app = createApp(App)
app.use(store).use(vueLib).mount('#app')
```

You can also import only specific components in your `main.js` file:

```js
import { createApp } from 'vue'
import App from './App.vue'
import store from './store' // See @starport/vuex documentation
import { SpTokenTransfer } from '@starport/vue'

const app = createApp(App)
app.use(store).use(SpTokenTransfer).mount('#app')
```

## Components

...
