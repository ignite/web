<template>
	<div class="SpForm SpTypeForm {{ typeClass}}" v-if="depsLoaded">
		<div class="SpTypeFormCreate" v-if="action == 'create'">
			<p>
				<strong
					>CREATE NEW '<em>{{ type }}</em
					>'</strong
				>
			</p>
			<div
				class="SpTypeFormField"
				v-for="field in createFieldList"
				v-bind:key="field.name"
			>
				<input
					type="text"
					:placeholder="field.name"
					v-model="typeData[field.name]"
					v-if="field.type == 'string'"
				/>
				<input
					type="number"
					:placeholder="field.name"
					v-model="typeData[field.name]"
					v-if="field.type == 'int'"
				/>
			</div>
			<button class="SpButton" @click="createType()">
				<div class="SpButtonText">CREATE</div>
			</button>
		</div>
		<div class="SpTypeFormUpdate" v-if="action == 'update'">
			<p>
				<strong
					>UPDATE '<em>{{ type }} {{ id ? ' WITH ID:' + id : '' }}</em
					>'</strong
				>
			</p>
			<div
				class="SpTypeFormField"
				v-for="field in updateFieldList"
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
					v-if="field.type == 'int'"
				/>
			</div>
			<button class="SpButton" @click="updateType()">
				<div class="SpButtonText">UPDATE</div>
			</button>
		</div>
		<div class="SpTypeFormDelete" v-if="action == 'delete'">
			<p>
				<strong
					>DELETE '<em>{{ type }}' {{ id ? ' WITH ID:' + id : '' }}</em></strong
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
					v-if="field.type == 'int'"
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
		denom: {
			type: String,
			required: true
		},
		module: {
			type: String,
			default: '',
			required: true
		},
		type: {
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
						'chain/' + this.module + '/Query' + this.type,
						{ subscribe: true, id: this.typeData['id'] }
					)
					this.typeData = this.$store.getters[
						'chain/' + this.module + '/get' + this.type
					](this.typeData['id'])
				}
			}
		}
	},
	computed: {
		typeClass() {
			return 'SpTypeForm' + this.type
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
				return this.$store.getters['chain/common/wallet/address']
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
		const module = ['chain', ...this.module.split('/')]
		for (let i = 1; i <= module.length; i++) {
			let submod = module.slice(0, i)
			if (!this.$store.hasModule(submod)) {
				console.log('Module ' + this.module + ' has not been registered!')
				this._depsLoaded = false
				break
			}
		}
	},
	async created() {
		if (this._depsLoaded) {
			this.fieldList = this.$store.getters[
				'chain/' + this.module + '/getTypeStructure'
			](this.type)
			for (let field of this.fieldList) {
				this.typeData[field.name] = ''
			}
			this.typeData['id'] = this.id
			if (this.typeData['id'] != '') {
				await this.$store.dispatch(
					'chain/' + this.module + '/Query' + this.type,
					{ subscribe: true, id: this.typeData['id'] }
				)
				this.typeData = this.$store.getters[
					'chain/' + this.module + '/get' + this.type
				](this.typeData['id'])
			}
		}
	},
	methods: {
		async createType() {
			if (this._depsLoaded) {
				this.typeData['creator'] = this.selectedAccount
				this.txResult = await this.$store.dispatch(
					'chain/' + this.module + '/MsgCreate' + this.type,
					{
						...this.createTypeData,
						denom: this.denom
					}
				)
			}
		},
		async updateType() {
			if (this._depsLoaded) {
				this.typeData['creator'] = this.selectedAccount
				this.txResult = await this.$store.dispatch(
					'chain/' + this.module + '/MsgUpdate' + this.type,
					{
						...this.updateTypeData,
						denom: this.denom
					}
				)
			}
		},
		async deleteType() {
			if (this._depsLoaded) {
				this.typeData['creator'] = this.selectedAccount
				this.txResult = await this.$store.dispatch(
					'chain/' + this.module + '/MsgDelete' + this.type,
					{
						...this.deleteTypeData,
						denom: this.denom
					}
				)
			}
		}
	}
}
</script>
