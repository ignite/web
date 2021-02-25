<template>
	<div class="SpWalletList" v-if="depsLoaded">
		<div
			v-if="
				!newWallet.show &&
				!unlockWallet.show &&
				!keyWallet.show &&
				!importWallet.show
			"
		>
			<strong>AVAILABLE WALLETS:</strong>
			<ul v-if="walletList.length > 0">
				<li v-for="wallet in walletList" v-bind:key="wallet.name">
					<button @click="unlockWalletForm(wallet.name)" class="SpButton">
						<div class="SpWalletIcon" v-html="getAvatar(wallet.name)" />

						<div class="SpButtonText">
							{{ wallet.name }}
						</div>
					</button>
				</li>
			</ul>
			<div class="SpWalletListEmpty" v-else>
				<em>No wallets available</em>
			</div>
			<hr />
			<div class="SpWalletNew">
				<button @click="newWalletForm()" class="SpButton SpWalletButton">
					<div class="SpButtonText">CREATE NEW WALLET</div>
				</button>
			</div>
			<div class="SpWalletKey">
				<button @click="keyWalletForm()" class="SpButton SpWalletButton">
					<div class="SpButtonText">SIGN IN WITH PRIVATE KEY</div>
				</button>
			</div>
			<div class="SpWalletImport">
				<button @click="importWalletForm()" class="SpButton SpWalletButton">
					<div class="SpButtonText">IMPORT EXISTING WALLET</div>
				</button>
			</div>
		</div>
		<div
			class="SpWalletForm SpForm"
			v-if="newWallet.show && newWallet.step === 1"
		>
			<div class="SpWalletInputName">
				<input type="text" placeholder="Wallet name" v-model="newWallet.name" />
			</div>
			<div class="SpWalletInputMnemonic">
				<textarea
					v-model="newWallet.mnemonic"
					placeholder="Mnemonic (enter or click below to generate)"
				></textarea>
			</div>
			<div class="SpWalletGenerateMnemonic">
				<button @click="generateMnemonic()" class="SpButton">
					<div class="SpButtonText">GENERATE MNEMONIC</div>
				</button>
			</div>
			<div class="SpWalletNext">
				<button @click="cancel()" class="SpButton">
					<div class="SpButtonText">CANCEL</div>
				</button>
				<button
					@click="newWalletStep2()"
					class="SpButton"
					:disabled="!validStep1"
				>
					<div class="SpButtonText">NEXT</div>
				</button>
			</div>
		</div>
		<div
			class="SpWalletForm SpForm"
			v-if="newWallet.show && newWallet.step === 2"
		>
			<div class="SpWalletInputPassword">
				<input
					type="password"
					placeholder="Wallet password"
					v-model="newWallet.password"
				/>
			</div>
			<div class="SpWalletInputConfirm">
				<input
					type="password"
					placeholder="Confirm password"
					v-model="newWallet.confirm"
				/>
			</div>
			<div class="SpWalletCreate">
				<button
					@click="createWallet()"
					class="SpButton"
					:disabled="!validStep2"
				>
					<div class="SpButtonText">CREATE WALLET</div>
				</button>
			</div>
		</div>
		<div class="SpWalletForm SpForm" v-if="unlockWallet.show">
			<div class="SpFormTitle">
				<strong>UNLOCKING: </strong> {{ unlockWallet.name }}
			</div>
			<div class="SpWalletInputPassword">
				<input
					type="password"
					placeholder="Enter password"
					v-model="unlockWallet.password"
				/>
			</div>
			<div class="SpWalletUnlock">
				<button @click="cancel()" class="SpButton">
					<div class="SpButtonText">CANCEL</div>
				</button>
				<button
					@click="unlockStoreWallet()"
					class="SpButton"
					:disabled="!validUnlock"
				>
					<div class="SpButtonText">UNLOCK WALLET</div>
				</button>
			</div>
		</div>
		<div class="SpWalletForm SpForm" v-if="keyWallet.show">
			<div class="SpFormTitle">
				<strong>SIGN IN WITH PRIVATE KEY</strong>
			</div>
			<div class="SpWalletInputPassword">
				<input
					type="name"
					placeholder="Enter private key (WIF)"
					v-model="keyWallet.privKey"
				/>
			</div>
			<div class="SpWalletKey">
				<button @click="cancel()" class="SpButton">
					<div class="SpButtonText">CANCEL</div>
				</button>
				<button @click="signInWithKey()" class="SpButton">
					<div class="SpButtonText">SIGN IN</div>
				</button>
			</div>
		</div>
		<div class="SpWalletForm SpForm" v-if="importWallet.show">
			<div class="SpFormTitle">
				<strong>IMPORT EXISTING WALLET</strong>
			</div>
			<div class="SpWalletInputPassword">
				<input
					type="file"
					placeholder="Select backup .bin file"
					ref="backupFile"
				/>
			</div>
			<div class="SpWalletInputPassword">
				<input
					type="password"
					placeholder="Enter password"
					v-model="importWallet.password"
				/>
			</div>
			<div class="SpWalletImport">
				<button @click="cancel()" class="SpButton">
					<div class="SpButtonText">CANCEL</div>
				</button>
				<button @click="restoreBackup()" class="SpButton">
					<div class="SpButtonText">RESTORE</div>
				</button>
			</div>
		</div>
	</div>
</template>
<script>
import * as bip39 from 'bip39'
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
export default {
	name: 'SpWalletList',
	data() {
		return this.defaultState()
	},
	computed: {
		walletList() {
			if (this._depsLoaded) {
				return this.$store.state.chain.common.wallet.wallets
			} else {
				return []
			}
		},
		validStep1() {
			return (
				this.newWallet.name.trim() !== '' &&
				bip39.validateMnemonic(this.newWallet.mnemonic)
			)
		},
		validStep2() {
			return (
				this.newWallet.password.trim() !== '' &&
				this.newWallet.password == this.newWallet.confirm
			)
		},
		validUnlock() {
			return this.unlockWallet.password.trim() !== ''
		},
		depsLoaded() {
			return this._depsLoaded
		}
	},
	beforeCreate() {
		const module = ['chain', 'common', 'wallet']
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
		newWalletForm() {
			this.newWallet.show = true
			this.newWallet.step = 1
			this.newWallet.name = ''
			this.newWallet.mnemonic = ''
		},
		keyWalletForm() {
			this.keyWallet.show = true
			this.keyWallet.privKey = ''
		},
		importWalletForm() {
			this.importWallet.show = true
			this.importWallet.backup = ''
			this.importWallet.password = ''
		},
		unlockWalletForm(name) {
			this.unlockWallet.show = true
			this.unlockWallet.name = name
			this.unlockWallet.password = ''
		},
		newWalletStep2() {
			this.newWallet.step = 2
		},
		getAvatar(name) {
			return avatar(hash(name) + '', 64)
		},
		cancel() {
			this.newWallet.show = false
			this.newWallet.step = 1
			this.newWallet.name = ''
			this.newWallet.mnemonic = ''
			this.unlockWallet.show = false
			this.unlockWallet.name = name
			this.unlockWallet.password = ''
			this.keyWallet.show = false
			this.keyWallet.privKey = ''
			this.importWallet.show = false
			this.importWallet.backup = ''
			this.importWallet.password = ''
		},
		async restoreBackup() {
			if (this._depsLoaded) {
				let file = this.$refs.backupFile.files[0]
				if (!file) return
				let reader = new FileReader()
				reader.readAsText(file)
				reader.onload = (evt) => {
					this.$store.dispatch('chain/common/wallet/restoreWallet', {
						encrypted: evt.target.result,
						password: this.importWallet.password
					})
				}
			}
		},
		async signInWithKey() {
			if (this._depsLoaded) {
				await this.$store.dispatch('chain/common/wallet/signInWithPrivateKey', {
					privKey: this.keyWallet.privKey
				})
				this.reset()
				this.$emit('wallet-selected')
			}
		},
		async unlockStoreWallet() {
			if (this._depsLoaded) {
				await this.$store.dispatch('chain/common/wallet/unlockWallet', {
					name: this.unlockWallet.name,
					password: this.unlockWallet.password
				})
				this.reset()
				this.$emit('wallet-selected')
			}
		},
		reset() {
			Object.assign(this.$data, this.defaultState())
		},
		defaultState() {
			return {
				newWallet: {
					show: false,
					step: 1,
					name: '',
					mnemonic: '',
					password: '',
					confirm: ''
				},
				unlockWallet: {
					show: false,
					name: '',
					password: ''
				},
				keyWallet: {
					show: false,
					privKey: ''
				},
				importWallet: {
					show: false,
					backup: '',
					password: ''
				}
			}
		},
		generateMnemonic() {
			const mnemonic = bip39.generateMnemonic(256)
			this.newWallet.mnemonic = mnemonic
		},
		async createWallet() {
			if (this._depsLoaded) {
				await this.$store.dispatch(
					'chain/common/wallet/createWalletWithMnemonic',
					{
						name: this.newWallet.name,
						mnemonic: this.newWallet.mnemonic,
						password: this.newWallet.password
					}
				)
				this.reset()
			}
		}
	}
}
</script>
