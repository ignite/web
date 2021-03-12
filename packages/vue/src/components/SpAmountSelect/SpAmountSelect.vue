<template>
	<div class="sp-amount-select">
		<div class="sp-amount-select__overlay" v-if="modalOpen"></div>
		<div
			class="sp-form-group"
			:class="{ 'sp-amount-select__overlay__open': modalOpen }"
		>
			<div class="sp-amount-select__denom">
				<div class="sp-amount-select__denom__selected" v-on:click="toggleModal">
					<div class="sp-amount-select__denom__name">
						<div
							class="sp-denom-marker"
							:style="'background: #' + fulldenom.color"
						/>
						{{ fulldenom.denom.toUpperCase() }}
					</div>
					<div class="sp-amount-select__denom__controls">
						<div
							class="sp-amount-select__denom__remove"
							v-if="modalOpen"
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
						<input type="text" v-model="searchTerm" />
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
								avail.denom == fulldenom.denom
						}"
						v-on:click=";(denom = avail.denom), (modalOpen = false)"
						v-for="avail in filtered_denoms"
						v-bind:key="'denom_' + avail.denom"
					>
						<div class="sp-amount-select__denom__name">
							<div
								class="sp-denom-marker"
								:style="'background: #' + avail.color"
							/>
							{{ avail.denom.toUpperCase() }}
						</div>
						<div class="sp-amount-select__denom__balance">
							{{ avail.amount }}
						</div>
					</div>
				</div>
			</div>
			<input class="sp-input sp-input-large" name="rcpt" v-model="amount" />
		</div>
	</div>
</template>
<script>
export default {
	name: 'SpAmountSelect',
	data: function () {
		return {
			amount: 0,
			denom: null,
			modalOpen: false,
			searchTerm: ''
		}
	},
	props: {
		modelValue: Object,
		available: Array
	},
	emits: ['update:modelValue'],
	mounted() {
		this.amount = this.modelValue.amount
		this.denom = this.modelValue.denom
	},
	computed: {
		currentVal() {
			return { amount: this.amount, denom: this.denom }
		},
		fulldenom() {
			return this.denoms.find((x) => x.denom == this.denom)
		},
		denoms() {
			return this.available.map((x) => {
				x.color = this.str2rgba(x.denom.toUpperCase())
				return x
			})
		},
		filtered_denoms() {
			return this.searchTerm == ''
				? this.denoms
				: this.denoms.filter((x) => x.denom.indexOf(this.searchTerm) !== -1)
		}
	},
	methods: {
		toggleModal() {
			this.modalOpen = !this.modalOpen
		},
		selfRemove() {
			this.$emit('self-remove')
		},
		str2rgba(r) {
			for (var a, o = [], c = 0; c < 256; c++) {
				a = c
				for (var f = 0; f < 8; f++) a = 1 & a ? 3988292384 ^ (a >>> 1) : a >>> 1
				o[c] = a
			}
			for (var n = -1, t = 0; t < r.length; t++)
				n = (n >>> 8) ^ o[255 & (n ^ r.charCodeAt(t))]
			return ((-1 ^ n) >>> 0).toString(16)
		}
	},
	watch: {
		modelValue(newVal) {
			this.amount = newVal.amount
			this.denom = newVal.denom
		},
		amount(newVal, oldVal) {
			if (newVal != oldVal) {
				this.$emit('update:modelValue', this.currentVal)
			}
		},
		denom(newVal, oldVal) {
			if (newVal != oldVal) {
				this.$emit('update:modelValue', this.currentVal)
			}
		}
	}
}
</script>
