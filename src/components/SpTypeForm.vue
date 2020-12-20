<template>
	<div>
		<div class="container">
			<SpH3>New {{ type }}</SpH3>
			<div v-for="(value, key) in fieldsList" :key="key">
				<SpInput
					v-model="fieldsList[key]"
					type="text"
					:placeholder="title(key)"
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
			<SpTypeList :type="type" :path="path" :module="module" />
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
import { Type, Field } from 'protobufjs'
import { SigningStargateClient } from '@cosmjs/stargate'
import { Registry } from '@cosmjs/proto-signing'

export default {
	components: {
		SpInput,
		SpH3,
		SpButton,
		SpTypeList
	},
	props: {
		path: {
			type: String,
			default: ''
		},
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
			return !!this.$store.state.cosmos.auth.account.address
		},
		valid() {
			return Object.values(this.fieldsList).every(el => {
				return el.trim().length > 0
			})
		}
	},
	created() {
		;(this.fields || []).forEach(field => {
			if (field[0] !== 'creator') {
				this.$set(this.fieldsList, field[0], '')
			}
		})
	},
	methods: {
		title(string) {
			return string.charAt(0).toUpperCase() + string.slice(1)
		},
		async submit() {
			if (this.valid && !this.flight && this.hasAddress) {
				const { RPC } = this.$store.state.cosmos.env.env
				const wallet = this.$store.getters['cosmos/wallet']
				const account = this.$store.getters['cosmos/account']
				const from_address = account.address
				const type = this.type.charAt(0).toUpperCase() + this.type.slice(1)
				const typeUrl = `/${this.path}.MsgCreate${type}`
				let MsgCreate = new Type(`MsgCreate${type}`)
				this.fields.forEach(f => {
					MsgCreate = MsgCreate.add(new Field(f[0], f[1], f[2]))
				})
				const registry = new Registry([[typeUrl, MsgCreate]])
				const client = await SigningStargateClient.connectWithWallet(
					RPC,
					wallet,
					{ registry }
				)
				const msg = {
					typeUrl,
					value: {
						creator: from_address,
						...this.fieldsList
					}
				}
				const fee = {
					amount: [{ amount: '0', denom: 'token' }],
					gas: '200000'
				}
				this.flight = true
				try {
					const path = this.path.replace(/\./g, '/')
					await client.signAndBroadcast(from_address, [msg], fee)
					this.$store.dispatch('cosmos/entityFetch', {
						type: this.type,
						path: path
					})
				} catch (e) {
					console.log(e)
				}
				this.flight = false
				Object.keys(this.fieldsList).forEach(f => {
					this.fieldsList[f] = ''
				})
			}
		}
	}
}
</script>
