<template>
	<div class="sp-layout">
		<slot name="sidebar"></slot>
		<div class="sp-fill">
			<slot name="content"></slot>
		</div>
	</div>
</template>
<script>
export default {
	name: 'SpLayout'
}
</script>
