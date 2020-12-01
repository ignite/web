export default {
	namespaced: true,
	actions: {
		async broadcast({ rootState }, { from_address, msgs, fee }) {
			const client = rootState.common.session.client
			return await client.signAndBroadcast(from_address, msgs, fee)
		}
	}
}
