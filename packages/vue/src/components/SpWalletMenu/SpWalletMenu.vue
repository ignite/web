<template>
	<div
		class="sp-wallet-menu sp-rounded sp-shadow"
		:class="{ 'sp-opened': opened }"
		v-if="depsLoaded && !unlocking"
		v-click-outside="
			() => {
				opened = false
			}
		"
	>
		<div class="sp-wallet-menu__toggle" v-on:click="opened = !opened">
			<span
				class="sp-icon"
				:class="{ 'sp-icon-DownCaret': !opened, 'sp-icon-UpCaret': opened }"
			/>
		</div>
		<div class="sp-wallet-menu-items">
			<template v-if="topWallet">
				<div
					class="sp-wallet-menu-item"
					:class="{
						'sp-wallet-menu-item__locked': topWallet.name != walletName
					}"
					v-on:click="opened = !opened"
				>
					<div
						class="sp-wallet-menu-item__avatar"
						v-html="getAvatar(topWallet.name)"
					></div>
					<div
						class="sp-wallet-menu-item__avatar-shadow"
						v-html="getAvatar(topWallet.name)"
					></div>
					<div class="sp-wallet-menu-item__info">
						<span class="sp-text sp-bold sp-active">{{ topWallet.name }}</span>
						<br />
						<span
							class="sp-text"
							v-if="topWallet.name == walletName"
							:alt="currentAccount"
							:title="currentAccount"
						>
							{{ shortAddress }}
						</span>
						<span class="sp-text" v-else> Locked </span>
					</div>
					<div class="sp-wallet-menu-item__status">
						<span
							class="sp-icon"
							:class="{
								'sp-icon-Unlock': topWallet.name == walletName,
								'sp-icon-Lock': topWallet.name != walletName
							}"
							v-if="opened"
							v-on:click="toggleWallet(topWallet.name)"
						/>
					</div>
				</div>
			</template>
			<template v-if="topWallet.name == walletName">
				<div class="sp-wallet-menu__accounts">
					<SpAccountList />
				</div>
			</template>
			<div
				class="sp-wallet-menu-item"
				:class="{ 'sp-wallet-menu-item__locked': wallet.name != walletName }"
				v-for="(wallet, index) in restWallets"
				v-bind:key="wallet.name"
				v-on:click="toggleWallet(wallet.name)"
			>
				<div
					class="sp-wallet-menu-item__avatar"
					v-html="getAvatar(wallet.name)"
				></div>
				<div
					class="sp-wallet-menu-item__avatar-shadow"
					v-html="getAvatar(wallet.name)"
				></div>
				<div class="sp-wallet-menu-item__info">
					<span
						class="sp-text sp-bold"
						:class="{ 'sp-active': !topWallet && index == 0 }"
						>{{ wallet.name }}</span
					>
					<br />
					<span class="sp-text" v-if="wallet.name == walletName">
						{{ currentAccount }}
					</span>
					<span class="sp-text" v-else> Locked </span>
				</div>
				<div class="sp-wallet-menu-item__status">
					<span
						class="sp-icon"
						:class="{
							'sp-icon-Unlock': wallet.name == walletName,
							'sp-icon-Lock': wallet.name != walletName
						}"
						v-if="topWallet || index > 0 || opened"
						v-on:click="toggleWallet(wallet.name)"
					/>
				</div>
			</div>
			<div class="sp-dash"></div>
			<!--
			<div class="sp-wallet-menu-action">
				<div class="sp-wallet-menu-action__icon">
					<span class="sp-icon sp-icon-Settings" />
				</div>
				<div class="sp-wallet-menu-action__text sp-text">Manage Wallets</div>
			</div>
			//-->
			<div class="sp-wallet-menu-action">
				<SpLinkIcon
					icon="AddNew"
					text="Add New Wallet"
					v-on:click="createNewWallet"
				/>
			</div>
		</div>
	</div>
	<div
		class="sp-wallet-menu sp-rounded sp-opened"
		v-else-if="depsLoaded && unlocking"
	>
		<div
			class="sp-wallet-menu__toggle"
			v-on:click=";(unlocking = false), (toUnlock = null)"
		>
			<span
				class="sp-icon"
				:class="{
					'sp-icon-DownCaret': !unlocking,
					'sp-icon-Close': unlocking
				}"
			/>
		</div>
		<div class="sp-wallet-menu-items">
			<div class="sp-wallet-menu-item">
				<div
					class="sp-wallet-menu-item__avatar"
					v-html="getAvatar(walletToUnlock.name)"
				></div>
				<div
					class="sp-wallet-menu-item__avatar-shadow"
					v-html="getAvatar(walletToUnlock.name)"
				></div>
				<div class="sp-wallet-menu-item__info">
					<span class="sp-text sp-bold sp-active">{{
						walletToUnlock.name
					}}</span>
					<br />
					<span class="sp-text"> Locked </span>
				</div>
			</div>
		</div>
		<div class="sp-wallet-menu-unlock">
			<div class="sp-wallet-menu-unlock__title sp-header-text">
				Unlock Wallet
			</div>
			<div class="sp-wallet-menu-unlock__text">
				Enter your Wallet password below to unlock and access your addresses.
			</div>
			<div class="sp-wallet-menu-unlock__form">
				<div class="sp-form-group">
					<input
						class="sp-input"
						v-model="password"
						type="password"
						name="password"
						placeholder="Password"
					/>
				</div>

				<SpButton v-on:click="unlockStoreWallet" type="primary"
					>Unlock Wallet</SpButton
				>
			</div>
		</div>
	</div>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
//import * as bip39 from 'bip39'
import SpAccountList from '../SpAccountList'
import SpButton from '../SpButton'
import SpLinkIcon from '../SpLinkIcon'

import avatar from 'gradient-avatar'
function hash(e) {
	function h(a, b) {
		var c, d, e, f, g
		e = a & 2147483648
		f = b & 2147483648
		c = a & 1073741824
		d = b & 1073741824
		g = (a & 1073741823) + (b & 1073741823)
		return c & d
			? g ^ 2147483648 ^ e ^ f
			: c | d
			? g & 1073741824
				? g ^ 3221225472 ^ e ^ f
				: g ^ 1073741824 ^ e ^ f
			: g ^ e ^ f
	}

	function k(a, b, c, d, e, f, g) {
		a = h(a, h(h((b & c) | (~b & d), e), g))
		return h((a << f) | (a >>> (32 - f)), b)
	}

	function l(a, b, c, d, e, f, g) {
		a = h(a, h(h((b & d) | (c & ~d), e), g))
		return h((a << f) | (a >>> (32 - f)), b)
	}

	function m(a, b, d, c, e, f, g) {
		a = h(a, h(h(b ^ d ^ c, e), g))
		return h((a << f) | (a >>> (32 - f)), b)
	}

	function n(a, b, d, c, e, f, g) {
		a = h(a, h(h(d ^ (b | ~c), e), g))
		return h((a << f) | (a >>> (32 - f)), b)
	}

	function p(a) {
		var b = '',
			d = '',
			c
		for (c = 0; 3 >= c; c++)
			(d = (a >>> (8 * c)) & 255),
				(d = '0' + d.toString(16)),
				(b += d.substr(d.length - 2, 2))
		return b
	}
	var f = [],
		q,
		r,
		s,
		t,
		a,
		b,
		c,
		d
	e = (function (a) {
		a = a.replace(/\r\n/g, '\n')
		for (var b = '', d = 0; d < a.length; d++) {
			var c = a.charCodeAt(d)
			128 > c
				? (b += String.fromCharCode(c))
				: (127 < c && 2048 > c
						? (b += String.fromCharCode((c >> 6) | 192))
						: ((b += String.fromCharCode((c >> 12) | 224)),
						  (b += String.fromCharCode(((c >> 6) & 63) | 128))),
				  (b += String.fromCharCode((c & 63) | 128)))
		}
		return b
	})(e)
	f = (function (b) {
		var a,
			c = b.length
		a = c + 8
		for (
			var d = 16 * ((a - (a % 64)) / 64 + 1), e = Array(d - 1), f = 0, g = 0;
			g < c;

		)
			(a = (g - (g % 4)) / 4),
				(f = (g % 4) * 8),
				(e[a] |= b.charCodeAt(g) << f),
				g++
		a = (g - (g % 4)) / 4
		e[a] |= 128 << ((g % 4) * 8)
		e[d - 2] = c << 3
		e[d - 1] = c >>> 29
		return e
	})(e)
	a = 1732584193
	b = 4023233417
	c = 2562383102
	d = 271733878
	for (e = 0; e < f.length; e += 16)
		(q = a),
			(r = b),
			(s = c),
			(t = d),
			(a = k(a, b, c, d, f[e + 0], 7, 3614090360)),
			(d = k(d, a, b, c, f[e + 1], 12, 3905402710)),
			(c = k(c, d, a, b, f[e + 2], 17, 606105819)),
			(b = k(b, c, d, a, f[e + 3], 22, 3250441966)),
			(a = k(a, b, c, d, f[e + 4], 7, 4118548399)),
			(d = k(d, a, b, c, f[e + 5], 12, 1200080426)),
			(c = k(c, d, a, b, f[e + 6], 17, 2821735955)),
			(b = k(b, c, d, a, f[e + 7], 22, 4249261313)),
			(a = k(a, b, c, d, f[e + 8], 7, 1770035416)),
			(d = k(d, a, b, c, f[e + 9], 12, 2336552879)),
			(c = k(c, d, a, b, f[e + 10], 17, 4294925233)),
			(b = k(b, c, d, a, f[e + 11], 22, 2304563134)),
			(a = k(a, b, c, d, f[e + 12], 7, 1804603682)),
			(d = k(d, a, b, c, f[e + 13], 12, 4254626195)),
			(c = k(c, d, a, b, f[e + 14], 17, 2792965006)),
			(b = k(b, c, d, a, f[e + 15], 22, 1236535329)),
			(a = l(a, b, c, d, f[e + 1], 5, 4129170786)),
			(d = l(d, a, b, c, f[e + 6], 9, 3225465664)),
			(c = l(c, d, a, b, f[e + 11], 14, 643717713)),
			(b = l(b, c, d, a, f[e + 0], 20, 3921069994)),
			(a = l(a, b, c, d, f[e + 5], 5, 3593408605)),
			(d = l(d, a, b, c, f[e + 10], 9, 38016083)),
			(c = l(c, d, a, b, f[e + 15], 14, 3634488961)),
			(b = l(b, c, d, a, f[e + 4], 20, 3889429448)),
			(a = l(a, b, c, d, f[e + 9], 5, 568446438)),
			(d = l(d, a, b, c, f[e + 14], 9, 3275163606)),
			(c = l(c, d, a, b, f[e + 3], 14, 4107603335)),
			(b = l(b, c, d, a, f[e + 8], 20, 1163531501)),
			(a = l(a, b, c, d, f[e + 13], 5, 2850285829)),
			(d = l(d, a, b, c, f[e + 2], 9, 4243563512)),
			(c = l(c, d, a, b, f[e + 7], 14, 1735328473)),
			(b = l(b, c, d, a, f[e + 12], 20, 2368359562)),
			(a = m(a, b, c, d, f[e + 5], 4, 4294588738)),
			(d = m(d, a, b, c, f[e + 8], 11, 2272392833)),
			(c = m(c, d, a, b, f[e + 11], 16, 1839030562)),
			(b = m(b, c, d, a, f[e + 14], 23, 4259657740)),
			(a = m(a, b, c, d, f[e + 1], 4, 2763975236)),
			(d = m(d, a, b, c, f[e + 4], 11, 1272893353)),
			(c = m(c, d, a, b, f[e + 7], 16, 4139469664)),
			(b = m(b, c, d, a, f[e + 10], 23, 3200236656)),
			(a = m(a, b, c, d, f[e + 13], 4, 681279174)),
			(d = m(d, a, b, c, f[e + 0], 11, 3936430074)),
			(c = m(c, d, a, b, f[e + 3], 16, 3572445317)),
			(b = m(b, c, d, a, f[e + 6], 23, 76029189)),
			(a = m(a, b, c, d, f[e + 9], 4, 3654602809)),
			(d = m(d, a, b, c, f[e + 12], 11, 3873151461)),
			(c = m(c, d, a, b, f[e + 15], 16, 530742520)),
			(b = m(b, c, d, a, f[e + 2], 23, 3299628645)),
			(a = n(a, b, c, d, f[e + 0], 6, 4096336452)),
			(d = n(d, a, b, c, f[e + 7], 10, 1126891415)),
			(c = n(c, d, a, b, f[e + 14], 15, 2878612391)),
			(b = n(b, c, d, a, f[e + 5], 21, 4237533241)),
			(a = n(a, b, c, d, f[e + 12], 6, 1700485571)),
			(d = n(d, a, b, c, f[e + 3], 10, 2399980690)),
			(c = n(c, d, a, b, f[e + 10], 15, 4293915773)),
			(b = n(b, c, d, a, f[e + 1], 21, 2240044497)),
			(a = n(a, b, c, d, f[e + 8], 6, 1873313359)),
			(d = n(d, a, b, c, f[e + 15], 10, 4264355552)),
			(c = n(c, d, a, b, f[e + 6], 15, 2734768916)),
			(b = n(b, c, d, a, f[e + 13], 21, 1309151649)),
			(a = n(a, b, c, d, f[e + 4], 6, 4149444226)),
			(d = n(d, a, b, c, f[e + 11], 10, 3174756917)),
			(c = n(c, d, a, b, f[e + 2], 15, 718787259)),
			(b = n(b, c, d, a, f[e + 9], 21, 3951481745)),
			(a = h(a, q)),
			(b = h(b, r)),
			(c = h(c, s)),
			(d = h(d, t))
	return (p(a) + p(b) + p(c) + p(d)).toLowerCase()
}
export default defineComponent({
	name: 'SpWalletMenu',
	components: {
		SpAccountList,
		SpButton,
		SpLinkIcon
	},
	data() {
		return {
			opened: false,
			unlocking: false,
			toUnlock: null,
			password: ''
		}
	},
	computed: {
		walletList() {
			if (this._depsLoaded) {
				return this.$store.state.common.wallet.wallets
			} else {
				return []
			}
		},
		walletToUnlock() {
			return this.walletList.find((x) => x.name == this.toUnlock)
		},
		shortAddress() {
			if (this.currentAccount) {
				return (
					this.currentAccount.substr(0, 10) +
					'...' +
					this.currentAccount.slice(-5)
				)
			} else {
				return null
			}
		},
		currentAccount() {
			if (this._depsLoaded) {
				if (this.loggedIn) {
					return this.$store.getters['common/wallet/address']
				} else {
					return null
				}
			} else {
				return null
			}
		},
		walletName() {
			if (this._depsLoaded) {
				return this.$store.getters['common/wallet/walletName']
			} else {
				return ''
			}
		},
		loggedIn() {
			if (this._depsLoaded) {
				return this.$store.getters['common/wallet/loggedIn']
			} else {
				return false
			}
		},
		lastWallet() {
			if (this._depsLoaded) {
				return this.$store.getters['common/wallet/lastWallet']
			} else {
				return null
			}
		},
		topWallet() {
			return this.walletList.filter((x) => x.name == this.lastWallet)[0]
		},
		restWallets() {
			return this.walletList.filter((x) => x.name != this.lastWallet)
		},
		depsLoaded() {
			return this._depsLoaded
		}
	},
	beforeCreate() {
		const module = ['common', 'wallet']
		for (let i = 1; i <= module.length; i++) {
			let submod = module.slice(0, i)
			if (!this.$store.hasModule(submod)) {
				console.log('Module ' + this.module + ' has not been registered!')
				this._depsLoaded = false
				break
			}
		}
	},
	methods: {
		getAvatar(name) {
			return avatar(hash(name) + '', 64)
		},
		async unlockStoreWallet() {
			if (this._depsLoaded) {
				await this.$store.dispatch('common/wallet/unlockWallet', {
					name: this.walletToUnlock.name,
					password: this.password
				})
				this.unlocking = false
			}
		},
		createNewWallet() {
			this.$emit('createNew')
		},
		async toggleWallet(name) {
			if (name != this.walletName) {
				if (name == 'Keplr Integration') {
					await window.keplr.enable(this.$store.getters['common/env/chainId'])
					await this.$store.dispatch('common/wallet/unlockWallet', {
						name,
						password: null
					})
				} else {
					this.toUnlock = name
					this.unlocking = true
				}
			} else {
				await this.$store.dispatch('common/wallet/signOut')
				this.toUnlock = ''
				this.unlocking = false
			}
		}
	}
})
</script>
