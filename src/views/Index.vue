<template>
	<div>
		<div class="container">
			<SpLatestBlocks />
			<!-- this line is used by starport scaffolding # 4 -->
		</div>
	</div>
</template>

<style scoped>
.container {
	max-width: 800px;
	margin: 2rem auto;
	padding: 1rem;
}
</style>
<script>
import SpLatestBlocks from '@/components/block/SpLatestBlocks'

export default {
	name: 'Index',
	components: { SpLatestBlocks }
}
</script>
