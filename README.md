# Library of Vue components for Starport

## Install

```
npm add @tendermint/vue
```

First, import a `cosmos` Vuex module:

```js
// src/store/index.js
import cosmos from "@tendermint/vue/src/store/cosmos.js";

export default new Vuex.Store({
  modules: { cosmos },
});
```

Then, dispatch a `cosmos/init` Vuex action:

```js
// src/App.vue
export default {
  created() {
    this.$store.dispatch("cosmos/init");
  },
};
```

Finally, import components:

```js
// src/views/Index.vue
import * as sp from "@tendermint/vue";

export default {
  components: { ...sp },
};
```

## Configure

| Environment variable     | Default value                      |
| ------------------------ | ---------------------------------- |
| `VUE_APP_ADDRESS_PREFIX` | `cosmos`                           |
| `VUE_APP_API_COSMOS`     | `"http://localhost:1317"`          |
| `VUE_APP_API_TENDERMINT` | `"http://localhost:26657"`         |
| `VUE_APP_API_WS`         | `"ws://localhost:26657/websocket"` |

Variable values can be changed in the [`.env` file](https://cli.vuejs.org/guide/mode-and-env.html#environment-variables).