<template>
	<div class="sp-type">
		<div class="sp-header-text">List</div>
		<SpTypeList :modulePath="modulePath" :moduleType="moduleType" />
		<hr />
		<div class="sp-header-text">Create</div>
		<SpTypeForm
			:modulePath="modulePath"
			:moduleType="moduleType"
			action="create"
		/>
		<hr />
		<div class="sp-header-text">Delete</div>
		<SpTypeForm
			:modulePath="modulePath"
			:moduleType="moduleType"
			action="delete"
		/>
		<hr />
		<div class="sp-header-text">Update</div>
		<SpTypeForm
			:modulePath="modulePath"
			:moduleType="moduleType"
			action="update"
		/>
	</div>
</template>
<script>
import SpTypeList from '../SpTypeList'
import SpTypeForm from '../SpTypeForm'
export default {
	name: 'SpType',
	components: {
		SpTypeList,
		SpTypeForm
	},
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
		}
	}
}
</script>
