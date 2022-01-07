<template>
	<div
		class="profile-gradient profile-shadow"
		style="width: 32px; height: 32px; border-radius: 50%"
	/>
</template>

<script>
import { defineComponent } from 'vue'
export default defineComponent({
	name: 'SpProfileIcon'
})
</script>

<style>
.profile-gradient {
	background: linear-gradient(
		276.98deg,
		#eae501 3.37%,
		#a5fbff 22.05%,
		#4251fa 56.21%,
		#320b93 95.92%
	);
}

.profile-shadow {
	box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px,
		rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
}
</style>
