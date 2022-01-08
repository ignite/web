<template>
	<div class="navbar-wrapper">
		<div class="navbar-section">
			<router-link :to="'/'" class="sp-nav-link" :alt="'Home'" :title="'Home'">
				<div style="display: flex; align-items: center">
					<svg
						width="33"
						height="37"
						viewBox="0 0 33 37"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							d="M2.1562 10.1835L16.4168 1.95008L30.6775 10.1835V26.6502L16.4168 34.8836L2.1562 26.6502V10.1835Z"
							stroke="#111111"
							stroke-width="2.8"
						/>
						<rect
							x="13.5"
							y="15.5"
							width="5.83333"
							height="5.83333"
							rx="2.91667"
							fill="#111111"
						/>
					</svg>
					<span
						style="
							padding: 4px 8px;
							margin-left: 10px;
							background: rgba(0, 0, 0, 0.03);
							border-radius: 24px;
							font-weight: 500;
							font-size: 10px;
						"
					>
						Beta
					</span>
				</div>
			</router-link>
			<router-link
				:key="`link-${lid}`"
				v-for="(link, lid) in links"
				:to="link.url"
				class="sp-nav-link"
				:alt="link.name"
				:title="link.name"
			>
				<div class="">
					{{ link.name }}
				</div>
			</router-link>
		</div>
		<div class="navbar-section">
			<SpAcc />
		</div>
	</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

import SpModal from '../SpModal'
import SpButton from '../SpButton'
import SpAcc from '../SpAcc'

export default defineComponent({
	name: 'SpNavbar',

	components: {
		SpAcc,
		SpModal,
		SpButton
	},

	setup() {
		let links = [
			{ name: 'Portfolio', url: '/portfolio' },
			{ name: 'Data', url: '/data' }
		]

		return {
			links
		}
	}
})
</script>

<style>
.navbar-wrapper {
	display: flex;
	justify-content: space-between;
	position: absolute;
	height: 80px;
	left: 0;
	right: 0;
	top: 0;
	background: #ffffff;
}

.navbar-section {
	display: flex;
	padding: 20px;
	align-items: center;
}

.sp-nav-link {
	font-size: 16px;
	line-height: 130%;
	color: rgba(0, 0, 0, 0.667);
	font-weight: 400;
	text-decoration: none;
	cursor: pointer;
	margin: 0 1rem;
	transition: font-weight 0.2s ease, color 0.2s ease;
}

.sp-nav-link:hover {
	opacity: 0.8;
}

.sp-nav-link.selected {
	font-weight: 600;
	color: #000000;
}

.description-grey {
	font-size: 13px;
	line-height: 153.8%;
	color: rgba(0, 0, 0, 0.667);
}

.external-link {
	font-weight: 600;
	font-size: 16px;
	cursor: pointer;
}

.external-link:hover {
	opacity: 0.8;
}
</style>
