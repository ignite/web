<template>
	<div class="SpTypeList">
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
	data: function() {
		return {
			fieldList: []
		}
	},
	computed: {
		typeItems() {
			return this.$store.getters[
				'chain/' + this.module + '/get' + this.type + 'All'
			]()
		}
	},
	async created() {
		this.fieldList = this.$store.getters[
			'chain/' + this.module + '/getTypeStructure'
		](this.type)
		await this.$store.dispatch(
			'chain/' + this.module + '/Query' + this.type + 'All',
			{ subscribe: true }
		)
	}
}
</script>
