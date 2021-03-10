<template>
	<div v-if="depsLoaded">
		<div v-if="balances && balances.length > 0" class="container">
			<SpH3>Send tokens</SpH3>
			<div class="form">
				<div class="token">
					<div class="card token__item">
						<div class="label h3 h3__button" @click="denomChange">
							{{ denom }}
							<SpIconCircle2 v-if="denoms.length > 1" class="h3__icon" />
						</div>
						<div>
							<input
								v-model="amount"
								class="input"
								placeholder="Amount of tokens"
								type="text"
								:disabled="inFlight"
							/>
						</div>
					</div>
				</div>
				<div class="card">
					<div class="label h3">Address</div>
					<div>
						<div>
							<input
								v-model="to_address"
								type="text"
								class="input"
								:disabled="inFlight"
								placeholder="To address"
							/>
						</div>
					</div>
				</div>
				<div class="footer">
					<div>
						<input
							v-model="memo"
							type="text"
							class="input memo"
							:disabled="inFlight"
							placeholder="Add a text message..."
						/>
					</div>
					<SpButton
						:disabled="!(valid.amount && valid.to_address && !inFlight)"
						:loading="inFlight"
						@click="send"
						>Send tokens</SpButton
					>
				</div>
				<div class="log">
					<div class="log__text">
						{{ txResultMessage }}
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<style scoped>
.container {
	font-family: var(--sp-f-primary);
}
.form > * {
	margin-bottom: 10px;
}
.card {
	background: rgb(247, 247, 247);
	width: 100%;
	padding: 1rem;
	border-radius: 0.5rem;
	box-sizing: border-box;
}
.token__item {
	max-width: 225px;
}
.h3 {
	font-size: 0.875rem;
	text-transform: uppercase;
	letter-spacing: 0.05em;
	font-weight: 700;
	user-select: none;
	display: flex;
	align-items: center;
}
.h3__button {
	cursor: pointer;
}
.h3__icon {
	height: 1em;
	width: 1em;
	margin: 0 0.25rem;
	fill: rgba(0, 0, 0, 0.35);
}
.label {
	margin-bottom: 0.5rem;
}
.input {
	width: 100%;
	box-sizing: border-box;
	padding: 0;
	border: none;
	background: none;
	font-size: 1rem;
	font-family: inherit;
	outline: none;
	letter-spacing: 0.02em;
	text-transform: none;
}
.token__item__input::-webkit-input-placeholder {
	color: rgba(0, 0, 0, 0.35);
}
.footer {
	display: grid;
	grid-template-columns: 3fr 1fr;
	grid-gap: 10px;
	box-sizing: border-box;
}
.memo {
	padding: 0.75rem 1rem;
	box-shadow: inset 0 0 0 1px rgba(0, 0, 0, 0.1);
	border-radius: 0.5rem;
}
.log__text {
	display: flex;
	justify-content: flex-end;
	font-size: 0.75rem;
	color: rgba(0, 0, 0, 0.35);
}
</style>

<script>
import SpH3 from '../SpH3'
import SpIconCircle2 from '../SpIconCircle2'
import SpButton from '../SpButton'
import { Bech32 } from '@cosmjs/encoding'

export default {
	name: 'SpTokenSend',
	components: {
		SpH3,
		SpIconCircle2,
		SpButton
	},
	category: 'wallet',
	props: {
		address: String
	},
	data() {
		return {
			amount: '',
			to_address: '',
			memo: '',
			denomIndex: 0,
			inFlight: false,
			txResult: '',
			bankAddress: ''
		}
	},
	beforeCreate() {
		const module = ['cosmos', 'cosmos-sdk', 'cosmos.bank.v1beta1']
		for (let i = 1; i <= module.length; i++) {
			let submod = module.slice(0, i)
			if (!this.$store.hasModule(submod)) {
				console.log('Module `cosmos.cosmos-sdk.bank` has not been registered!')
				this._depsLoaded = false
				break
			}
		}
	},
	mounted() {
		this.bankAddress = this.address
		if (this._depsLoaded) {
			if (this.bankAddress != '') {

				this.$store.dispatch(
					'cosmos/cosmos-sdk/cosmos.bank.v1beta1/QueryAllBalances',
					{
						address: this.address,
						all: true,
						subscribe: this.refresh
					}
				)
			}
		}
	},
	watch: {
		address: function (newAddr, oldAddr) {
			if (this._depsLoaded) {
				if (newAddr != oldAddr) {
					this.bankAddress = newAddr
					if (this.bankAddress != '') {

						this.$store.dispatch('common/transfers/QueryTransactions', {address:this.bankAddress }).then(data=> (console.log(data)))
						this.$store.dispatch(
							'cosmos/cosmos-sdk/cosmos.bank.v1beta1/QueryAllBalances',
							{
								address: this.bankAddress,
								subscribe: this.refresh
							}
						)
					}
				}
			}
		}
	},
	computed: {
		balances() {
			if (this._depsLoaded) {
				return (
					this.$store.getters[
						'cosmos/cosmos-sdk/cosmos.bank.v1beta1/getAllBalances'
					]({ address: this.bankAddress })?.balances ?? []
				)
			} else {
				return []
			}
		},
		denoms() {
			return this.balances.map((b) => b.denom)
		},
		denom() {
			return this.denoms[this.denomIndex]
		},
		depsLoaded() {
			return this._depsLoaded
		},
		valid() {
			let to_address
			try {
				to_address = !!Bech32.decode(this.to_address)
			} catch {
				to_address = false
			}
			const amount = +this.amount > 0 && Number.isInteger(+this.amount)
			return { amount, to_address }
		},
		txResultMessage() {
			if (this.txResult && this.txResult.code) {
				return `Error: ${this.txResult.rawLog}`
			}
			return ''
		}
	},
	methods: {
		denomChange() {
			const inBounds = this.denomIndex < this.denoms.length - 1
			this.denomIndex = inBounds ? this.denomIndex + 1 : 0
		},
		async send() {
			if (this._depsLoaded) {
				if (this.valid.to_address && this.valid.amount && !this.inFlight) {
					const value = {
						amount: [{ amount: this.amount, denom: this.denom }],
						toAddress: this.to_address,
						fromAddress: this.address
					}
					this.txResult = ''
					this.inFlight = true
					this.txResult = await this.$store.dispatch(
						'cosmos/cosmos-sdk/cosmos.bank.v1beta1/sendMsgSend',
						{ value }
					)
					if (this.txResult && !this.txResult.code) {
						this.amount = ''
						this.to_address = ''
						this.memo = ''
					}
					this.inFlight = false
					await this.$store.dispatch(
						'cosmos/cosmos-sdk/cosmos.bank.v1beta1/QueryAllBalances',
						{
							address: this.address,
							all: true,
							subscribe: false
						}
					)
				}
			}
		}
	}
}
</script>
