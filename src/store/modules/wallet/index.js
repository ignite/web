import wallet from './wallet.js'

export default function init(store) {
	store.registerModule(['modules', 'wallet'], wallet)
}
