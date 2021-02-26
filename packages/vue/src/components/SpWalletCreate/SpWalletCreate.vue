<template>
	<div class="sp-wallet-create">
		<div class="sp-wallet-create__close">
			<a class="sp-icon sp-icon-Close" v-on:click="close" />
		</div>
		<template v-if="!createform && !importform">
			<div class="sp-wallet-create__title sp-header-text">{{ title }}</div>
			<div class="sp-wallet-create__text">
				<slot></slot>
			</div>
			<div class="sp-wallet-create__cards">
				<SpCard type="primary" icon="Add" v-on:click="createform = true"
					>Create New Wallet</SpCard
				>
				<SpCard type="secondary" icon="Upload">Import Existing Wallet</SpCard>
			</div>
		</template>
		<template v-if="createform">
			<div class="sp-wallet-create__title sp-header-text">Create Wallet</div>
			<div class="sp-wallet-create__text">
				Generate your own unique wallet. Receive a public address (0x...) and
				choose a method for access and recovery.
			</div>
			<div class="sp-wallet-create__form">
				<div class="sp-form-group">
					<input
						class="sp-input"
						v-model="create.name"
						type="text"
						placeholder="Wallet name"
					/>
				</div>
				<div class="sp-form-group">
					<input
						class="sp-input"
						v-model="create.password"
						type="password"
						placeholder="Password"
					/>
					<input
						class="sp-input"
						v-model="create.confirm"
						type="password"
						placeholder="Confirm password"
					/>
				</div>
				<SpButton>Create Wallet</SpButton>
			</div>
		</template>
		<template v-if="importform">
			<div class="sp-wallet-create__title sp-header-text">
				Import existing wallet
			</div>
			<div class="sp-wallet-create__text">
				Paste your recovery phrase or private key below to import your wallet.
			</div>
		</template>
	</div>
</template>
<script>
export default {
	name: 'SpWalletCreate',
	props: {
		title: {
			type: String
		}
	},
	data() {
		return {
			createform: false,
			importform: false,
			create: {
				name: '',
				password: '',
				confirm: ''
			}
		}
	},
	methods: {
		close() {
			this.$emit('close')
		}
	}
}
</script>
