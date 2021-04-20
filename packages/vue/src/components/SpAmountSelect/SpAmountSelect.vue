<template>
	<div class="sp-amount-select">
		<div
			class="sp-amount-select__overlay"
			v-if="modalOpen"
			v-on:click="modalOpen = false"
		></div>
		<div
			class="sp-form-group"
			:class="{ 'sp-amount-select__overlay__open': modalOpen }"
		>
			<div class="sp-amount-select__denom" :class="{ 'sp-focused': focused }">
				<div class="sp-amount-select__denom__selected" v-on:click="toggleModal">
					<div class="sp-amount-select__denom__name">
						<div
							class="sp-amount-select__denom__balance"
							:class="{
								'sp-amount-select__denom__balance__fail':
									parseAmount(fulldenom.amount) - parseAmount(value.amount) < 0
							}"
						>
							<strong>Avail.</strong>
							{{ parseAmount(fulldenom.amount) - parseAmount(value.amount) }}/{{
								fulldenom.amount
							}}
						</div>
						<div
							class="sp-denom-marker"
							:style="'background: #' + fulldenom.color"
						/>

						<template v-if="fulldenom.ibc.ibc_denom && !fulldenom.verified">
							IBC/{{ fulldenom.ibc.path }}/{{
								fulldenom.base_denom.toUpperCase()
							}}
						</template>
						<template v-else-if="fulldenom.ibc.ibc_denom && fulldenom.verified">
							{{ fulldenom.base_denom.toUpperCase() }} ({{
								fulldenom.ibc.source_chain
							}})
						</template>
						<template v-else>
							{{ fulldenom.base_denom.toUpperCase() }}
						</template>
					</div>
					<div class="sp-amount-select__denom__controls">
						<div
							class="sp-amount-select__denom__remove"
							v-if="modalOpen && !last"
							v-on:click="selfRemove"
						>
							Remove
						</div>
						<span
							:class="{
								'sp-icon sp-icon-DownCaret': !modalOpen,
								'sp-icon sp-icon-UpCaret': modalOpen
							}"
						/>
					</div>
				</div>
				<div class="sp-amount-select__denom__modal" v-if="modalOpen">
					<div class="sp-amount-select__denom__modal__search">
						<div class="sp-icon sp-icon-Search" />
						<input
							type="text"
							v-model="searchTerm"
							placeholder="Search..."
							class="sp-amount-select__denom__modal__search__input"
						/>
					</div>
					<div class="sp-line"></div>
					<div class="sp-amount-select__denom__modal__header">
						<div class="sp-amount-select__denom__modal__header__token">
							TOKEN
						</div>
						<div class="sp-amount-select__denom__modal__header__amount">
							AMOUNT
						</div>
					</div>
					<div
						class="sp-amount-select__denom__modal__item"
						:class="{
							'sp-amount-select__denom__modal__item__selected':
								avail.base_denom == fulldenom.base_denom &&
								JSON.stringify(avail.ibc) == JSON.stringify(fulldenom.ibc),
							'sp-amount-select__denom__modal__item__disabled':
								enabledDenoms.findIndex(
									(x) => JSON.stringify(x) == JSON.stringify(avail)
								) == -1
						}"
						v-on:click="setDenom(avail)"
						v-for="(avail, index) in filteredDenoms"
						v-bind:key="'denom_' + index"
					>
						<div class="sp-amount-select__denom__name">
							<div
								class="sp-denom-marker"
								:style="'background: #' + avail.color"
							/>

							<template v-if="avail.ibc.ibc_denom && !avail.verified">
								IBC/{{ avail.ibc.path }}/{{ avail.base_denom.toUpperCase() }}
							</template>
							<template v-else-if="avail.ibc.ibc_denom && avail.verified">
								{{ avail.base_denom.toUpperCase() }} ({{
									avail.ibc.source_chain
								}})
							</template>
							<template v-else>
								{{ avail.base_denom.toUpperCase() }}
							</template>
						</div>
						<div class="sp-amount-select__denom__balance">
							{{ avail.amount }}
						</div>
					</div>
				</div>
			</div>
			<input
				class="sp-input sp-input-large"
				:class="{
					'sp-error':
						parseAmount(fulldenom.amount) + '' != '' &&
						parseAmount(fulldenom.amount) - parseAmount(value.amount) < 0
				}"
				name="rcpt"
				v-model="value.amount"
				placeholder="0"
				v-on:focus="focused = true"
				v-on:blur="focused = false"
			/>
		</div>
	</div>
</template>
<script lang="ts">
import { defineComponent, PropType } from 'vue'
import {
	MetaAmount,
	ColoredMetaAmount,
	DenomTraces
} from '../../utils/interfaces'
import { str2rgba } from '../../utils/helpers'

export interface SpAmountSelectState {
	value: MetaAmount
	focused: boolean
	modalOpen: boolean
	searchTerm: string
	denomTraces: DenomTraces
}

export default defineComponent({
	name: 'SpAmountSelect',
	data: function (): SpAmountSelectState {
		return {
			value: {
				address: '',
				base_denom: '',
				verified: true,
				native: false,
				amount: '',
				on_chain: this.$store.getters['common/env/chainId'],
				fee_token: false,
				ibc: {}
			},
			focused: false,
			modalOpen: false,
			searchTerm: '',
			denomTraces: {} as DenomTraces
		}
	},
	props: {
		modelValue: {
			type: Object as PropType<MetaAmount>
		},
		available: {
			type: Array as PropType<Array<MetaAmount>>
		},
		index: { type: Number as PropType<number> },
		selected: {
			type: Array as PropType<Array<string>>
		},
		last: {
			type: Boolean as PropType<boolean>
		}
	},
	emits: ['update:modelValue', 'self-remove'],
	mounted: function () {
		Object.assign(this.value, this.modelValue)
	},
	computed: {
		currentVal: function (): MetaAmount {
			return this.value
		},
		fulldenom: function (): ColoredMetaAmount {
			return (
				this.denoms.find(
					(x: ColoredMetaAmount) =>
						x.base_denom == this.value.base_denom &&
						JSON.stringify(x.ibc) == JSON.stringify(this.value.ibc)
				) ?? {
					address: '',
					base_denom: '',
					verified: true,
					native: false,
					amount: '',
					on_chain: this.$store.getters['common/env/chainId'],
					fee_token: false,
					ibc: {},
					color: ''
				}
			)
		},
		enabledDenoms: function (): Array<ColoredMetaAmount> {
			return (
				this.available?.filter(
					(x) =>
						this.selected?.findIndex(
							(y) => y == x.base_denom || y == x.ibc.ibc_denom
						) == -1 ||
						this.selected?.findIndex(
							(y) => y == x.base_denom || y == x.ibc.ibc_denom
						) == this.index
				) ?? []
			).map((x) => {
				return {
					address: x.address,
					base_denom: x.base_denom,
					verified: x.verified,
					native: x.native,
					amount: x.amount,
					on_chain: x.on_chain,
					fee_token: x.fee_token,
					ibc: Object.assign({}, x.ibc),
					color: str2rgba(x.base_denom.toUpperCase())
				}
			})
		},
		denoms: function (): Array<ColoredMetaAmount> {
			return (
				this.available?.map((x: MetaAmount) => {
					this.addMapping(x)
					return {
						address: x.address,
						base_denom: x.base_denom,
						verified: x.verified,
						native: x.native,
						amount: x.amount,
						on_chain: x.on_chain,
						fee_token: x.fee_token,
						ibc: Object.assign({}, x.ibc),
						color: str2rgba(x.base_denom.toUpperCase())
					}
				}) ?? []
			)
		},
		filteredDenoms: function (): Array<ColoredMetaAmount> {
			return this.searchTerm == ''
				? this.denoms
				: this.denoms.filter(
						(x) =>
							x.base_denom
								.toUpperCase()
								.indexOf(this.searchTerm.toUpperCase()) !== -1
				  )
		}
	},
	methods: {
		toggleModal: function (): void {
			this.modalOpen = !this.modalOpen
		},
		selfRemove: function (): void {
			this.$emit('self-remove')
		},
		addMapping: async function (balance: MetaAmount): Promise<void> {
			if (balance.ibc.ibc_denom?.indexOf('ibc/') == 0) {
				const denom = balance.ibc.ibc_denom.split('/')
				const hash = denom[1]
				this.denomTraces[hash] = await this.$store.dispatch(
					'ibc.applications.transfer.v1/QueryDenomTrace',
					{
						options: { subscribe: false, all: false },
						params: { hash }
					}
				)
			}
		},
		setDenom: function (avail: ColoredMetaAmount): void {
			if (
				this.enabledDenoms.findIndex(
					(x) => JSON.stringify(x) == JSON.stringify(avail)
				) != -1
			) {
				this.value.address = avail.address
				this.value.base_denom = avail.base_denom
				this.value.verified = avail.verified
				this.value.native = avail.native
				this.value.on_chain = avail.on_chain
				this.value.fee_token = avail.fee_token
				this.value.ibc = Object.assign(this.value.ibc, avail.ibc)
				this.modalOpen = false
			}
		},
		parseAmount: function (amount: string): number {
			return amount == '' ? 0 : parseInt(amount)
		}
	},
	watch: {
		modelValue: function (newVal: MetaAmount): void {
			this.value = Object.assign(this.value, newVal)
		},
		amount: function (newVal: string, oldVal: string): void {
			if (newVal != oldVal) {
				this.$emit('update:modelValue', this.currentVal)
			}
		},
		denom: function (newVal: string, oldVal: string): void {
			if (newVal != oldVal) {
				this.$emit('update:modelValue', this.currentVal)
			}
		}
	}
})
</script>
