import { SigningStargateClient } from "@cosmjs/stargate";
import { sha256 } from "js-sha256";
import { sleep } from "@cosmjs/utils";
const fromHexString = (hexString) =>
	new Uint8Array(hexString.match(/.{1,2}/g).map((byte) => parseInt(byte, 16)));

// This is a wrapper around SigningStargateClient that waits up to an additional 1 minute for a Tx to be committed regardless of rpc endpoint timeout response

export default class StarportSigningClient extends SigningStargateClient {
	async signAndBroadcast(signerAddress, messages, fee, memo = "") {
		return super.signAndBroadcast(signerAddress, messages, fee, memo);
	}
	async broadcastTx(tx) {
		let result;
		try {
			result = await super.broadcastTx(tx);
			return result;
		} catch (e) {
			try {
				let error = JSON.parse(e.message);
				if (
					error.code == -32603 &&
					error.data == "timed out waiting for tx to be included in a block"
				) {
					let txHash = sha256(Buffer.from(tx));
					let i = 0;
					while (i < 20) {
						try {
							let res = await this.tmClient.tx({
								hash: fromHexString(txHash),
								prove: true,
							});
							return {
								height: res.height,
								code: res.result.code,
								rawLog: res.result.log,
							};
						} catch (e) {
							
						}
						i++;
						await sleep(3000);
					}
					throw e;
				} else {
					throw e;
				}
			} catch (notjson) {
				throw e;
			}
		}
	}
}
