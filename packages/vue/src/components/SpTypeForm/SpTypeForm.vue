<template>
	<div class="sp-type-form sp-box {{ typeClass}}" v-if="depsLoaded">
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
					v-model="typeData[field.name]"
					v-if="field.type == 'string'"
				/>
				<input
					type="number"
					class="sp-input"
					:placeholder="capitalize(field.name)"
					v-model="typeData[field.name]"
					v-if="field.type == 'number'"
				/>
			</div>
			<div class="sp-type-form__btns">
				<div class="sp-type-form__btns__reset" v-on:click="resetForm">
					Reset
				</div>
				<SpButton type="primary" v-on:click="createType()"
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
					v-model="typeData[field.name]"
					v-if="field.type == 'string'"
					v-bind:readonly="id != '' && field.name == 'id'"
				/>
				<input
					type="number"
					class="sp-input"
					:placeholder="capitalize(field.name)"
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
		<div class="SpTypeFormDelete" v-if="action == 'delete'">
			<p>
				<strong
					>DELETE '<em
						>{{ moduleType }}' {{ id ? ' WITH ID:' + id : '' }}</em
					></strong
				>
			</p>
			<div
				class="SpTypeFormField"
				v-for="field in deleteFieldList"
				v-bind:key="field.name"
			>
				<input
					type="text"
					:placeholder="field.name"
					v-model="typeData[field.name]"
					v-if="field.type == 'string'"
					v-bind:readonly="id != '' && field.name == 'id'"
				/>
				<input
					type="number"
					:placeholder="field.name"
					v-model="typeData[field.name]"
					v-if="field.type == 'number'"
				/>
			</div>
			<button class="SpButton" @click="deleteType()">
				<div class="SpButtonText">DELETE</div>
			</button>
		</div>
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
						{ subscribe: true, id: this.typeData['id'] }
					)
					this.typeData = this.$store.getters[
						this.modulePath + '/get' + this.moduleType
					](this.typeData['id'])
				}
			}
		}
	},
	computed: {
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
					{ subscribe: true, id: this.typeData['id'] }
				)
				this.typeData = this.$store.getters[
					this.modulePath + '/get' + this.moduleType
				](this.typeData['id'])
			}
		}
	},
	methods: {
		capitalize(str) {
			return str.charAt(0).toUpperCase() + str.slice(1)
		},
		async createType() {
			if (this._depsLoaded) {
				this.typeData['creator'] = this.selectedAccount
				this.txResult = await this.$store.dispatch(
					this.modulePath + '/sendMsgCreate' + this.moduleType,
					{
						value: { ...this.createTypeData },
						fee: []
					}
				)
				console.log(this.txResult)
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
			}
		}
	}
}
</script>
