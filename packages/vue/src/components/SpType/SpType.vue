<template>
	<div>
		<div class="sp-type">
			<div class="sp-type__header sp-component-title">
				<h3>Custom type</h3>
				<span>|</span>
				<span>Create and edit a custom type form.</span>
			</div>

			<div class="sp-type__holder">
				<div class="sp-type-form__holder">
					<SpTypeForm
						:modulePath="modulePath"
						:moduleType="moduleType"
						action="create"
						class="sp-type__create sp-shadow"
					/>
				</div>
				<SpTypeList
					:modulePath="modulePath"
					:moduleType="moduleType"
					class="sp-type__list"
				/>
			</div>
		</div>
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
