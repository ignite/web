<template>
	<transition name="dropdown-fade">
		<div class="account-dropdown">
			<SpLinkIcon
				icon="Close"
				aria-label="Close modal"
				class="close-icon"
				@click="$emit('close')"
			/>
			<h5>Connected wallet</h5>
			<div style="display: flex; align-items: center">
				<div
					style="width: 32px;
					height: 32px;
					border-radius: 50%;
					background: linear-gradient(276.98deg, #EAE501 3.37%, #A5FBFF 22.05%, #4251FA 56.21%, #320B93 95.92%);"
				/>
				<span style="margin-left: 12px; margin-right: 12px;">
					qqqqqq
				</span>
			</div>
			<h4>Disconnect wallet</h4>
			<hr style="margin: 2rem 0" />
			<h4>Settings</h4>
			<hr style="margin: 2rem 0" />
			<h4>Support</h4>
			<h4>Twitter</h4>
			<h4>Telegram</h4>
		</div>
	</transition>
</template>

<script>
export default {
	name: 'SpAccountDropdown',
	props: {
	},
	watch: {
	},
	mounted() {
		// document.addEventListener('click', this.clockOutside)
	},
	methods: {
		clockOutside(evt) {
			// console.log(evt.target)
			// if (evt.key === 'Escape') this.$emit('close')
		}
	}
}
</script>

<style>
.account-dropdown {
	position: fixed;
	top: 2rem;
	right: 2rem;
	z-index: 90;
	background: #fff;
	height: auto;
	padding: 2.8rem;
	width: 288px;
	box-shadow: 40px 64px 128px -8px rgba(0, 0, 0, 0.14);
	border-radius: 10px;
}

.close-icon {
	position: absolute;
	top: 0;
	right: 0;
	border: none;
	font-size: 20px;
	padding: 10px;
	cursor: pointer;
	background: transparent;
}

.dropdown-fade-enter,
.dropdown-fade-enter-from,
.dropdown-fade-leave-to {
	opacity: 0;
}

.dropdown-fade-enter-active,
.dropdown-fade-leave-active {
	transition: opacity .2s ease;
}
</style>
