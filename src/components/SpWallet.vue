<template>
	<div class="SpWallet">
		<div v-if="loggedIn">
			<button @click="toggleAccountList()" class="SpButton">
				<div class="SpButtonText">{{ currentAccount }}</div>
			</button>
			<button @click="toggleMenu()" class="SpButton">
				<div class="SpButtonText">MENU</div>
			</button>
			<SpAccountList
				v-if="showAccounts"
				v-on:account-selected="showAccounts = false"
			/>
			<div class="SpMenu" v-if="showMenu">
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
						>
							<div class="SpButtonText">ACCOUNT OVERVIEW</div>
						</button>
					</li>
					<li>
						<button class="SpButton" @click="goTo('/send/')">
							<div class="SpButtonText">SEND TOKENS</div>
						</button>
					</li>
				</ul>
			</div>
		</div>
		<div v-else>
			<button @click="toggleWalletList()" class="SpButton">
				<div class="SpButtonText">SIGN IN</div>
			</button>
			<SpWalletList
				v-if="showWallets"
				v-on:wallet-selected="showWallets = false"
			/>
		</div>
	</div>
</template>
<script>
import SpAccountList from './wallet/SpAccountList'
import SpWalletList from './wallet/SpWalletList'
export default {
	name: 'SpWallet',
	components: {
		SpAccountList,
		SpWalletList
	},
	data() {
		return {
			showWallets: false,
			showAccounts: false,
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
		toggleWalletList() {
			this.showWallets = !this.showWallets
			if (this.showWallets) {
				this.showAccounts = false
				this.showMenu = false
			}
		},
		goTo(route) {
			this.$router.push(route)
			this.showMenu = false
		},
		toggleMenu() {
			this.showMenu = !this.showMenu
			if (this.showMenu) {
				this.showAccounts = false
				this.showWallets = false
			}
		},
		toggleAccountList() {
			this.showAccounts = !this.showAccounts
			if (this.showAccounts) {
				this.showWallets = false
				this.showMenu = false
			}
		}
	}
}
</script>
