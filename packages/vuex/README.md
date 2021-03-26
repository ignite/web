# `@starport/vuex`

A collection of Vuex store modules to help build [Starport](http://github.com/tendermint/starport) front-end applications in combination with the [Starport Vue  components library](https://github.com/tendermint/vue/tree/develop/packages/vue) `@starport/vue`.

## Install

Assuming you have a Vue 3 project, just run:

```
npm install --save vuex/next
npm install --save @starport/vuex
```

## Usage

First, create a config file in your store root `./store/config.js`.

```
// config.js
import { env, starport, blocks, wallet,transfers } from '@starport/vuex' // Import the modules you require

export default function init(store) { // Init just the modules you require
	transfers(store)
	starport(store)
	blocks(store)
	env(store)
	wallet(store)
}
```

Then, in your app `./store/index.js` file:

```
// index.js
import { createStore } from 'vuex'
import init from './config'

// Create your own app's store as usual
const store = createStore({  
	state() {
		return {}
	},
	mutations: {},
	actions: {}
});

// Init @starport/vuex
init(store);

// Export your store
export default store;
```

Finally, initialize the `env` store by dispatching the init action in the appropriate part of your app:

```
await this.$store.dispatch('common/env/init')
```

or with a specific configuration:

```
await this.$store.dispatch('common/env/init',{
				apiNode: 'http://localhost:1317',
				rpcNode: 'http://localhost:26657',
				wsNode: 'ws://localhost:26657/websocket',
				chainId: 'my-chain',
				addrPrefix: 'cosmos',
				sdkVersion: 'Stargate',
				getTXApi: 'http://localhost:26657/tx?hash=0x'
			})
```

## Modules

The registered modules for this package are:

### env 

Registered as `common/env`, this module provides basic environment setup, connection to API, RPC, and WS nodes, connection statuses, and access to the underlying `@starport/client-js` [client](https://github.com/tendermint/vue/tree/develop/packages/client-js).

```
// Getter signatures
	getters: {
		client: (state) => state.client,
		signingClient: (state) => state.client.signingClient,
		apiTendermint: (state) => state.rpcNode,
		apiCosmos: (state) => state.apiNode,
		apiWS: (state) => state.wsNode,
		sdkVersion: (state) => state.sdkVersion,
		apiConnected: (state) => state.apiConnected,
		rpcConnected: (state) => state.rpcConnected,
		wsConnected: (state) => state.wsConnected,
	},
```

### Starport

Registered as `common/starport`, use this module if you are doing local development on a [Starport](http://github.com/tendermint/starport)-launched chain. This module configures the `env` module using the Starport `:12345/status` endpoint.

### Blocks

Registered as `common/blocks`, this module receives, stores, and decodes the latest 20 blocks (configurable) as the blocks appear in the WebSocket API.

The blocks module provides these getters:

- `getBlocks(no_of_latest_blocks_to_get)`
- `getBlockByHeight(height)`


### Transfers

Registered as `common/transfers`, this module is a temporary handcoded version until an auto-generated (by Starport) vuex store is available for the Cosmos SDK TX module (https://github.com/cosmos/cosmos-sdk/tree/master/proto/cosmos/tx/v1beta1).

The querying action is:

```
ServiceGetTxsEvent({ commit, rootGetters }, { subscribe = false, all=true,  ...key })
```

The getter is:

```
getGetTxsEvent(params)
```

To query for all token transfers received by `cosmos1xv9tklw7d82sezh9haa573wufgy59vmwe6xxe5`, first dispatch the querying action like: 

```
await this.$store.dispatch('common/transfers/ServiceGetTxsEvent', {
  subscribe: true,
  event: 'transfer.recipient%3D%27cosmos1xv9tklw7d82sezh9haa573wufgy59vmwe6xxe5%27'
});
```

and then access the resulting state anywhere in your app like:

```
this.$store.getters['common/transfers/getGetTxsEvent']({
  event: 'transfer.recipient%3D%27cosmos1xv9tklw7d82sezh9haa573wufgy59vmwe6xxe5%27'
})
```

To learn more about the WebSocket events you can query, see the [Tendermint RPC WebSocket](https://docs.tendermint.com/master/rpc/#/Websocket/subscribe) docs.

The `subscribe` flag in the action dispatch configures auto-updates for the store as new transactions occur.

### Wallet

Registered as `common/wallet`, this module provides wallet-handling, sign in and sign out fuctionalities, and encrypted persistence in the browser's local storage.

Creating a new wallet:
```
await this.$store.dispatch('common/wallet/createWalletWithMnemonic', 		{
				name: "My Wallet",
				mnemonic: "web fat decorate draw waste shiver toddler entire knee until board rent robust acid spatial hockey tobacco buddy buffalo flavor mass bridge report pioneer",
				HDpath: "m/44'/118'/0'/0/", // BIP32/44 derivation path
				prefix: "cosmos", // Address prfix for this chain
				password: "password" 
			}
```

These examples show how to use the wallet module.

Listing wallets in local storage:
```
const walletList = this.$store.common.wallet.wallets
```

Unlocking a specific wallet from the wallet list and signing in:
```
await this.$store.dispatch('common/wallet/unlockWallet', {
  name: "My Wallet",
  password: "password"
});
```

Accessing signed in and signed out status:
```
const loggedInStatus = this.$store.getters['common/wallet/loggedIn'];
```

Signing out:
```
await this.$store.dispatch('common/wallet/signOut');
``` 

Adding the next available account to the current wallet:
```
await this.$store.dispatch('common/wallet/addAccount');
```

Adding an account with a specific HD Path increment to the current wallet:
```
await this.$store.dispatch('common/wallet/addAccount', 3); // Assuming wallet's HD Path is "m/44'/118'/0'/0/", will add account corresponding to "m/44'/118'/0'/0/3"
```

Switch to using a different account in the current wallet:
```
await this.$store.dispatch('common/wallet/switchAccount', 'cosmos1xv9tklw7d82sezh9haa573wufgy59vmwe6xxe5'); // Account with this address must exist in the current wallet
```

Accessing current wallet name:
```
const walletName = this.$store.getters['common/wallet/walletName'];
```

Accessing name of last wallet used:
```
const lastWallet = this.$store.getters['common/wallet/lastWallet'];
```

Accessing currently active unlocked wallet:
```
const wallet = this.$store.getters['common/wallet/wallet'];
```

Accessing currently active address in wallet:
```
const address = this.$store.getters['common/wallet/address'];
```

Inquiring if a wallet name is already in use:
```
const isAvailable = this.$store.getters['common/wallet/nameAvailable'](walletNameToCheck);
```
