import EventEmitter from 'events'
import { Type, Field } from 'protobufjs'
import {
	DirectSecp256k1HdWallet,
	DirectSecp256k1Wallet
} from '@cosmjs/proto-signing'
import {
	assertIsBroadcastTxSuccess,
	SigningStargateClient
} from '@cosmjs/stargate'
import { stringToPath } from '@cosmjs/crypto'

export default class DAO extends EventEmitter {
	static async createFromKey(apiClient, rpcNode, pKey, prefix) {
		const signer = await DirectSecp256k1Wallet.fromKey(pKey, prefix)
		const dao = new DAO(apiClient, rpcNode, signer)
		await dao.init()
		return dao
	}
	static async createFromMnemonic(
		apiClient,
		rpcNode,
		mnemonic,
		HDpath,
		prefix
	) {
		const signer = await DirectSecp256k1HdWallet.fromMnemonic(
			mnemonic,
			stringToPath(HDpath),
			prefix
		)
		const dao = new DAO(apiClient, rpcNode, signer)
		await dao.init()
		return dao
	}
	constructor(apiClient, rpcNode, signer) {
		super()
		this._rpcNode = rpcNode
		this._signer = signer
		this._apiClient = apiClient
	}
	async init() {
		try {
			this._client = await SigningStargateClient.connectWithSigner(
				this._rpcNode,
				this._signer
			)
		} catch (e) {
			throw 'Could not instantiate client'
		}

		const MsgCreatePost = new Type('MsgCreatePost')
			.add(new Field('creator', 1, 'string'))
			.add(new Field('title', 2, 'string'))
			.add(new Field('body', 3, 'string'))
			.add(new Field('votes', 4, 'int32'))
		this._client.registry.register('/foo.bar.blog.MsgCreatePost', MsgCreatePost)

		const MsgUpdatePost = new Type('MsgUpdatePost')
			.add(new Field('creator', 1, 'string'))
			.add(new Field('id', 2, 'string'))
			.add(new Field('title', 3, 'string'))
			.add(new Field('body', 4, 'string'))
			.add(new Field('votes', 5, 'int32'))
		this._client.registry.register('/foo.bar.blog.MsgUpdatePost', MsgUpdatePost)

		const MsgDeletePost = new Type('MsgDeletePost')
			.add(new Field('creator', 1, 'string'))
			.add(new Field('id', 2, 'string'))
		this._client.registry.register('/foo.bar.blog.MsgDeletePost', MsgDeletePost)
	}
	async broadcast(fromAddress, messages, memo, denom) {
		const fee = {
			amount: [{ amount: '0', denom }],
			gas: '200000'
		}
		try {
			const result = await this._client.signAndBroadcast(
				fromAddress,
				messages,
				fee,
				memo
			)
			assertIsBroadcastTxSuccess(result)
		} catch (e) {
			console.log(e)
			throw 'Failed to broadcast transaction.' + e
		}
	}
	modules = {
		foo: {
			bar: {
				blog: {
					name: 'blog',
					namespace: 'foo.bar',
					MsgCreatePost: (payload) => {
						return this._client.registry
							.lookupType('/foo.bar.blog.MsgCreatePost')
							.create(payload)
					},
					MsgUpdatePost: (payload) => {
						return this._client.registry
							.lookupType('/foo.bar.blog.MsgUpdatePost')
							.create(payload)
					},
					MsgDeletePost: (payload) => {
						return this._client.registry
							.lookupType('/foo.bar.blog.MsgDeletePost')
							.create(payload)
					},
					types: {
						Post: {
							name: 'Post',
							namespace: 'foo.bar.blog',
							fields: [
								{
									name: 'creator',
									type: 'string'
								},
								{
									name: 'id',
									type: 'string'
								},
								{
									name: 'title',
									type: 'string'
								},
								{
									name: 'body',
									type: 'string'
								},
								{
									name: 'votes',
									type: 'int'
								}
							]
						}
					},
					queries: {
						Post: async (id) => {
							return await this._apiClient.query('/foo/bar/blog/post', '/' + id)
						},
						PostAll: async () => {
							return await this._apiClient.query('/foo/bar/blog/post', '')
						}
					}
				}
			}
		}
	}
}
