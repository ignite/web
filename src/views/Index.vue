<template>
	<div>
		<div class="container">
			<SpSignIn />
			<SpBankBalances />
			<SpTokenSend />
			<SpTypeForm
				type="post"
				path="fadeev.foo.foo"
				:fields="[
					['creator', 1, 'string'],
					['title', 2, 'string'],
					['body', 3, 'string']
				]"
			/>
			<SpTypeForm
				type="hello"
				path="fadeev.foo.bar"
				:fields="[
					['creator', 1, 'string'],
					['world', 2, 'string'],
					['test', 3, 'string']
				]"
			/>
			<SpTypeForm
				type="whoop"
				path="fadeev.foo.bar"
				:fields="[
					['creator', 1, 'string'],
					['world', 2, 'bool'],
					['test', 3, 'int32']
				]"
			/>
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
// import SpBlockExplorer from '@/components/SpBlockExplorer/SpBlockExplorer'
import SpSignIn from '@/components/SpSignIn'
import SpBankBalances from '@/components/SpBankBalances'
import SpTokenSend from '@/components/SpTokenSend'
import SpTypeForm from '@/components/SpTypeForm'

export default {
	components: {
		// SpBlockExplorer,
		SpSignIn,
		SpBankBalances,
		SpTokenSend,
		SpTypeForm
	}
}
</script>
