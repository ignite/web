<template>
	<div
		class="sp-sidebar"
		:class="{ 'sp-opened': opened, 'sp-mob-opened': mobOpened }"
	>
		<div class="sp-hamburger sp-shadow" v-on:click="toggleMobOpen">
			<div class="sp-icon sp-icon-Hamburger"></div>
		</div>
		<div class="sp-sidebar__header" v-if="$slots.header">
			<slot name="header"></slot>
		</div>
		<div class="sp-sidebar__content">
			<slot></slot>
		</div>
		<div class="sp-sidebar__footer">
			<slot name="footer"></slot>
		</div>
		<!--
			<SpBadgeButton
			:icon="opened ? 'LeftCaret' : 'RightCaret'"
			v-on:click="toggleOpen"
			class="sp-sidebar__back"
		/>
		//-->
	</div>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
//import SpBadgeButton from '../SpBadgeButton'
export default defineComponent({
	name: 'SpSidebar',
	components: {
		//	SpBadgeButton
	},
	data() {
		return {
			opened: true,
			mobOpened: false
		}
	},
	methods: {
		toggleOpen() {
			this.opened = !this.opened
			this.opened ? this.$emit('sidebar-open') : this.$emit('sidebar-close')
		},
		toggleMobOpen() {
			this.mobOpened = !this.mobOpened
			//this.mobOpened ? this.$emit('sidebar-open') : this.$emit('sidebar-close')
		}
	}
})
</script>
