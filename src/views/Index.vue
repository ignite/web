<template>
	<div>
		<div class="container">
			<SpSignIn />
			<SpBankBalances />
			<SpTokenSend />
			<SpTypeForm type="post" :fields="['title', 'body']" />
		</div>
		<SpBlockExplorer />
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
import SpBlockExplorer from '@/components/SpBlockExplorer/SpBlockExplorer'
import SpSignIn from '@/components/SpSignIn'
import SpBankBalances from '@/components/SpBankBalances'
import SpTokenSend from '@/components/SpTokenSend'
import SpTypeForm from '@/components/SpTypeForm'

export default {
	components: {
		SpBlockExplorer,
		SpSignIn,
		SpBankBalances,
		SpTokenSend,
		SpTypeForm
	}
}
</script>
