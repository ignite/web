<template>
	<div class="sp-relayer" v-if="depsLoaded"></div>
</template>

<script>
export default {
	name: 'SpRelayer',
	props: {
		relayer: Object
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
		}
	},
	methods: {}
}
</script>
