<template>
	<div class="sp-component sp-welcome">
		<div class="sp-box sp-shadow sp-welcome__main">
			<h2>Welcome to Starport</h2>
			<p>
				Explanation of what this front-end does and why etc.<br />
				Explanation of what this front-end does and why etc.<br />
				Explanation of what this front-end does and why etc.<br />
				Explanation of what this front-end does and why etc.<br />
			</p>
			<SpButton href="https://docs.starport.network/" target="_blank" type="primary">Get started</SpButton>
			<SpButton href="https://github.com/tendermint/starport" target="_blank" type="secondary">GitHub</SpButton>
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
