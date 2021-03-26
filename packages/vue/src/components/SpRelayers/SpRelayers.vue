<template>
	<div v-if="depsLoaded">
		<div class="sp-relayers__holder">
			<div class="sp-component sp-relayers">
				<div class="sp-relayers__header sp-component-title">
					<h3>Relayer list</h3>
					<span>|</span>
					<span>Your configured relayers</span>
				</div>
				<div class="sp-relayers__main sp-box sp-shadow">
					<div v-for="(relayer, index) in relayers" v-bind:key="relayer.name">
						<div class="sp-line" v-if="index > 0" />
						<SpRelayer :relayer="relayer" />
					</div>
				</div>
			</div>
			<div class="sp-component sp-relayers__add">
				<div class="sp-assets__header sp-component-title">
					<h3>Add a relayer</h3>
				</div>
				<SpButton
					v-on:click="addHubRelayer"
					type="primary"
					v-if="!showRelayerForm && !hasHubRelayer"
					>Connect to Cosmos Hub</SpButton
				>
				<div
					class="sp-relayers__add__or"
					v-if="!showRelayerForm && !hasHubRelayer"
				>
					- or -
				</div>
				<SpButton
					v-on:click="showRelayerForm = true"
					type="primary"
					v-if="!showRelayerForm && !hasHubRelayer"
					>Add custom relayer</SpButton
				>
				<div
					class="sp-relayers__add__main sp-box sp-shadow"
					v-if="showRelayerForm || hasHubRelayer"
				>
					<form class="sp-relayers__add__form">
						<div class="sp-form-group">
							<input
								class="sp-input"
								v-model="relayerForm.name"
								placeholder="Name (e.g. Foochain)"
							/>
						</div>
						<div class="sp-form-group">
							<input
								class="sp-input"
								v-model="relayerForm.endpoint"
								placeholder="Endpoint (e.g. https://rpc.foochain.org)"
							/>
						</div>
						<div class="sp-form-group">
							<input
								class="sp-input"
								v-model="relayerForm.prefix"
								placeholder="Prefix (e.g. foo)"
							/>
						</div>
						<div class="sp-form-group">
							<input
								class="sp-input"
								v-model="relayerForm.gasPrice"
								placeholder="Gas Price (e.g. 0.025ufoo)"
							/>
						</div>
						<div class="sp-relayers__add__btns">
							<SpButton
								v-on:click="showRelayerForm = false"
								type="secondary"
								v-if="!hasHubRelayer"
								>Cancel</SpButton
							>
							<SpButton v-on:click="addRelayer" type="primary"
								>Add Relayer</SpButton
							>
						</div>
					</form>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import SpRelayer from '../SpRelayer'
export default {
	name: 'SpRelayers',
	components: {
		SpRelayer
	},
	data: function () {
		return {
			showRelayerForm: false,
			relayerForm: {
				name: '',
				endpoint: '',
				prefix: '',
				gasPrice: ''
			}
		}
	},
	beforeCreate() {
		let module = ['common', 'wallet']
		for (let i = 1; i <= module.length; i++) {
			let submod = module.slice(0, i)
			if (!this.$store.hasModule(submod)) {
				console.log('Module `common.wallet` has not been registered!')
				this._depsLoaded = false
				break
			}
		}
		module = ['common', 'relayers']
		for (let i = 1; i <= module.length; i++) {
			let submod = module.slice(0, i)
			if (!this.$store.hasModule(submod)) {
				console.log('Module `common.relayers` has not been registered!')
				this._depsLoaded = false
				break
			}
		}
	},
	mounted: function () {},
	computed: {
		depsLoaded() {
			return this._depsLoaded
		},
		hasHubRelayer() {
			return this.relayers.findIndex((x) => x.chainIdB == 'cosmoshub-4') > -1
		},
		relayers() {
			return this.$store.getters['common/relayers/getRelayers']
		}
	},
	methods: {
		async addRelayer() {
			await this.$store.dispatch(
				'common/relayers/createRelayer',
				this.relayerForm
			)
			this.relayerForm = {
				name: '',
				endpoint: '',
				prefix: '',
				gasPrice: ''
			}
		},
		async addHubRelayer() {
			await this.$store.dispatch('common/relayers/createRelayer', {
				name: 'CosmosHub',
				endpoint: 'https://rpc.nylira.net',
				prefix: 'cosmos',
				gasPrice: '0.025uatom'
			})
			this.relayerForm = {
				name: '',
				endpoint: '',
				prefix: '',
				gasPrice: ''
			}
		}
	}
}
</script>
