<template>
	<div class="sp-sidebar" :class="{ 'sp-opened': opened }">
		<div class="sp-sidebar__header">
			<slot name="header"></slot>
		</div>
		<div class="sp-sidebar__content">
			<slot></slot>
		</div>
		<div class="sp-sidebar__footer">
			<slot name="footer"></slot>
		</div>
		<SpBadgeButton
			:icon="opened ? 'LeftCaret' : 'RightCaret'"
			v-on:click="toggleOpen"
			class="sp-sidebar__back"
		/>
	</div>
</template>
<script>
export default {
	name: 'SpSidebar',
	data() {
		return {
			opened: true
		}
	},
	methods: {
		toggleOpen() {
			this.opened = !this.opened
			this.opened ? this.$emit('sidebar-open') : this.$emit('sidebar-close')
		}
	}
}
</script>
