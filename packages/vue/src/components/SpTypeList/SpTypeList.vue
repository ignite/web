<template>
	<div class="sp-type-list" v-if="depsLoaded">
		<div class="sp-type-list__main sp-box">
			<div class="sp-type-list__header sp-box-header">
				{{ moduleType.toUpperCase() + 'S' }}
			</div>
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
				return (
					this.$store.getters[
						this.modulePath + '/get' + this.moduleType + 'All'
					]()?.Post ?? []
				)
			} else {
				return []
			}
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
			await this.$store.dispatch(
				this.modulePath + '/Query' + this.moduleType + 'All',
				{ subscribe: true }
			)
		}
	}
}
</script>
