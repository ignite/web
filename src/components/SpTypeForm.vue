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
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;531;600;700;800&display=swap');

.container {
	font-family: 'Inter';
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
			type: String
		},
		fields: {
			default: () => []
		},
		preflight: {
			default: () => {
				return obj => obj
			}
		},
		module: {
			type: String
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
			return !!this.$store.state.cosmos.bank.account.address
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
					body: this.preflight(this.fieldsList),
					module: this.module
				}
				await this.$store.dispatch('cosmos/module/entitySubmit', payload)
				await this.$store.dispatch('cosmos/module/entityFetch', {
					type: this.type,
					body: this.fieldsList,
					module: this.module
				})
				this.flight = false
				Object.keys(this.fieldsList).forEach(f => {
					this.fieldsList[f] = ''
				})
			}
		}
	}
}
</script>
