<template>
	<div v-if="state.initialized">
		<SpTheme>
			<SpWallet />
			<SpTx v-if="address" :fromAddress="address" />
		</SpTheme>
	</div>
</template>

<script lang="ts">
import { computed, onMounted, reactive } from 'vue'
import { useStore } from 'vuex'
import { SpTheme, SpWallet, SpTx } from '@starport/vue'

export interface State {
	initialized: Boolean
}

export let initialState = {
	initialized: false
}

export default {
	components: { SpTheme, SpWallet, SpTx },

	setup() {
		// store
		let $s = useStore()

		// state
		let state: State = reactive(initialState)

		// lh
		onMounted(async () => {
			await $s.dispatch('common/env/init')
			state.initialized = true
		})

		// computed
		let address = computed(() => $s.getters['common/wallet/address'])

		return {
			//state,
			state,
			// computed
			address
		}
	}
}
</script>
