<template>
	<div class="SpTypeList" v-if="depsLoaded">
		<p>
			<strong>
				LIST OF TYPE: '<em>{{ type }}</em
				>' ITEMS FROM MODULE: '<em>{{ module }}</em
				>'
			</strong>
		</p>
		<div class="SpTypeListEmpty" v-if="!typeItems || typeItems.length == 0">
			<em>No items available</em>
		</div>
		<div v-else>
			<table class="SpTable">
				<thead>
					<tr>
						<td v-for="field in fieldList" v-bind:key="field">
							<strong>
								{{ field.name }}
							</strong>
						</td>
					</tr>
				</thead>
				<tbody>
					<tr
						class="SpTypeListItem"
						v-for="item in typeItems"
						v-bind:key="item.id"
					>
						<td v-for="field in fieldList" v-bind:key="field">
							{{ item[field.name] }}
						</td>
					</tr>
				</tbody>
			</table>
		</div>
	</div>
</template>
<script>
export default {
	name: 'SpTypeList',
	props: {
		type: {
			type: String,
			default: ''
		},
		module: {
			type: String,
			default: ''
		}
	},
	data: function () {
		return {
			fieldList: []
		}
	},
	computed: {
		typeItems() {
			if (this._depsLoaded) {
				return this.$store.getters[
					'chain/' + this.module + '/get' + this.type + 'All'
				]()
			} else {
				return []
			}
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
			await this.$store.dispatch(
				'chain/' + this.module + '/Query' + this.type + 'All',
				{ subscribe: true }
			)
		}
	}
}
</script>
