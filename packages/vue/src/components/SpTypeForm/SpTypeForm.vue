<template>
	<div class="sp-type-form sp-box" :class="typeClass" v-if="depsLoaded">
		<form class="sp-type-form__main__form" v-if="action == 'create'">
			<div class="sp-type-form__header sp-box-header">
				CREATE NEW {{ moduleType.toUpperCase() }}
			</div>
			<div
				class="sp-type-form__field sp-form-group"
				v-for="field in createFieldList"
				v-bind:key="field.name"
			>
				<input
					type="text"
					class="sp-input"
					:placeholder="capitalize(field.name)"
					:disabled="!address"
					v-model="typeData[field.name]"
					v-if="field.type == 'string'"
				/>
				<input
					type="number"
					class="sp-input"
					:placeholder="capitalize(field.name)"
					:disabled="!address"
					v-model="typeData[field.name]"
					v-if="field.type == 'number'"
				/>
			</div>
			<div class="sp-type-form__btns">
				<div class="sp-type-form__message" v-if="!address">
					Accesss a wallet to create a {{ moduleType }}
				</div>
				<SpButton type="primary" v-on:click="createType" :disabled="!address"
					>Create {{ moduleType }}</SpButton
				>
			</div>
		</form>
		<form class="sp-type-form__main__form" v-if="action == 'update'">
			<div class="sp-type-form__header sp-box-header">
				UPDATE {{ moduleType.toUpperCase() }}
			</div>
			<div
				class="sp-type-form__field sp-form-group"
				v-for="field in updateFieldList"
				v-bind:key="field.name"
			>
				<input
					type="text"
					class="sp-input"
					:placeholder="capitalize(field.name)"
					:disabled="!address"
					v-model="typeData[field.name]"
					v-if="field.type == 'string'"
					v-bind:readonly="id != '' && field.name == 'id'"
				/>
				<input
					type="number"
					class="sp-input"
					:placeholder="capitalize(field.name)"
					:disabled="!address"
					v-model="typeData[field.name]"
					v-if="field.type == 'number'"
				/>
			</div>
			<div class="sp-type-form__btns">
				<div
					class="sp-type-form__btns__reset"
					v-on:click="$emit('cancel-update')"
				>
					Cancel
				</div>
				<SpButton type="primary" v-on:click="updateType()"
					>Update {{ moduleType }}</SpButton
				>
			</div>
		</form>
		<form class="sp-type-form__main__form" v-if="action == 'delete'">
			<div class="sp-type-form__header sp-box-header">
				DELETE {{ moduleType.toUpperCase() }}
			</div>
			<div
				class="sp-type-form__field sp-form-group"
				v-for="field in deleteFieldList"
				v-bind:key="field.name"
			>
				<input
					type="text"
					class="sp-input"
					:placeholder="capitalize(field.name)"
					:disabled="!address"
					v-model="typeData[field.name]"
					v-if="field.type == 'string'"
					v-bind:readonly="id != '' && field.name == 'id'"
				/>
				<input
					type="number"
					class="sp-input"
					:placeholder="capitalize(field.name)"
					:disabled="!address"
					v-model="typeData[field.name]"
					v-if="field.type == 'number'"
				/>
			</div>
			<div class="sp-type-form__btns">
				<div
					class="sp-type-form__btns__reset"
					v-on:click="$emit('cancel-delete')"
				>
					Cancel
				</div>
				<SpButton type="primary" v-on:click="deleteType()"
					>Delete {{ moduleType }}</SpButton
				>
			</div>
		</form>
	</div>
</template>
<script>
export default {
	name: 'SpTypeForm',
	components: {},
	props: {
		modulePath: {
			type: String,
			default: '',
			required: true
		},
		moduleType: {
			type: String,
			default: '',
			required: true
		},
		action: {
			type: String,
			default: '',
			required: true
		},
		id: {
			type: String,
			default: ''
		}
	},
	data: function () {
		return {
			fieldList: [],
			typeData: {}
		}
	},
	watch: {
		async id(newId) {
			this.typeData['id'] = newId
			if (this._depsLoaded) {
				if (this.typeData['id'] != '') {
					await this.$store.dispatch(
						this.modulePath + '/Query' + this.moduleType,
						{
							options: { subscribe: true },
							params: { id: this.typeData['id'] }
						}
					)
					let data = this.$store.getters[
						this.modulePath + '/get' + this.moduleType
					]({ params: { id: this.typeData['id'] } })
					this.typeData = data[this.capitalize(this.moduleType)]
				}
			}
		}
	},
	computed: {
		address() {
			return this.$store.getters['common/wallet/address']
		},
		typeClass() {
			return 'sp-type-form-' + this.moduleType
		},
		createFieldList() {
			return this.fieldList.filter((x) => x.name != 'creator' && x.name != 'id')
		},
		updateFieldList() {
			return this.fieldList.filter((x) => x.name != 'creator')
		},
		deleteFieldList() {
			return this.fieldList.filter((x) => x.name == 'id')
		},
		selectedAccount() {
			if (this._depsLoaded) {
				return this.$store.getters['common/wallet/address']
			} else {
				return null
			}
		},
		createTypeData() {
			// eslint-disable-next-line no-unused-vars
			const { id, ...rest } = this.typeData
			return rest
		},
		updateTypeData() {
			return this.typeData
		},
		deleteTypeData() {
			// eslint-disable-next-line no-unused-vars
			const { id, creator, ...rest } = this.typeData
			return { id, creator }
		},
		depsLoaded() {
			return this._depsLoaded
		}
	},
	beforeCreate() {
		const module = [...this.modulePath.split('/')]
		for (let i = 1; i <= module.length; i++) {
			let submod = module.slice(0, i)
			if (!this.$store.hasModule(submod)) {
				console.log('Module ' + this.modulePath + ' has not been registered!')
				this._depsLoaded = false
				break
			}
		}
	},
	async created() {
		if (this._depsLoaded) {
			this.fieldList = this.$store.getters[
				this.modulePath + '/getTypeStructure'
			](this.moduleType)
			for (let field of this.fieldList) {
				this.typeData[field.name] = ''
			}
			this.typeData['id'] = this.id
			if (this.typeData['id'] != '') {
				await this.$store.dispatch(
					this.modulePath + '/Query' + this.moduleType,
					{ options: { subscribe: true }, params: { id: this.typeData['id'] } }
				)
				let data = this.$store.getters[
					this.modulePath + '/get' + this.moduleType
				]({ params: { id: this.typeData['id'] } })
				this.typeData = data[this.capitalize(this.moduleType)]
			}
		}
	},
	methods: {
		capitalize(str) {
			return str.charAt(0).toUpperCase() + str.slice(1)
		},
		async createType() {
			if (this._depsLoaded && this.address) {
				this.typeData['creator'] = this.selectedAccount
				this.txResult = await this.$store.dispatch(
					this.modulePath + '/sendMsgCreate' + this.moduleType,
					{
						value: { ...this.createTypeData },
						fee: []
					}
				)
				this.$emit('created')
			}
		},
		async updateType() {
			if (this._depsLoaded) {
				this.typeData['creator'] = this.selectedAccount
				this.txResult = await this.$store.dispatch(
					this.modulePath + '/sendMsgUpdate' + this.moduleType,
					{
						value: { ...this.updateTypeData },
						fee: []
					}
				)
				this.$emit('updated')
			}
		},
		async deleteType() {
			if (this._depsLoaded) {
				this.typeData['creator'] = this.selectedAccount
				this.txResult = await this.$store.dispatch(
					this.modulePath + '/sendMsgDelete' + this.moduleType,
					{
						value: { ...this.deleteTypeData },
						fee: []
					}
				)
				this.$emit('deleted')
			}
		}
	}
}
</script>
