<template>
	<div class="SpMenu">
		<button @click="toggleMenu()" class="SpButton">
			<div class="SpButtonText">MENU</div>
		</button>
		<div class="SpMenuList" v-if="showMenu">
			<ul>
				<li>
					<button class="SpButton" @click="goTo('/')">
						<div class="SpButtonText">HOME</div>
					</button>
				</li>
				<li>
					<button
						class="SpButton"
						@click="goTo('/address/' + currentAccount)"
						:disabled="!loggedIn"
					>
						<div class="SpButtonText">ACCOUNT OVERVIEW</div>
					</button>
				</li>
				<li>
					<button
						class="SpButton"
						@click="goTo('/send/')"
						:disabled="!loggedIn"
					>
						<div class="SpButtonText">SEND TOKENS</div>
					</button>
				</li>
				<li>
					<button class="SpButton" @click="signOut" :disabled="!loggedIn">
						<div class="SpButtonText">SIGN OUT</div>
					</button>
				</li>
			</ul>
		</div>
	</div>
</template>
<script>
export default {
	name: 'SpMenu',
	data() {
		return {
			showMenu: false
		}
	},
	computed: {
		hasWallet() {
			return this.$store.hasModule(['chain', 'common', 'wallet'])
		},
		currentAccount() {
			if (this.loggedIn) {
				return this.$store.getters['chain/common/wallet/address']
			} else {
				return null
			}
		},
		loggedIn() {
			if (this.hasWallet) {
				return this.$store.getters['chain/common/wallet/loggedIn']
			} else {
				return false
			}
		}
	},
	methods: {
		goTo(route) {
			this.$router.push(route)
			this.showMenu = false
		},
		closeDropdown() {
			this.showMenu = false
		},
		toggleMenu() {
			this.showMenu = !this.showMenu
			if (this.showMenu) {
				this.$emit('menu-opened')
			}
		},
		signOut() {
			this.$store.dispatch('chain/common/wallet/signOut')
			this.showMenu = false
		}
	}
}
</script>
