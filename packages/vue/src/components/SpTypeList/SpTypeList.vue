<template>
	<div class="sp-type-list" v-if="depsLoaded">
		<div class="sp-type-list__main sp-box">
			<div class="sp-type-list__header sp-box-header">
				{{ moduleType.toUpperCase() + 'S' }}
			</div>
			<div class="SpTypeListEmpty" v-if="!typeItems || typeItems.length == 0">
				<em>No items available</em>
			</div>
			<template v-else>
				<div v-for="item in typeItems" v-bind:key="item.id">
					<div class="sp-type-list__item">
						<div class="sp-type-list__item__icon">
							<div class="sp-icon sp-icon-Docs" />
						</div>
						<div class="sp-type-list__item__details">
							<div
								class="sp-type-list__item__details__field"
								v-for="field in fieldList"
								v-bind:key="field"
							>
								<strong> {{ capitalize(field.name) }} </strong><br />
								{{ item[field.name] }}
							</div>
						</div>
						<div class="sp-type-list_item__more">
							<div class="sp-icon sp-icon-More" />
						</div>
					</div>
					<div class="sp-dashed-line" />
				</div>
			</template>
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
	},
	methods: {
		capitalize(str) {
			return str.charAt(0).toUpperCase() + str.slice(1)
		}
	}
}
</script>
