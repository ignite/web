import StarportSigningClient from "./lib/starportSigningClient";
import SpVuexError from '../../../errors/SpVuexError'
import { Endpoint, IbcClient, Link } from "./ts-relayer";
import { Registry, DirectSecp256k1HdWallet } from "@cosmjs/proto-signing";
import { stringToPath } from "@cosmjs/crypto";
import { sleep } from "@cosmjs/utils";
import { GasPrice } from "@cosmjs/launchpad";
import { defaultRegistryTypes } from "@cosmjs/stargate";
import { Tendermint34Client } from "@cosmjs/tendermint-rpc";
import { MsgTransfer } from "./ts-relayer/codec/ibc/applications/transfer/v1/tx";
import {
  MsgAcknowledgement,
  MsgChannelOpenAck,
  MsgChannelOpenConfirm,
  MsgChannelOpenInit,
  MsgChannelOpenTry,
  MsgRecvPacket,
  MsgTimeout,
} from "./ts-relayer/codec/ibc/core/channel/v1/tx";
import {
  MsgCreateClient,
  MsgUpdateClient,
} from "./ts-relayer/codec/ibc/core/client/v1/tx";
import {
  MsgConnectionOpenAck,
  MsgConnectionOpenConfirm,
  MsgConnectionOpenInit,
  MsgConnectionOpenTry,
} from "./ts-relayer/codec/ibc/core/connection/v1/tx";

function ibcRegistry() {
  return new Registry([
    ...defaultRegistryTypes,
    ["/ibc.core.client.v1.MsgCreateClient", MsgCreateClient],
    ["/ibc.core.client.v1.MsgUpdateClient", MsgUpdateClient],
    ["/ibc.core.connection.v1.MsgConnectionOpenInit", MsgConnectionOpenInit],
    ["/ibc.core.connection.v1.MsgConnectionOpenTry", MsgConnectionOpenTry],
    ["/ibc.core.connection.v1.MsgConnectionOpenAck", MsgConnectionOpenAck],
    [
      "/ibc.core.connection.v1.MsgConnectionOpenConfirm",
      MsgConnectionOpenConfirm,
    ],
    ["/ibc.core.channel.v1.MsgChannelOpenInit", MsgChannelOpenInit],
    ["/ibc.core.channel.v1.MsgChannelOpenTry", MsgChannelOpenTry],
    ["/ibc.core.channel.v1.MsgChannelOpenAck", MsgChannelOpenAck],
    ["/ibc.core.channel.v1.MsgChannelOpenConfirm", MsgChannelOpenConfirm],
    ["/ibc.core.channel.v1.MsgRecvPacket", MsgRecvPacket],
    ["/ibc.core.channel.v1.MsgAcknowledgement", MsgAcknowledgement],
    ["/ibc.core.channel.v1.MsgTimeout", MsgTimeout],
    ["/ibc.applications.transfer.v1.MsgTransfer", MsgTransfer],
  ]);
}

export default {
	namespaced: true,
	state() {
		return {
			relayers:JSON.parse(window.localStorage.getItem('relayers')) || [],
			transientLog: {
				msg: ''
			},
			relayerLinks:{}
		}
	},
	getters: {
		getRelayer: (state) => (name) => {
			return state.relayers.find(x => x.name==name)
		},
		getRelayerLink: (state) => (name) => {
			return state.relayerLinks[name]
		}
	},
	mutations: {
		CREATE_RELAYER(state,relayer) {
			state.relayers = [...state.relayers,relayer]
		},
		LINK_RELAYER(state,{name, link, ...linkDetails}) {
			let relayerIndex = state.relayers.findIndex(x => x.name==name)
			state.relayers[relayerIndex]={status: 'linked', ...state.relayers[relayerIndex],...linkDetails}
			state.relayerLinks[name]=link
		},
		CONNECT_RELAYER(state, {name, ...channelDetails}) {
			let relayerIndex = state.relayers.findIndex(x => x.name==name)
			state.relayers[relayerIndex]={status: 'connected', ...state.relayers[relayerIndex],...channelDetails}
		},
		RUN_RELAYER(state, name) {        
			state.relayers.find(x => x.name==name).running=true
		},
		STOP_RELAYER(state, name) {
			state.relayers.find(x => x.name==name).running=false
		},
		SET_LOG_MSG(state, msg) {
			state.transientLog.message=msg
		}
	},
	actions: {
		init() {

		},
		async createRelayer({commit, rootGetters},{ name, prefix, endpoint, gasPrice}) {
			let relayer = {
				name,prefix,endpoint,gasPrice,
				status: "created",
				running: false
			}

			const signerB = await DirectSecp256k1HdWallet.fromMnemonic(rootGetters['common/wallet/getMnemonic'],
				stringToPath("m/44'/118'/0'/0/0"),
				prefix
			);
			const [accountB] = await signerB.getAccounts();
			relayer.targetAddress=accountB.address
			commit('CREATE_RELAYER',relayer)
		},
		async loadRelayer({commit, rootGetters, getters,dispatch},{name}) {
			const relayer=getters['getRelayer'](name)
			if (relayer.status!=='linked' && relayer.status!=='connected') {
				throw new SpVuexError(
					'relayers:connectRelayer',
					'Relayer already connected.'
				)
			}
		},
		async linkRelayer({commit, rootGetters, getters,dispatch},{name}) {
			const relayer=getters['getRelayer'](name)
			if (relayer.status!=='created') {
				throw new SpVuexError(
					'relayers:connectRelayer',
					'Relayer already connected.'
				)
			}
			try {
				const signerA = await DirectSecp256k1HdWallet.fromMnemonic(rootGetters['common/wallet/getMnemonic'],
				stringToPath("m/44'/118'/0'/0/0"),
				rootGetters['common/env/getPrefix']
				);
				const signerB = await DirectSecp256k1HdWallet.fromMnemonic(rootGetters['common/wallet/getMnemonic'],
				stringToPath("m/44'/118'/0'/0/0"),
				relayer.prefix
				);
				const [accountA] = await signerA.getAccounts();
				const [accountB] = await signerB.getAccounts();
				const  transientLog = {
					info: (msg) => {
						commit('SET_LOG_MSG',msg)
					},
					error: () => {

					},
					warn: () => {

					},
					verbose: () => {

					},
					debug: () => {

					},
				}
				const optionsA = {
					prefix: rootGetters['common/env/getPrefix'],
					logger: transientLog,
					gasPrice: GasPrice.fromString("0.00000025token"),
					registry: ibcRegistry(),
				};
				const tmClientA = await Tendermint34Client.connect(
					rootGetters['common/env/apiTendermint']
				);
				const signingClientA = new StarportSigningClient(
					tmClientA,
					signerA,
					optionsA
				);
				const chainIdA = await signingClientA.getChainId();
				const optionsB = {
					prefix: relayer.prefix,
					logger: transientLog,
					gasPrice: GasPrice.fromString(relayer.gasPrice),
					registry: ibcRegistry(),
				};
				const tmClientB = await Tendermint34Client.connect(
					relayer.endpoint
				);
				const signingClientB = new StarportSigningClient(
					tmClientB,
					signerB,
					optionsB
				);
				const chainIdB = await signingClientB.getChainId();
		
				let clientA = new IbcClient(
					signingClientA,
					tmClientA,
					accountA.address,
					chainIdA,
					optionsA
				);
				let clientB = new IbcClient(
					signingClientB,
					tmClientB,
					accountB.address,
					chainIdB,
					optionsB
				);
				const link = await Link.createWithNewConnections(clientA, clientB);
				const linkData = {
					name,
					link,
					chainIdA,
					chainIdB,
					endA: {
						clientID: link.endA.clientID,
						connectionID: link.endA.connectionID
					},
					endB: {
						clientID: link.endB.clientID,
						connectionID: link.endB.connectionID
					}
				}
				commit('LINK_RELAYER',linkData)
				await dispatch('connectRelayer',name)
			}catch(e) {

			}
		},
		async connectRelayer({commit, getters,dispatch}, name) {
			const relayerLink=getters['getRelayerLink'](name)
			const channels = await relayerLink.createChannel(
				"A",
				"transfer",
				"transfer",
				1,
				"ics20-1"
			);
			const channelData = {
				name,
				...channels
			}
			commit("CONNECT_RELAYER",channelData)
			dispatch('runRelayer',name)
		},
		async runRelayer({commit,getters,dispatch},name) {
			const relayerLink=getters['getRelayerLink'](name)
			commit("RUN_RELAYER",name)
			dispatch('relayerLoop',name,relayerLink,
			{ poll: 1, maxAgeDest: 86400, maxAgeSrc: 86400 })
		},
		async stopRelayer({commit},name) {
			commit("STOP_RELAYER",name)
		},
		async relayerLoop({ getters }, { name, link, options }) {
			let relayer=getters['getRelayer'](name)
			let nextRelay = relayer.heights ?? {};
			while (getters['getRelayer'](name).running) {
				try {
					// TODO: make timeout windows more configurable
					nextRelay = await link.checkAndRelayPacketsAndAcks(nextRelay, 2, 6);
					window.localStorage.setItem(name+'-lastQueriedHeight', JSON.stringify(nextRelay, null, 2)
					);
					await link.updateClientIfStale("A", options.maxAgeDest);
					await link.updateClientIfStale("B", options.maxAgeSrc);
				} catch (e) {
					console.error(`Caught error: `, e);
				}
				await sleep(options.poll * 1000);
			}
		}
	}
}