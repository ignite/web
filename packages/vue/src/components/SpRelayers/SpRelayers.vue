<template>
	<div class="sp-relayers" v-if="depsLoaded">
		<SpRelayer
			v-for="relayer in relayers"
			v-bind:key="relayer.name"
			relayer="relayer"
		/>
		<div class="sp-relayer-add sp-box">
			<div class="sp-header">Add relayer</div>
			<form class="sp-relayer-add__form">
				<div class="sp-form-group">
					<input
						class="sp-input"
						v-model="relayerForm.name"
						placeholder="Name"
					/>
				</div>
				<div class="sp-form-group">
					<input
						class="sp-input"
						v-model="relayerForm.endpoint"
						placeholder="Endpoint"
					/>
				</div>
				<div class="sp-form-group">
					<input
						class="sp-input"
						v-model="relayerForm.prefix"
						placeholder="prefix"
					/>
				</div>
				<div class="sp-form-group">
					<input
						class="sp-input"
						v-model="relayerForm.gasPrice"
						placeholder="Gas Price"
					/>
				</div>
			</form>
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
		relayers() {
			return this.$store.getters['common/relayers/getRelayers']
		}
	},
	methods: {}
}
</script>
