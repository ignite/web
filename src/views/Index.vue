<template>
	<div>
		<div class="container">
			<SpLatestBlocks />
			<!-- this line is used by starport scaffolding # 4 -->
			<div class="moduleShowcase">
				<h3>STARPORT MODULE COMPONENTS</h3>
				<hr />
				<code>SpTypeList</code>
				<SpTypeList module="tendermint/modules/blog" type="Post" />
				<hr />
				<code>SpTypeForm action="create"</code>
				<SpTypeForm
					denom="TOKEN"
					module="tendermint/modules/blog"
					type="Post"
					action="create"
				/>
				<hr />
				<code>SpTypeForm action="delete" without id</code>
				<SpTypeForm
					denom="TOKEN"
					module="tendermint/modules/blog"
					type="Post"
					action="delete"
				/>
				<hr />
				<code>SpTypeForm action="delete" id="XXXX"</code>
				<div class="SpForm">
					<input
						type="text"
						v-model="showcaseDeleteId"
						placeholder="Enter id"
					/>
				</div>
				<SpTypeForm
					denom="TOKEN"
					module="tendermint/modules/blog"
					type="Post"
					action="delete"
					:id="showcaseDeleteId"
					v-if="showcaseDeleteId"
				/>
				<hr />
				<code>SpTypeForm action="update" without id</code>
				<SpTypeForm
					denom="TOKEN"
					module="tendermint/modules/blog"
					type="Post"
					action="update"
				/>
				<hr />
				<code>SpTypeForm action="update" id="XXXX"</code>
				<div class="SpForm">
					<input
						type="text"
						v-model="showcaseUpdateId"
						placeholder="Enter id"
					/>
				</div>
				<SpTypeForm
					denom="TOKEN"
					module="tendermint/modules/blog"
					type="Post"
					action="update"
					:id="showcaseUpdateId"
					v-if="showcaseUpdateId"
				/>
			</div>
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
import SpTypeList from '@/components/SpTypeList'
import SpTypeForm from '@/components/SpTypeForm'

export default {
	name: 'Index',
	components: { SpLatestBlocks, SpTypeForm, SpTypeList },
	data() {
		return {
			showcaseDeleteId: '',
			showcaseUpdateId: ''
		}
	}
}
</script>
