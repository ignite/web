<template>
	<div>
		<div class="container">
			<slot />
		</div>
	</div>
</template>

<style scoped>
.container {
	font-family: var(--sp-f-primary);
	font-weight: 700;
	font-size: 1.5rem;
	margin: 3.5rem 0 1rem;
	display: flex;
	align-items: center;
}
</style>
