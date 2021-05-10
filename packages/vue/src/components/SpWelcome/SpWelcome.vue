<template>
	<div class="sp-component sp-welcome">
		<div class="sp-box sp-shadow sp-welcome__main">
			<div class="sp-welcome__header">
				<h2>Welcome to Starport</h2>
			</div>
			<p>
				Explanation of what this front-end does and why etc.<br />
				Explanation of what this front-end does and why etc.<br />
				Explanation of what this front-end does and why etc.<br />
				Explanation of what this front-end does and why etc.<br />
			</p>
			<div class="sp-welcome__btns">
				<SpButton href="https://docs.starport.network/" target="_blank" type="primary">Get started</SpButton>
				<SpButton
					href="https://github.com/tendermint/starport"
					target="_blank"
					type="secondary"
					class="sp-welcome__btns__github"
					>GitHub</SpButton
				>
			</div>
		</div>
	</div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import SpButton from '../SpButton'

export default defineComponent({
	name: 'SpWelcome',
	components: {
		SpButton,
	},
})
</script>
