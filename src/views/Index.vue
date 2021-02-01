<template>
	<div>
		<div class="container">
			<SpBlocks />
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
import * as sp from '../index.js'

export default {
	components: { ...sp }
}
</script>
