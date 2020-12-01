<template>
	<div>
		<div class="container">
			<SpH3>New {{ type }}</SpH3>
			<div v-for="field in fields" :key="field">
				<SpInput
					v-model="fieldsList[field]"
					type="text"
					:placeholder="title(field)"
					:disabled="flight"
				/>
			</div>
			<div class="button">
				<SpButton
					:loading="flight"
					:disabled="!valid || !hasAddress || flight"
					@click="submit"
				>
					Create {{ type }}
				</SpButton>
			</div>
			<SpTypeList :type="type" :module="module" />
		</div>
	</div>
</template>

<style scoped>
@import '../styles/main.css';

.container {
	font-family: var(--sp-f-primary);
}
.button {
	display: inline-block;
}
</style>

<script>
import SpInput from './SpInput'
import SpH3 from './SpH3'
import SpButton from './SpButton'
import SpTypeList from './SpTypeList'

export default {
	components: {
		SpInput,
		SpH3,
		SpButton,
		SpTypeList
	},
	props: {
		type: {
			type: String,
			default: ''
		},
		fields: {
			type: Array,
			default: () => []
		},
		preflight: {
			type: Function,
			default: () => {
				return obj => obj
			}
		},
		module: {
			type: String,
			default: ''
		}
	},
	data: function() {
		return {
			fieldsList: {},
			flight: false
		}
	},
	computed: {
		hasAddress() {
			return !!this.$store.state.chain.auth.account.address
		},
		valid() {
			return Object.values(this.fieldsList).every(el => {
				return el.trim().length > 0
			})
		}
	},
	created() {
		;(this.fields || []).forEach(field => {
			this.$set(this.fieldsList, field, '')
		})
	},
	methods: {
		title(string) {
			return string.charAt(0).toUpperCase() + string.slice(1)
		},
		async submit() {
			if (this.valid && !this.flight && this.hasAddress) {
				this.flight = true
				const payload = {
					type: this.type,
					body: this.fieldsList,
					module: this.module
				}
				// await this.$store.dispatch('chain/entitySubmit', payload)
				// await this.$store.dispatch('chain/entityFetch', {
				// 	type: this.type,
				// 	body: this.fieldsList,
				// 	module: this.module
				// })
				this.flight = false
				Object.keys(this.fieldsList).forEach(f => {
					this.fieldsList[f] = ''
				})
			}
		}
	}
}
</script>
