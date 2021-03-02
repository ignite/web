<template>
	<div class="SpTypeList" v-if="depsLoaded">
		<p>
			<strong>
				LIST OF TYPE: '<em>{{ moduleType }}</em
				>' ITEMS FROM MODULE: '<em>{{ modulePath }}</em
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
		moduleType: {
			type: String,
			default: ''
		},
		modulePath: {
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
					'chain/' + this.modulePath + '/get' + this.moduleType + 'All'
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
		const module = ['chain', ...this.modulePath.split('/')]
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
				'chain/' + this.modulePath + '/getTypeStructure'
			](this.moduleType)
			await this.$store.dispatch(
				'chain/' + this.modulePath + '/Query' + this.moduleType + 'All',
				{ subscribe: true }
			)
		}
	}
}
</script>
