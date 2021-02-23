<template>
	<div class="icon-check"></div>
</template>

<style scoped>
.icon-check {
	width: 4px;
	height: 8px;
	border-bottom: 2px solid var(--sp-c-txt-success);
	border-right: 2px solid var(--sp-c-txt-success);
	transform: rotate(45deg);
	margin-top: -2px;
}
</style>
<script>
export default {
	name: 'SpCheck'
}
</script>
