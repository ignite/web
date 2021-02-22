/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
import * as $protobuf from 'protobufjs/minimal.js'

// Common aliases
const $Reader = $protobuf.Reader,
	$Writer = $protobuf.Writer,
	$util = $protobuf.util

// Exported root namespace
const $root = $protobuf.roots['default'] || ($protobuf.roots['default'] = {})

export const foo = ($root.foo = (() => {
	/**
	 * Namespace foo.
	 * @exports foo
	 * @namespace
	 */
	const foo = {}

	foo.bar = (function () {
		/**
		 * Namespace bar.
		 * @memberof foo
		 * @namespace
		 */
		const bar = {}

		bar.bar = (function () {
			/**
			 * Namespace bar.
			 * @memberof foo.bar
			 * @namespace
			 */
			const bar = {}

			bar.GenesisState = (function () {
				/**
				 * Properties of a GenesisState.
				 * @memberof foo.bar.bar
				 * @interface IGenesisState
				 */

				/**
				 * Constructs a new GenesisState.
				 * @memberof foo.bar.bar
				 * @classdesc Represents a GenesisState.
				 * @implements IGenesisState
				 * @constructor
				 * @param {foo.bar.bar.IGenesisState=} [properties] Properties to set
				 */
				function GenesisState(properties) {
					if (properties)
						for (
							let keys = Object.keys(properties), i = 0;
							i < keys.length;
							++i
						)
							if (properties[keys[i]] != null)
								this[keys[i]] = properties[keys[i]]
				}

				/**
				 * Creates a new GenesisState instance using the specified properties.
				 * @function create
				 * @memberof foo.bar.bar.GenesisState
				 * @static
				 * @param {foo.bar.bar.IGenesisState=} [properties] Properties to set
				 * @returns {foo.bar.bar.GenesisState} GenesisState instance
				 */
				GenesisState.create = function create(properties) {
					return new GenesisState(properties)
				}

				/**
				 * Encodes the specified GenesisState message. Does not implicitly {@link foo.bar.bar.GenesisState.verify|verify} messages.
				 * @function encode
				 * @memberof foo.bar.bar.GenesisState
				 * @static
				 * @param {foo.bar.bar.IGenesisState} message GenesisState message or plain object to encode
				 * @param {$protobuf.Writer} [writer] Writer to encode to
				 * @returns {$protobuf.Writer} Writer
				 */
				GenesisState.encode = function encode(message, writer) {
					if (!writer) writer = $Writer.create()
					return writer
				}

				/**
				 * Encodes the specified GenesisState message, length delimited. Does not implicitly {@link foo.bar.bar.GenesisState.verify|verify} messages.
				 * @function encodeDelimited
				 * @memberof foo.bar.bar.GenesisState
				 * @static
				 * @param {foo.bar.bar.IGenesisState} message GenesisState message or plain object to encode
				 * @param {$protobuf.Writer} [writer] Writer to encode to
				 * @returns {$protobuf.Writer} Writer
				 */
				GenesisState.encodeDelimited = function encodeDelimited(
					message,
					writer
				) {
					return this.encode(message, writer).ldelim()
				}

				/**
				 * Decodes a GenesisState message from the specified reader or buffer.
				 * @function decode
				 * @memberof foo.bar.bar.GenesisState
				 * @static
				 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
				 * @param {number} [length] Message length if known beforehand
				 * @returns {foo.bar.bar.GenesisState} GenesisState
				 * @throws {Error} If the payload is not a reader or valid buffer
				 * @throws {$protobuf.util.ProtocolError} If required fields are missing
				 */
				GenesisState.decode = function decode(reader, length) {
					if (!(reader instanceof $Reader)) reader = $Reader.create(reader)
					let end = length === undefined ? reader.len : reader.pos + length,
						message = new $root.foo.bar.bar.GenesisState()
					while (reader.pos < end) {
						let tag = reader.uint32()
						switch (tag >>> 3) {
							default:
								reader.skipType(tag & 7)
								break
						}
					}
					return message
				}

				/**
				 * Decodes a GenesisState message from the specified reader or buffer, length delimited.
				 * @function decodeDelimited
				 * @memberof foo.bar.bar.GenesisState
				 * @static
				 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
				 * @returns {foo.bar.bar.GenesisState} GenesisState
				 * @throws {Error} If the payload is not a reader or valid buffer
				 * @throws {$protobuf.util.ProtocolError} If required fields are missing
				 */
				GenesisState.decodeDelimited = function decodeDelimited(reader) {
					if (!(reader instanceof $Reader)) reader = new $Reader(reader)
					return this.decode(reader, reader.uint32())
				}

				/**
				 * Verifies a GenesisState message.
				 * @function verify
				 * @memberof foo.bar.bar.GenesisState
				 * @static
				 * @param {Object.<string,*>} message Plain object to verify
				 * @returns {string|null} `null` if valid, otherwise the reason why it is not
				 */
				GenesisState.verify = function verify(message) {
					if (typeof message !== 'object' || message === null)
						return 'object expected'
					return null
				}

				/**
				 * Creates a GenesisState message from a plain object. Also converts values to their respective internal types.
				 * @function fromObject
				 * @memberof foo.bar.bar.GenesisState
				 * @static
				 * @param {Object.<string,*>} object Plain object
				 * @returns {foo.bar.bar.GenesisState} GenesisState
				 */
				GenesisState.fromObject = function fromObject(object) {
					if (object instanceof $root.foo.bar.bar.GenesisState) return object
					return new $root.foo.bar.bar.GenesisState()
				}

				/**
				 * Creates a plain object from a GenesisState message. Also converts values to other types if specified.
				 * @function toObject
				 * @memberof foo.bar.bar.GenesisState
				 * @static
				 * @param {foo.bar.bar.GenesisState} message GenesisState
				 * @param {$protobuf.IConversionOptions} [options] Conversion options
				 * @returns {Object.<string,*>} Plain object
				 */
				GenesisState.toObject = function toObject() {
					return {}
				}

				/**
				 * Converts this GenesisState to JSON.
				 * @function toJSON
				 * @memberof foo.bar.bar.GenesisState
				 * @instance
				 * @returns {Object.<string,*>} JSON object
				 */
				GenesisState.prototype.toJSON = function toJSON() {
					return this.constructor.toObject(this, $protobuf.util.toJSONOptions)
				}

				return GenesisState
			})()

			bar.Query = (function () {
				/**
				 * Constructs a new Query service.
				 * @memberof foo.bar.bar
				 * @classdesc Represents a Query
				 * @extends $protobuf.rpc.Service
				 * @constructor
				 * @param {$protobuf.RPCImpl} rpcImpl RPC implementation
				 * @param {boolean} [requestDelimited=false] Whether requests are length-delimited
				 * @param {boolean} [responseDelimited=false] Whether responses are length-delimited
				 */
				function Query(rpcImpl, requestDelimited, responseDelimited) {
					$protobuf.rpc.Service.call(
						this,
						rpcImpl,
						requestDelimited,
						responseDelimited
					)
				}

				;(Query.prototype = Object.create(
					$protobuf.rpc.Service.prototype
				)).constructor = Query

				/**
				 * Creates new Query service using the specified rpc implementation.
				 * @function create
				 * @memberof foo.bar.bar.Query
				 * @static
				 * @param {$protobuf.RPCImpl} rpcImpl RPC implementation
				 * @param {boolean} [requestDelimited=false] Whether requests are length-delimited
				 * @param {boolean} [responseDelimited=false] Whether responses are length-delimited
				 * @returns {Query} RPC service. Useful where requests and/or responses are streamed.
				 */
				Query.create = function create(
					rpcImpl,
					requestDelimited,
					responseDelimited
				) {
					return new this(rpcImpl, requestDelimited, responseDelimited)
				}

				return Query
			})()

			bar.Msg = (function () {
				/**
				 * Constructs a new Msg service.
				 * @memberof foo.bar.bar
				 * @classdesc Represents a Msg
				 * @extends $protobuf.rpc.Service
				 * @constructor
				 * @param {$protobuf.RPCImpl} rpcImpl RPC implementation
				 * @param {boolean} [requestDelimited=false] Whether requests are length-delimited
				 * @param {boolean} [responseDelimited=false] Whether responses are length-delimited
				 */
				function Msg(rpcImpl, requestDelimited, responseDelimited) {
					$protobuf.rpc.Service.call(
						this,
						rpcImpl,
						requestDelimited,
						responseDelimited
					)
				}

				;(Msg.prototype = Object.create(
					$protobuf.rpc.Service.prototype
				)).constructor = Msg

				/**
				 * Creates new Msg service using the specified rpc implementation.
				 * @function create
				 * @memberof foo.bar.bar.Msg
				 * @static
				 * @param {$protobuf.RPCImpl} rpcImpl RPC implementation
				 * @param {boolean} [requestDelimited=false] Whether requests are length-delimited
				 * @param {boolean} [responseDelimited=false] Whether responses are length-delimited
				 * @returns {Msg} RPC service. Useful where requests and/or responses are streamed.
				 */
				Msg.create = function create(
					rpcImpl,
					requestDelimited,
					responseDelimited
				) {
					return new this(rpcImpl, requestDelimited, responseDelimited)
				}

				return Msg
			})()

			return bar
		})()

		bar.blog = (function () {
			/**
			 * Namespace blog.
			 * @memberof foo.bar
			 * @namespace
			 */
			const blog = {}

			blog.GenesisState = (function () {
				/**
				 * Properties of a GenesisState.
				 * @memberof foo.bar.blog
				 * @interface IGenesisState
				 * @property {Array.<foo.bar.blog.IPost>|null} [postList] GenesisState postList
				 */

				/**
				 * Constructs a new GenesisState.
				 * @memberof foo.bar.blog
				 * @classdesc Represents a GenesisState.
				 * @implements IGenesisState
				 * @constructor
				 * @param {foo.bar.blog.IGenesisState=} [properties] Properties to set
				 */
				function GenesisState(properties) {
					this.postList = []
					if (properties)
						for (
							let keys = Object.keys(properties), i = 0;
							i < keys.length;
							++i
						)
							if (properties[keys[i]] != null)
								this[keys[i]] = properties[keys[i]]
				}

				/**
				 * GenesisState postList.
				 * @member {Array.<foo.bar.blog.IPost>} postList
				 * @memberof foo.bar.blog.GenesisState
				 * @instance
				 */
				GenesisState.prototype.postList = $util.emptyArray

				/**
				 * Creates a new GenesisState instance using the specified properties.
				 * @function create
				 * @memberof foo.bar.blog.GenesisState
				 * @static
				 * @param {foo.bar.blog.IGenesisState=} [properties] Properties to set
				 * @returns {foo.bar.blog.GenesisState} GenesisState instance
				 */
				GenesisState.create = function create(properties) {
					return new GenesisState(properties)
				}

				/**
				 * Encodes the specified GenesisState message. Does not implicitly {@link foo.bar.blog.GenesisState.verify|verify} messages.
				 * @function encode
				 * @memberof foo.bar.blog.GenesisState
				 * @static
				 * @param {foo.bar.blog.IGenesisState} message GenesisState message or plain object to encode
				 * @param {$protobuf.Writer} [writer] Writer to encode to
				 * @returns {$protobuf.Writer} Writer
				 */
				GenesisState.encode = function encode(message, writer) {
					if (!writer) writer = $Writer.create()
					if (message.postList != null && message.postList.length)
						for (let i = 0; i < message.postList.length; ++i)
							$root.foo.bar.blog.Post.encode(
								message.postList[i],
								writer.uint32(/* id 1, wireType 2 =*/ 10).fork()
							).ldelim()
					return writer
				}

				/**
				 * Encodes the specified GenesisState message, length delimited. Does not implicitly {@link foo.bar.blog.GenesisState.verify|verify} messages.
				 * @function encodeDelimited
				 * @memberof foo.bar.blog.GenesisState
				 * @static
				 * @param {foo.bar.blog.IGenesisState} message GenesisState message or plain object to encode
				 * @param {$protobuf.Writer} [writer] Writer to encode to
				 * @returns {$protobuf.Writer} Writer
				 */
				GenesisState.encodeDelimited = function encodeDelimited(
					message,
					writer
				) {
					return this.encode(message, writer).ldelim()
				}

				/**
				 * Decodes a GenesisState message from the specified reader or buffer.
				 * @function decode
				 * @memberof foo.bar.blog.GenesisState
				 * @static
				 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
				 * @param {number} [length] Message length if known beforehand
				 * @returns {foo.bar.blog.GenesisState} GenesisState
				 * @throws {Error} If the payload is not a reader or valid buffer
				 * @throws {$protobuf.util.ProtocolError} If required fields are missing
				 */
				GenesisState.decode = function decode(reader, length) {
					if (!(reader instanceof $Reader)) reader = $Reader.create(reader)
					let end = length === undefined ? reader.len : reader.pos + length,
						message = new $root.foo.bar.blog.GenesisState()
					while (reader.pos < end) {
						let tag = reader.uint32()
						switch (tag >>> 3) {
							case 1:
								if (!(message.postList && message.postList.length))
									message.postList = []
								message.postList.push(
									$root.foo.bar.blog.Post.decode(reader, reader.uint32())
								)
								break
							default:
								reader.skipType(tag & 7)
								break
						}
					}
					return message
				}

				/**
				 * Decodes a GenesisState message from the specified reader or buffer, length delimited.
				 * @function decodeDelimited
				 * @memberof foo.bar.blog.GenesisState
				 * @static
				 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
				 * @returns {foo.bar.blog.GenesisState} GenesisState
				 * @throws {Error} If the payload is not a reader or valid buffer
				 * @throws {$protobuf.util.ProtocolError} If required fields are missing
				 */
				GenesisState.decodeDelimited = function decodeDelimited(reader) {
					if (!(reader instanceof $Reader)) reader = new $Reader(reader)
					return this.decode(reader, reader.uint32())
				}

				/**
				 * Verifies a GenesisState message.
				 * @function verify
				 * @memberof foo.bar.blog.GenesisState
				 * @static
				 * @param {Object.<string,*>} message Plain object to verify
				 * @returns {string|null} `null` if valid, otherwise the reason why it is not
				 */
				GenesisState.verify = function verify(message) {
					if (typeof message !== 'object' || message === null)
						return 'object expected'
					if (message.postList != null && message.hasOwnProperty('postList')) {
						if (!Array.isArray(message.postList))
							return 'postList: array expected'
						for (let i = 0; i < message.postList.length; ++i) {
							let error = $root.foo.bar.blog.Post.verify(message.postList[i])
							if (error) return 'postList.' + error
						}
					}
					return null
				}

				/**
				 * Creates a GenesisState message from a plain object. Also converts values to their respective internal types.
				 * @function fromObject
				 * @memberof foo.bar.blog.GenesisState
				 * @static
				 * @param {Object.<string,*>} object Plain object
				 * @returns {foo.bar.blog.GenesisState} GenesisState
				 */
				GenesisState.fromObject = function fromObject(object) {
					if (object instanceof $root.foo.bar.blog.GenesisState) return object
					let message = new $root.foo.bar.blog.GenesisState()
					if (object.postList) {
						if (!Array.isArray(object.postList))
							throw TypeError(
								'.foo.bar.blog.GenesisState.postList: array expected'
							)
						message.postList = []
						for (let i = 0; i < object.postList.length; ++i) {
							if (typeof object.postList[i] !== 'object')
								throw TypeError(
									'.foo.bar.blog.GenesisState.postList: object expected'
								)
							message.postList[i] = $root.foo.bar.blog.Post.fromObject(
								object.postList[i]
							)
						}
					}
					return message
				}

				/**
				 * Creates a plain object from a GenesisState message. Also converts values to other types if specified.
				 * @function toObject
				 * @memberof foo.bar.blog.GenesisState
				 * @static
				 * @param {foo.bar.blog.GenesisState} message GenesisState
				 * @param {$protobuf.IConversionOptions} [options] Conversion options
				 * @returns {Object.<string,*>} Plain object
				 */
				GenesisState.toObject = function toObject(message, options) {
					if (!options) options = {}
					let object = {}
					if (options.arrays || options.defaults) object.postList = []
					if (message.postList && message.postList.length) {
						object.postList = []
						for (let j = 0; j < message.postList.length; ++j)
							object.postList[j] = $root.foo.bar.blog.Post.toObject(
								message.postList[j],
								options
							)
					}
					return object
				}

				/**
				 * Converts this GenesisState to JSON.
				 * @function toJSON
				 * @memberof foo.bar.blog.GenesisState
				 * @instance
				 * @returns {Object.<string,*>} JSON object
				 */
				GenesisState.prototype.toJSON = function toJSON() {
					return this.constructor.toObject(this, $protobuf.util.toJSONOptions)
				}

				return GenesisState
			})()

			blog.Post = (function () {
				/**
				 * Properties of a Post.
				 * @memberof foo.bar.blog
				 * @interface IPost
				 * @property {string|null} [creator] Post creator
				 * @property {string|null} [id] Post id
				 * @property {string|null} [title] Post title
				 * @property {string|null} [body] Post body
				 * @property {number|null} [votes] Post votes
				 */

				/**
				 * Constructs a new Post.
				 * @memberof foo.bar.blog
				 * @classdesc Represents a Post.
				 * @implements IPost
				 * @constructor
				 * @param {foo.bar.blog.IPost=} [properties] Properties to set
				 */
				function Post(properties) {
					if (properties)
						for (
							let keys = Object.keys(properties), i = 0;
							i < keys.length;
							++i
						)
							if (properties[keys[i]] != null)
								this[keys[i]] = properties[keys[i]]
				}

				/**
				 * Post creator.
				 * @member {string} creator
				 * @memberof foo.bar.blog.Post
				 * @instance
				 */
				Post.prototype.creator = ''

				/**
				 * Post id.
				 * @member {string} id
				 * @memberof foo.bar.blog.Post
				 * @instance
				 */
				Post.prototype.id = ''

				/**
				 * Post title.
				 * @member {string} title
				 * @memberof foo.bar.blog.Post
				 * @instance
				 */
				Post.prototype.title = ''

				/**
				 * Post body.
				 * @member {string} body
				 * @memberof foo.bar.blog.Post
				 * @instance
				 */
				Post.prototype.body = ''

				/**
				 * Post votes.
				 * @member {number} votes
				 * @memberof foo.bar.blog.Post
				 * @instance
				 */
				Post.prototype.votes = 0

				/**
				 * Creates a new Post instance using the specified properties.
				 * @function create
				 * @memberof foo.bar.blog.Post
				 * @static
				 * @param {foo.bar.blog.IPost=} [properties] Properties to set
				 * @returns {foo.bar.blog.Post} Post instance
				 */
				Post.create = function create(properties) {
					return new Post(properties)
				}

				/**
				 * Encodes the specified Post message. Does not implicitly {@link foo.bar.blog.Post.verify|verify} messages.
				 * @function encode
				 * @memberof foo.bar.blog.Post
				 * @static
				 * @param {foo.bar.blog.IPost} message Post message or plain object to encode
				 * @param {$protobuf.Writer} [writer] Writer to encode to
				 * @returns {$protobuf.Writer} Writer
				 */
				Post.encode = function encode(message, writer) {
					if (!writer) writer = $Writer.create()
					if (
						message.creator != null &&
						Object.hasOwnProperty.call(message, 'creator')
					)
						writer.uint32(/* id 1, wireType 2 =*/ 10).string(message.creator)
					if (message.id != null && Object.hasOwnProperty.call(message, 'id'))
						writer.uint32(/* id 2, wireType 2 =*/ 18).string(message.id)
					if (
						message.title != null &&
						Object.hasOwnProperty.call(message, 'title')
					)
						writer.uint32(/* id 3, wireType 2 =*/ 26).string(message.title)
					if (
						message.body != null &&
						Object.hasOwnProperty.call(message, 'body')
					)
						writer.uint32(/* id 4, wireType 2 =*/ 34).string(message.body)
					if (
						message.votes != null &&
						Object.hasOwnProperty.call(message, 'votes')
					)
						writer.uint32(/* id 5, wireType 0 =*/ 40).int32(message.votes)
					return writer
				}

				/**
				 * Encodes the specified Post message, length delimited. Does not implicitly {@link foo.bar.blog.Post.verify|verify} messages.
				 * @function encodeDelimited
				 * @memberof foo.bar.blog.Post
				 * @static
				 * @param {foo.bar.blog.IPost} message Post message or plain object to encode
				 * @param {$protobuf.Writer} [writer] Writer to encode to
				 * @returns {$protobuf.Writer} Writer
				 */
				Post.encodeDelimited = function encodeDelimited(message, writer) {
					return this.encode(message, writer).ldelim()
				}

				/**
				 * Decodes a Post message from the specified reader or buffer.
				 * @function decode
				 * @memberof foo.bar.blog.Post
				 * @static
				 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
				 * @param {number} [length] Message length if known beforehand
				 * @returns {foo.bar.blog.Post} Post
				 * @throws {Error} If the payload is not a reader or valid buffer
				 * @throws {$protobuf.util.ProtocolError} If required fields are missing
				 */
				Post.decode = function decode(reader, length) {
					if (!(reader instanceof $Reader)) reader = $Reader.create(reader)
					let end = length === undefined ? reader.len : reader.pos + length,
						message = new $root.foo.bar.blog.Post()
					while (reader.pos < end) {
						let tag = reader.uint32()
						switch (tag >>> 3) {
							case 1:
								message.creator = reader.string()
								break
							case 2:
								message.id = reader.string()
								break
							case 3:
								message.title = reader.string()
								break
							case 4:
								message.body = reader.string()
								break
							case 5:
								message.votes = reader.int32()
								break
							default:
								reader.skipType(tag & 7)
								break
						}
					}
					return message
				}

				/**
				 * Decodes a Post message from the specified reader or buffer, length delimited.
				 * @function decodeDelimited
				 * @memberof foo.bar.blog.Post
				 * @static
				 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
				 * @returns {foo.bar.blog.Post} Post
				 * @throws {Error} If the payload is not a reader or valid buffer
				 * @throws {$protobuf.util.ProtocolError} If required fields are missing
				 */
				Post.decodeDelimited = function decodeDelimited(reader) {
					if (!(reader instanceof $Reader)) reader = new $Reader(reader)
					return this.decode(reader, reader.uint32())
				}

				/**
				 * Verifies a Post message.
				 * @function verify
				 * @memberof foo.bar.blog.Post
				 * @static
				 * @param {Object.<string,*>} message Plain object to verify
				 * @returns {string|null} `null` if valid, otherwise the reason why it is not
				 */
				Post.verify = function verify(message) {
					if (typeof message !== 'object' || message === null)
						return 'object expected'
					if (message.creator != null && message.hasOwnProperty('creator'))
						if (!$util.isString(message.creator))
							return 'creator: string expected'
					if (message.id != null && message.hasOwnProperty('id'))
						if (!$util.isString(message.id)) return 'id: string expected'
					if (message.title != null && message.hasOwnProperty('title'))
						if (!$util.isString(message.title)) return 'title: string expected'
					if (message.body != null && message.hasOwnProperty('body'))
						if (!$util.isString(message.body)) return 'body: string expected'
					if (message.votes != null && message.hasOwnProperty('votes'))
						if (!$util.isInteger(message.votes))
							return 'votes: integer expected'
					return null
				}

				/**
				 * Creates a Post message from a plain object. Also converts values to their respective internal types.
				 * @function fromObject
				 * @memberof foo.bar.blog.Post
				 * @static
				 * @param {Object.<string,*>} object Plain object
				 * @returns {foo.bar.blog.Post} Post
				 */
				Post.fromObject = function fromObject(object) {
					if (object instanceof $root.foo.bar.blog.Post) return object
					let message = new $root.foo.bar.blog.Post()
					if (object.creator != null) message.creator = String(object.creator)
					if (object.id != null) message.id = String(object.id)
					if (object.title != null) message.title = String(object.title)
					if (object.body != null) message.body = String(object.body)
					if (object.votes != null) message.votes = object.votes | 0
					return message
				}

				/**
				 * Creates a plain object from a Post message. Also converts values to other types if specified.
				 * @function toObject
				 * @memberof foo.bar.blog.Post
				 * @static
				 * @param {foo.bar.blog.Post} message Post
				 * @param {$protobuf.IConversionOptions} [options] Conversion options
				 * @returns {Object.<string,*>} Plain object
				 */
				Post.toObject = function toObject(message, options) {
					if (!options) options = {}
					let object = {}
					if (options.defaults) {
						object.creator = ''
						object.id = ''
						object.title = ''
						object.body = ''
						object.votes = 0
					}
					if (message.creator != null && message.hasOwnProperty('creator'))
						object.creator = message.creator
					if (message.id != null && message.hasOwnProperty('id'))
						object.id = message.id
					if (message.title != null && message.hasOwnProperty('title'))
						object.title = message.title
					if (message.body != null && message.hasOwnProperty('body'))
						object.body = message.body
					if (message.votes != null && message.hasOwnProperty('votes'))
						object.votes = message.votes
					return object
				}

				/**
				 * Converts this Post to JSON.
				 * @function toJSON
				 * @memberof foo.bar.blog.Post
				 * @instance
				 * @returns {Object.<string,*>} JSON object
				 */
				Post.prototype.toJSON = function toJSON() {
					return this.constructor.toObject(this, $protobuf.util.toJSONOptions)
				}

				return Post
			})()

			blog.Query = (function () {
				/**
				 * Constructs a new Query service.
				 * @memberof foo.bar.blog
				 * @classdesc Represents a Query
				 * @extends $protobuf.rpc.Service
				 * @constructor
				 * @param {$protobuf.RPCImpl} rpcImpl RPC implementation
				 * @param {boolean} [requestDelimited=false] Whether requests are length-delimited
				 * @param {boolean} [responseDelimited=false] Whether responses are length-delimited
				 */
				function Query(rpcImpl, requestDelimited, responseDelimited) {
					$protobuf.rpc.Service.call(
						this,
						rpcImpl,
						requestDelimited,
						responseDelimited
					)
				}

				;(Query.prototype = Object.create(
					$protobuf.rpc.Service.prototype
				)).constructor = Query

				/**
				 * Creates new Query service using the specified rpc implementation.
				 * @function create
				 * @memberof foo.bar.blog.Query
				 * @static
				 * @param {$protobuf.RPCImpl} rpcImpl RPC implementation
				 * @param {boolean} [requestDelimited=false] Whether requests are length-delimited
				 * @param {boolean} [responseDelimited=false] Whether responses are length-delimited
				 * @returns {Query} RPC service. Useful where requests and/or responses are streamed.
				 */
				Query.create = function create(
					rpcImpl,
					requestDelimited,
					responseDelimited
				) {
					return new this(rpcImpl, requestDelimited, responseDelimited)
				}

				/**
				 * Callback as used by {@link foo.bar.blog.Query#post}.
				 * @memberof foo.bar.blog.Query
				 * @typedef PostCallback
				 * @type {function}
				 * @param {Error|null} error Error, if any
				 * @param {foo.bar.blog.QueryGetPostResponse} [response] QueryGetPostResponse
				 */

				/**
				 * Calls Post.
				 * @function post
				 * @memberof foo.bar.blog.Query
				 * @instance
				 * @param {foo.bar.blog.IQueryGetPostRequest} request QueryGetPostRequest message or plain object
				 * @param {foo.bar.blog.Query.PostCallback} callback Node-style callback called with the error, if any, and QueryGetPostResponse
				 * @returns {undefined}
				 * @variation 1
				 */
				Object.defineProperty(
					(Query.prototype.post = function post(request, callback) {
						return this.rpcCall(
							post,
							$root.foo.bar.blog.QueryGetPostRequest,
							$root.foo.bar.blog.QueryGetPostResponse,
							request,
							callback
						)
					}),
					'name',
					{ value: 'Post' }
				)

				/**
				 * Calls Post.
				 * @function post
				 * @memberof foo.bar.blog.Query
				 * @instance
				 * @param {foo.bar.blog.IQueryGetPostRequest} request QueryGetPostRequest message or plain object
				 * @returns {Promise<foo.bar.blog.QueryGetPostResponse>} Promise
				 * @variation 2
				 */

				/**
				 * Callback as used by {@link foo.bar.blog.Query#postAll}.
				 * @memberof foo.bar.blog.Query
				 * @typedef PostAllCallback
				 * @type {function}
				 * @param {Error|null} error Error, if any
				 * @param {foo.bar.blog.QueryAllPostResponse} [response] QueryAllPostResponse
				 */

				/**
				 * Calls PostAll.
				 * @function postAll
				 * @memberof foo.bar.blog.Query
				 * @instance
				 * @param {foo.bar.blog.IQueryAllPostRequest} request QueryAllPostRequest message or plain object
				 * @param {foo.bar.blog.Query.PostAllCallback} callback Node-style callback called with the error, if any, and QueryAllPostResponse
				 * @returns {undefined}
				 * @variation 1
				 */
				Object.defineProperty(
					(Query.prototype.postAll = function postAll(request, callback) {
						return this.rpcCall(
							postAll,
							$root.foo.bar.blog.QueryAllPostRequest,
							$root.foo.bar.blog.QueryAllPostResponse,
							request,
							callback
						)
					}),
					'name',
					{ value: 'PostAll' }
				)

				/**
				 * Calls PostAll.
				 * @function postAll
				 * @memberof foo.bar.blog.Query
				 * @instance
				 * @param {foo.bar.blog.IQueryAllPostRequest} request QueryAllPostRequest message or plain object
				 * @returns {Promise<foo.bar.blog.QueryAllPostResponse>} Promise
				 * @variation 2
				 */

				return Query
			})()

			blog.QueryGetPostRequest = (function () {
				/**
				 * Properties of a QueryGetPostRequest.
				 * @memberof foo.bar.blog
				 * @interface IQueryGetPostRequest
				 * @property {string|null} [id] QueryGetPostRequest id
				 */

				/**
				 * Constructs a new QueryGetPostRequest.
				 * @memberof foo.bar.blog
				 * @classdesc Represents a QueryGetPostRequest.
				 * @implements IQueryGetPostRequest
				 * @constructor
				 * @param {foo.bar.blog.IQueryGetPostRequest=} [properties] Properties to set
				 */
				function QueryGetPostRequest(properties) {
					if (properties)
						for (
							let keys = Object.keys(properties), i = 0;
							i < keys.length;
							++i
						)
							if (properties[keys[i]] != null)
								this[keys[i]] = properties[keys[i]]
				}

				/**
				 * QueryGetPostRequest id.
				 * @member {string} id
				 * @memberof foo.bar.blog.QueryGetPostRequest
				 * @instance
				 */
				QueryGetPostRequest.prototype.id = ''

				/**
				 * Creates a new QueryGetPostRequest instance using the specified properties.
				 * @function create
				 * @memberof foo.bar.blog.QueryGetPostRequest
				 * @static
				 * @param {foo.bar.blog.IQueryGetPostRequest=} [properties] Properties to set
				 * @returns {foo.bar.blog.QueryGetPostRequest} QueryGetPostRequest instance
				 */
				QueryGetPostRequest.create = function create(properties) {
					return new QueryGetPostRequest(properties)
				}

				/**
				 * Encodes the specified QueryGetPostRequest message. Does not implicitly {@link foo.bar.blog.QueryGetPostRequest.verify|verify} messages.
				 * @function encode
				 * @memberof foo.bar.blog.QueryGetPostRequest
				 * @static
				 * @param {foo.bar.blog.IQueryGetPostRequest} message QueryGetPostRequest message or plain object to encode
				 * @param {$protobuf.Writer} [writer] Writer to encode to
				 * @returns {$protobuf.Writer} Writer
				 */
				QueryGetPostRequest.encode = function encode(message, writer) {
					if (!writer) writer = $Writer.create()
					if (message.id != null && Object.hasOwnProperty.call(message, 'id'))
						writer.uint32(/* id 1, wireType 2 =*/ 10).string(message.id)
					return writer
				}

				/**
				 * Encodes the specified QueryGetPostRequest message, length delimited. Does not implicitly {@link foo.bar.blog.QueryGetPostRequest.verify|verify} messages.
				 * @function encodeDelimited
				 * @memberof foo.bar.blog.QueryGetPostRequest
				 * @static
				 * @param {foo.bar.blog.IQueryGetPostRequest} message QueryGetPostRequest message or plain object to encode
				 * @param {$protobuf.Writer} [writer] Writer to encode to
				 * @returns {$protobuf.Writer} Writer
				 */
				QueryGetPostRequest.encodeDelimited = function encodeDelimited(
					message,
					writer
				) {
					return this.encode(message, writer).ldelim()
				}

				/**
				 * Decodes a QueryGetPostRequest message from the specified reader or buffer.
				 * @function decode
				 * @memberof foo.bar.blog.QueryGetPostRequest
				 * @static
				 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
				 * @param {number} [length] Message length if known beforehand
				 * @returns {foo.bar.blog.QueryGetPostRequest} QueryGetPostRequest
				 * @throws {Error} If the payload is not a reader or valid buffer
				 * @throws {$protobuf.util.ProtocolError} If required fields are missing
				 */
				QueryGetPostRequest.decode = function decode(reader, length) {
					if (!(reader instanceof $Reader)) reader = $Reader.create(reader)
					let end = length === undefined ? reader.len : reader.pos + length,
						message = new $root.foo.bar.blog.QueryGetPostRequest()
					while (reader.pos < end) {
						let tag = reader.uint32()
						switch (tag >>> 3) {
							case 1:
								message.id = reader.string()
								break
							default:
								reader.skipType(tag & 7)
								break
						}
					}
					return message
				}

				/**
				 * Decodes a QueryGetPostRequest message from the specified reader or buffer, length delimited.
				 * @function decodeDelimited
				 * @memberof foo.bar.blog.QueryGetPostRequest
				 * @static
				 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
				 * @returns {foo.bar.blog.QueryGetPostRequest} QueryGetPostRequest
				 * @throws {Error} If the payload is not a reader or valid buffer
				 * @throws {$protobuf.util.ProtocolError} If required fields are missing
				 */
				QueryGetPostRequest.decodeDelimited = function decodeDelimited(reader) {
					if (!(reader instanceof $Reader)) reader = new $Reader(reader)
					return this.decode(reader, reader.uint32())
				}

				/**
				 * Verifies a QueryGetPostRequest message.
				 * @function verify
				 * @memberof foo.bar.blog.QueryGetPostRequest
				 * @static
				 * @param {Object.<string,*>} message Plain object to verify
				 * @returns {string|null} `null` if valid, otherwise the reason why it is not
				 */
				QueryGetPostRequest.verify = function verify(message) {
					if (typeof message !== 'object' || message === null)
						return 'object expected'
					if (message.id != null && message.hasOwnProperty('id'))
						if (!$util.isString(message.id)) return 'id: string expected'
					return null
				}

				/**
				 * Creates a QueryGetPostRequest message from a plain object. Also converts values to their respective internal types.
				 * @function fromObject
				 * @memberof foo.bar.blog.QueryGetPostRequest
				 * @static
				 * @param {Object.<string,*>} object Plain object
				 * @returns {foo.bar.blog.QueryGetPostRequest} QueryGetPostRequest
				 */
				QueryGetPostRequest.fromObject = function fromObject(object) {
					if (object instanceof $root.foo.bar.blog.QueryGetPostRequest)
						return object
					let message = new $root.foo.bar.blog.QueryGetPostRequest()
					if (object.id != null) message.id = String(object.id)
					return message
				}

				/**
				 * Creates a plain object from a QueryGetPostRequest message. Also converts values to other types if specified.
				 * @function toObject
				 * @memberof foo.bar.blog.QueryGetPostRequest
				 * @static
				 * @param {foo.bar.blog.QueryGetPostRequest} message QueryGetPostRequest
				 * @param {$protobuf.IConversionOptions} [options] Conversion options
				 * @returns {Object.<string,*>} Plain object
				 */
				QueryGetPostRequest.toObject = function toObject(message, options) {
					if (!options) options = {}
					let object = {}
					if (options.defaults) object.id = ''
					if (message.id != null && message.hasOwnProperty('id'))
						object.id = message.id
					return object
				}

				/**
				 * Converts this QueryGetPostRequest to JSON.
				 * @function toJSON
				 * @memberof foo.bar.blog.QueryGetPostRequest
				 * @instance
				 * @returns {Object.<string,*>} JSON object
				 */
				QueryGetPostRequest.prototype.toJSON = function toJSON() {
					return this.constructor.toObject(this, $protobuf.util.toJSONOptions)
				}

				return QueryGetPostRequest
			})()

			blog.QueryGetPostResponse = (function () {
				/**
				 * Properties of a QueryGetPostResponse.
				 * @memberof foo.bar.blog
				 * @interface IQueryGetPostResponse
				 * @property {foo.bar.blog.IPost|null} [Post] QueryGetPostResponse Post
				 */

				/**
				 * Constructs a new QueryGetPostResponse.
				 * @memberof foo.bar.blog
				 * @classdesc Represents a QueryGetPostResponse.
				 * @implements IQueryGetPostResponse
				 * @constructor
				 * @param {foo.bar.blog.IQueryGetPostResponse=} [properties] Properties to set
				 */
				function QueryGetPostResponse(properties) {
					if (properties)
						for (
							let keys = Object.keys(properties), i = 0;
							i < keys.length;
							++i
						)
							if (properties[keys[i]] != null)
								this[keys[i]] = properties[keys[i]]
				}

				/**
				 * QueryGetPostResponse Post.
				 * @member {foo.bar.blog.IPost|null|undefined} Post
				 * @memberof foo.bar.blog.QueryGetPostResponse
				 * @instance
				 */
				QueryGetPostResponse.prototype.Post = null

				/**
				 * Creates a new QueryGetPostResponse instance using the specified properties.
				 * @function create
				 * @memberof foo.bar.blog.QueryGetPostResponse
				 * @static
				 * @param {foo.bar.blog.IQueryGetPostResponse=} [properties] Properties to set
				 * @returns {foo.bar.blog.QueryGetPostResponse} QueryGetPostResponse instance
				 */
				QueryGetPostResponse.create = function create(properties) {
					return new QueryGetPostResponse(properties)
				}

				/**
				 * Encodes the specified QueryGetPostResponse message. Does not implicitly {@link foo.bar.blog.QueryGetPostResponse.verify|verify} messages.
				 * @function encode
				 * @memberof foo.bar.blog.QueryGetPostResponse
				 * @static
				 * @param {foo.bar.blog.IQueryGetPostResponse} message QueryGetPostResponse message or plain object to encode
				 * @param {$protobuf.Writer} [writer] Writer to encode to
				 * @returns {$protobuf.Writer} Writer
				 */
				QueryGetPostResponse.encode = function encode(message, writer) {
					if (!writer) writer = $Writer.create()
					if (
						message.Post != null &&
						Object.hasOwnProperty.call(message, 'Post')
					)
						$root.foo.bar.blog.Post.encode(
							message.Post,
							writer.uint32(/* id 1, wireType 2 =*/ 10).fork()
						).ldelim()
					return writer
				}

				/**
				 * Encodes the specified QueryGetPostResponse message, length delimited. Does not implicitly {@link foo.bar.blog.QueryGetPostResponse.verify|verify} messages.
				 * @function encodeDelimited
				 * @memberof foo.bar.blog.QueryGetPostResponse
				 * @static
				 * @param {foo.bar.blog.IQueryGetPostResponse} message QueryGetPostResponse message or plain object to encode
				 * @param {$protobuf.Writer} [writer] Writer to encode to
				 * @returns {$protobuf.Writer} Writer
				 */
				QueryGetPostResponse.encodeDelimited = function encodeDelimited(
					message,
					writer
				) {
					return this.encode(message, writer).ldelim()
				}

				/**
				 * Decodes a QueryGetPostResponse message from the specified reader or buffer.
				 * @function decode
				 * @memberof foo.bar.blog.QueryGetPostResponse
				 * @static
				 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
				 * @param {number} [length] Message length if known beforehand
				 * @returns {foo.bar.blog.QueryGetPostResponse} QueryGetPostResponse
				 * @throws {Error} If the payload is not a reader or valid buffer
				 * @throws {$protobuf.util.ProtocolError} If required fields are missing
				 */
				QueryGetPostResponse.decode = function decode(reader, length) {
					if (!(reader instanceof $Reader)) reader = $Reader.create(reader)
					let end = length === undefined ? reader.len : reader.pos + length,
						message = new $root.foo.bar.blog.QueryGetPostResponse()
					while (reader.pos < end) {
						let tag = reader.uint32()
						switch (tag >>> 3) {
							case 1:
								message.Post = $root.foo.bar.blog.Post.decode(
									reader,
									reader.uint32()
								)
								break
							default:
								reader.skipType(tag & 7)
								break
						}
					}
					return message
				}

				/**
				 * Decodes a QueryGetPostResponse message from the specified reader or buffer, length delimited.
				 * @function decodeDelimited
				 * @memberof foo.bar.blog.QueryGetPostResponse
				 * @static
				 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
				 * @returns {foo.bar.blog.QueryGetPostResponse} QueryGetPostResponse
				 * @throws {Error} If the payload is not a reader or valid buffer
				 * @throws {$protobuf.util.ProtocolError} If required fields are missing
				 */
				QueryGetPostResponse.decodeDelimited = function decodeDelimited(
					reader
				) {
					if (!(reader instanceof $Reader)) reader = new $Reader(reader)
					return this.decode(reader, reader.uint32())
				}

				/**
				 * Verifies a QueryGetPostResponse message.
				 * @function verify
				 * @memberof foo.bar.blog.QueryGetPostResponse
				 * @static
				 * @param {Object.<string,*>} message Plain object to verify
				 * @returns {string|null} `null` if valid, otherwise the reason why it is not
				 */
				QueryGetPostResponse.verify = function verify(message) {
					if (typeof message !== 'object' || message === null)
						return 'object expected'
					if (message.Post != null && message.hasOwnProperty('Post')) {
						let error = $root.foo.bar.blog.Post.verify(message.Post)
						if (error) return 'Post.' + error
					}
					return null
				}

				/**
				 * Creates a QueryGetPostResponse message from a plain object. Also converts values to their respective internal types.
				 * @function fromObject
				 * @memberof foo.bar.blog.QueryGetPostResponse
				 * @static
				 * @param {Object.<string,*>} object Plain object
				 * @returns {foo.bar.blog.QueryGetPostResponse} QueryGetPostResponse
				 */
				QueryGetPostResponse.fromObject = function fromObject(object) {
					if (object instanceof $root.foo.bar.blog.QueryGetPostResponse)
						return object
					let message = new $root.foo.bar.blog.QueryGetPostResponse()
					if (object.Post != null) {
						if (typeof object.Post !== 'object')
							throw TypeError(
								'.foo.bar.blog.QueryGetPostResponse.Post: object expected'
							)
						message.Post = $root.foo.bar.blog.Post.fromObject(object.Post)
					}
					return message
				}

				/**
				 * Creates a plain object from a QueryGetPostResponse message. Also converts values to other types if specified.
				 * @function toObject
				 * @memberof foo.bar.blog.QueryGetPostResponse
				 * @static
				 * @param {foo.bar.blog.QueryGetPostResponse} message QueryGetPostResponse
				 * @param {$protobuf.IConversionOptions} [options] Conversion options
				 * @returns {Object.<string,*>} Plain object
				 */
				QueryGetPostResponse.toObject = function toObject(message, options) {
					if (!options) options = {}
					let object = {}
					if (options.defaults) object.Post = null
					if (message.Post != null && message.hasOwnProperty('Post'))
						object.Post = $root.foo.bar.blog.Post.toObject(
							message.Post,
							options
						)
					return object
				}

				/**
				 * Converts this QueryGetPostResponse to JSON.
				 * @function toJSON
				 * @memberof foo.bar.blog.QueryGetPostResponse
				 * @instance
				 * @returns {Object.<string,*>} JSON object
				 */
				QueryGetPostResponse.prototype.toJSON = function toJSON() {
					return this.constructor.toObject(this, $protobuf.util.toJSONOptions)
				}

				return QueryGetPostResponse
			})()

			blog.QueryAllPostRequest = (function () {
				/**
				 * Properties of a QueryAllPostRequest.
				 * @memberof foo.bar.blog
				 * @interface IQueryAllPostRequest
				 * @property {cosmos.base.query.v1beta1.IPageRequest|null} [pagination] QueryAllPostRequest pagination
				 */

				/**
				 * Constructs a new QueryAllPostRequest.
				 * @memberof foo.bar.blog
				 * @classdesc Represents a QueryAllPostRequest.
				 * @implements IQueryAllPostRequest
				 * @constructor
				 * @param {foo.bar.blog.IQueryAllPostRequest=} [properties] Properties to set
				 */
				function QueryAllPostRequest(properties) {
					if (properties)
						for (
							let keys = Object.keys(properties), i = 0;
							i < keys.length;
							++i
						)
							if (properties[keys[i]] != null)
								this[keys[i]] = properties[keys[i]]
				}

				/**
				 * QueryAllPostRequest pagination.
				 * @member {cosmos.base.query.v1beta1.IPageRequest|null|undefined} pagination
				 * @memberof foo.bar.blog.QueryAllPostRequest
				 * @instance
				 */
				QueryAllPostRequest.prototype.pagination = null

				/**
				 * Creates a new QueryAllPostRequest instance using the specified properties.
				 * @function create
				 * @memberof foo.bar.blog.QueryAllPostRequest
				 * @static
				 * @param {foo.bar.blog.IQueryAllPostRequest=} [properties] Properties to set
				 * @returns {foo.bar.blog.QueryAllPostRequest} QueryAllPostRequest instance
				 */
				QueryAllPostRequest.create = function create(properties) {
					return new QueryAllPostRequest(properties)
				}

				/**
				 * Encodes the specified QueryAllPostRequest message. Does not implicitly {@link foo.bar.blog.QueryAllPostRequest.verify|verify} messages.
				 * @function encode
				 * @memberof foo.bar.blog.QueryAllPostRequest
				 * @static
				 * @param {foo.bar.blog.IQueryAllPostRequest} message QueryAllPostRequest message or plain object to encode
				 * @param {$protobuf.Writer} [writer] Writer to encode to
				 * @returns {$protobuf.Writer} Writer
				 */
				QueryAllPostRequest.encode = function encode(message, writer) {
					if (!writer) writer = $Writer.create()
					if (
						message.pagination != null &&
						Object.hasOwnProperty.call(message, 'pagination')
					)
						$root.cosmos.base.query.v1beta1.PageRequest.encode(
							message.pagination,
							writer.uint32(/* id 1, wireType 2 =*/ 10).fork()
						).ldelim()
					return writer
				}

				/**
				 * Encodes the specified QueryAllPostRequest message, length delimited. Does not implicitly {@link foo.bar.blog.QueryAllPostRequest.verify|verify} messages.
				 * @function encodeDelimited
				 * @memberof foo.bar.blog.QueryAllPostRequest
				 * @static
				 * @param {foo.bar.blog.IQueryAllPostRequest} message QueryAllPostRequest message or plain object to encode
				 * @param {$protobuf.Writer} [writer] Writer to encode to
				 * @returns {$protobuf.Writer} Writer
				 */
				QueryAllPostRequest.encodeDelimited = function encodeDelimited(
					message,
					writer
				) {
					return this.encode(message, writer).ldelim()
				}

				/**
				 * Decodes a QueryAllPostRequest message from the specified reader or buffer.
				 * @function decode
				 * @memberof foo.bar.blog.QueryAllPostRequest
				 * @static
				 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
				 * @param {number} [length] Message length if known beforehand
				 * @returns {foo.bar.blog.QueryAllPostRequest} QueryAllPostRequest
				 * @throws {Error} If the payload is not a reader or valid buffer
				 * @throws {$protobuf.util.ProtocolError} If required fields are missing
				 */
				QueryAllPostRequest.decode = function decode(reader, length) {
					if (!(reader instanceof $Reader)) reader = $Reader.create(reader)
					let end = length === undefined ? reader.len : reader.pos + length,
						message = new $root.foo.bar.blog.QueryAllPostRequest()
					while (reader.pos < end) {
						let tag = reader.uint32()
						switch (tag >>> 3) {
							case 1:
								message.pagination = $root.cosmos.base.query.v1beta1.PageRequest.decode(
									reader,
									reader.uint32()
								)
								break
							default:
								reader.skipType(tag & 7)
								break
						}
					}
					return message
				}

				/**
				 * Decodes a QueryAllPostRequest message from the specified reader or buffer, length delimited.
				 * @function decodeDelimited
				 * @memberof foo.bar.blog.QueryAllPostRequest
				 * @static
				 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
				 * @returns {foo.bar.blog.QueryAllPostRequest} QueryAllPostRequest
				 * @throws {Error} If the payload is not a reader or valid buffer
				 * @throws {$protobuf.util.ProtocolError} If required fields are missing
				 */
				QueryAllPostRequest.decodeDelimited = function decodeDelimited(reader) {
					if (!(reader instanceof $Reader)) reader = new $Reader(reader)
					return this.decode(reader, reader.uint32())
				}

				/**
				 * Verifies a QueryAllPostRequest message.
				 * @function verify
				 * @memberof foo.bar.blog.QueryAllPostRequest
				 * @static
				 * @param {Object.<string,*>} message Plain object to verify
				 * @returns {string|null} `null` if valid, otherwise the reason why it is not
				 */
				QueryAllPostRequest.verify = function verify(message) {
					if (typeof message !== 'object' || message === null)
						return 'object expected'
					if (
						message.pagination != null &&
						message.hasOwnProperty('pagination')
					) {
						let error = $root.cosmos.base.query.v1beta1.PageRequest.verify(
							message.pagination
						)
						if (error) return 'pagination.' + error
					}
					return null
				}

				/**
				 * Creates a QueryAllPostRequest message from a plain object. Also converts values to their respective internal types.
				 * @function fromObject
				 * @memberof foo.bar.blog.QueryAllPostRequest
				 * @static
				 * @param {Object.<string,*>} object Plain object
				 * @returns {foo.bar.blog.QueryAllPostRequest} QueryAllPostRequest
				 */
				QueryAllPostRequest.fromObject = function fromObject(object) {
					if (object instanceof $root.foo.bar.blog.QueryAllPostRequest)
						return object
					let message = new $root.foo.bar.blog.QueryAllPostRequest()
					if (object.pagination != null) {
						if (typeof object.pagination !== 'object')
							throw TypeError(
								'.foo.bar.blog.QueryAllPostRequest.pagination: object expected'
							)
						message.pagination = $root.cosmos.base.query.v1beta1.PageRequest.fromObject(
							object.pagination
						)
					}
					return message
				}

				/**
				 * Creates a plain object from a QueryAllPostRequest message. Also converts values to other types if specified.
				 * @function toObject
				 * @memberof foo.bar.blog.QueryAllPostRequest
				 * @static
				 * @param {foo.bar.blog.QueryAllPostRequest} message QueryAllPostRequest
				 * @param {$protobuf.IConversionOptions} [options] Conversion options
				 * @returns {Object.<string,*>} Plain object
				 */
				QueryAllPostRequest.toObject = function toObject(message, options) {
					if (!options) options = {}
					let object = {}
					if (options.defaults) object.pagination = null
					if (
						message.pagination != null &&
						message.hasOwnProperty('pagination')
					)
						object.pagination = $root.cosmos.base.query.v1beta1.PageRequest.toObject(
							message.pagination,
							options
						)
					return object
				}

				/**
				 * Converts this QueryAllPostRequest to JSON.
				 * @function toJSON
				 * @memberof foo.bar.blog.QueryAllPostRequest
				 * @instance
				 * @returns {Object.<string,*>} JSON object
				 */
				QueryAllPostRequest.prototype.toJSON = function toJSON() {
					return this.constructor.toObject(this, $protobuf.util.toJSONOptions)
				}

				return QueryAllPostRequest
			})()

			blog.QueryAllPostResponse = (function () {
				/**
				 * Properties of a QueryAllPostResponse.
				 * @memberof foo.bar.blog
				 * @interface IQueryAllPostResponse
				 * @property {Array.<foo.bar.blog.IPost>|null} [Post] QueryAllPostResponse Post
				 * @property {cosmos.base.query.v1beta1.IPageResponse|null} [pagination] QueryAllPostResponse pagination
				 */

				/**
				 * Constructs a new QueryAllPostResponse.
				 * @memberof foo.bar.blog
				 * @classdesc Represents a QueryAllPostResponse.
				 * @implements IQueryAllPostResponse
				 * @constructor
				 * @param {foo.bar.blog.IQueryAllPostResponse=} [properties] Properties to set
				 */
				function QueryAllPostResponse(properties) {
					this.Post = []
					if (properties)
						for (
							let keys = Object.keys(properties), i = 0;
							i < keys.length;
							++i
						)
							if (properties[keys[i]] != null)
								this[keys[i]] = properties[keys[i]]
				}

				/**
				 * QueryAllPostResponse Post.
				 * @member {Array.<foo.bar.blog.IPost>} Post
				 * @memberof foo.bar.blog.QueryAllPostResponse
				 * @instance
				 */
				QueryAllPostResponse.prototype.Post = $util.emptyArray

				/**
				 * QueryAllPostResponse pagination.
				 * @member {cosmos.base.query.v1beta1.IPageResponse|null|undefined} pagination
				 * @memberof foo.bar.blog.QueryAllPostResponse
				 * @instance
				 */
				QueryAllPostResponse.prototype.pagination = null

				/**
				 * Creates a new QueryAllPostResponse instance using the specified properties.
				 * @function create
				 * @memberof foo.bar.blog.QueryAllPostResponse
				 * @static
				 * @param {foo.bar.blog.IQueryAllPostResponse=} [properties] Properties to set
				 * @returns {foo.bar.blog.QueryAllPostResponse} QueryAllPostResponse instance
				 */
				QueryAllPostResponse.create = function create(properties) {
					return new QueryAllPostResponse(properties)
				}

				/**
				 * Encodes the specified QueryAllPostResponse message. Does not implicitly {@link foo.bar.blog.QueryAllPostResponse.verify|verify} messages.
				 * @function encode
				 * @memberof foo.bar.blog.QueryAllPostResponse
				 * @static
				 * @param {foo.bar.blog.IQueryAllPostResponse} message QueryAllPostResponse message or plain object to encode
				 * @param {$protobuf.Writer} [writer] Writer to encode to
				 * @returns {$protobuf.Writer} Writer
				 */
				QueryAllPostResponse.encode = function encode(message, writer) {
					if (!writer) writer = $Writer.create()
					if (message.Post != null && message.Post.length)
						for (let i = 0; i < message.Post.length; ++i)
							$root.foo.bar.blog.Post.encode(
								message.Post[i],
								writer.uint32(/* id 1, wireType 2 =*/ 10).fork()
							).ldelim()
					if (
						message.pagination != null &&
						Object.hasOwnProperty.call(message, 'pagination')
					)
						$root.cosmos.base.query.v1beta1.PageResponse.encode(
							message.pagination,
							writer.uint32(/* id 2, wireType 2 =*/ 18).fork()
						).ldelim()
					return writer
				}

				/**
				 * Encodes the specified QueryAllPostResponse message, length delimited. Does not implicitly {@link foo.bar.blog.QueryAllPostResponse.verify|verify} messages.
				 * @function encodeDelimited
				 * @memberof foo.bar.blog.QueryAllPostResponse
				 * @static
				 * @param {foo.bar.blog.IQueryAllPostResponse} message QueryAllPostResponse message or plain object to encode
				 * @param {$protobuf.Writer} [writer] Writer to encode to
				 * @returns {$protobuf.Writer} Writer
				 */
				QueryAllPostResponse.encodeDelimited = function encodeDelimited(
					message,
					writer
				) {
					return this.encode(message, writer).ldelim()
				}

				/**
				 * Decodes a QueryAllPostResponse message from the specified reader or buffer.
				 * @function decode
				 * @memberof foo.bar.blog.QueryAllPostResponse
				 * @static
				 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
				 * @param {number} [length] Message length if known beforehand
				 * @returns {foo.bar.blog.QueryAllPostResponse} QueryAllPostResponse
				 * @throws {Error} If the payload is not a reader or valid buffer
				 * @throws {$protobuf.util.ProtocolError} If required fields are missing
				 */
				QueryAllPostResponse.decode = function decode(reader, length) {
					if (!(reader instanceof $Reader)) reader = $Reader.create(reader)
					let end = length === undefined ? reader.len : reader.pos + length,
						message = new $root.foo.bar.blog.QueryAllPostResponse()
					while (reader.pos < end) {
						let tag = reader.uint32()
						switch (tag >>> 3) {
							case 1:
								if (!(message.Post && message.Post.length)) message.Post = []
								message.Post.push(
									$root.foo.bar.blog.Post.decode(reader, reader.uint32())
								)
								break
							case 2:
								message.pagination = $root.cosmos.base.query.v1beta1.PageResponse.decode(
									reader,
									reader.uint32()
								)
								break
							default:
								reader.skipType(tag & 7)
								break
						}
					}
					return message
				}

				/**
				 * Decodes a QueryAllPostResponse message from the specified reader or buffer, length delimited.
				 * @function decodeDelimited
				 * @memberof foo.bar.blog.QueryAllPostResponse
				 * @static
				 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
				 * @returns {foo.bar.blog.QueryAllPostResponse} QueryAllPostResponse
				 * @throws {Error} If the payload is not a reader or valid buffer
				 * @throws {$protobuf.util.ProtocolError} If required fields are missing
				 */
				QueryAllPostResponse.decodeDelimited = function decodeDelimited(
					reader
				) {
					if (!(reader instanceof $Reader)) reader = new $Reader(reader)
					return this.decode(reader, reader.uint32())
				}

				/**
				 * Verifies a QueryAllPostResponse message.
				 * @function verify
				 * @memberof foo.bar.blog.QueryAllPostResponse
				 * @static
				 * @param {Object.<string,*>} message Plain object to verify
				 * @returns {string|null} `null` if valid, otherwise the reason why it is not
				 */
				QueryAllPostResponse.verify = function verify(message) {
					if (typeof message !== 'object' || message === null)
						return 'object expected'
					if (message.Post != null && message.hasOwnProperty('Post')) {
						if (!Array.isArray(message.Post)) return 'Post: array expected'
						for (let i = 0; i < message.Post.length; ++i) {
							let error = $root.foo.bar.blog.Post.verify(message.Post[i])
							if (error) return 'Post.' + error
						}
					}
					if (
						message.pagination != null &&
						message.hasOwnProperty('pagination')
					) {
						let error = $root.cosmos.base.query.v1beta1.PageResponse.verify(
							message.pagination
						)
						if (error) return 'pagination.' + error
					}
					return null
				}

				/**
				 * Creates a QueryAllPostResponse message from a plain object. Also converts values to their respective internal types.
				 * @function fromObject
				 * @memberof foo.bar.blog.QueryAllPostResponse
				 * @static
				 * @param {Object.<string,*>} object Plain object
				 * @returns {foo.bar.blog.QueryAllPostResponse} QueryAllPostResponse
				 */
				QueryAllPostResponse.fromObject = function fromObject(object) {
					if (object instanceof $root.foo.bar.blog.QueryAllPostResponse)
						return object
					let message = new $root.foo.bar.blog.QueryAllPostResponse()
					if (object.Post) {
						if (!Array.isArray(object.Post))
							throw TypeError(
								'.foo.bar.blog.QueryAllPostResponse.Post: array expected'
							)
						message.Post = []
						for (let i = 0; i < object.Post.length; ++i) {
							if (typeof object.Post[i] !== 'object')
								throw TypeError(
									'.foo.bar.blog.QueryAllPostResponse.Post: object expected'
								)
							message.Post[i] = $root.foo.bar.blog.Post.fromObject(
								object.Post[i]
							)
						}
					}
					if (object.pagination != null) {
						if (typeof object.pagination !== 'object')
							throw TypeError(
								'.foo.bar.blog.QueryAllPostResponse.pagination: object expected'
							)
						message.pagination = $root.cosmos.base.query.v1beta1.PageResponse.fromObject(
							object.pagination
						)
					}
					return message
				}

				/**
				 * Creates a plain object from a QueryAllPostResponse message. Also converts values to other types if specified.
				 * @function toObject
				 * @memberof foo.bar.blog.QueryAllPostResponse
				 * @static
				 * @param {foo.bar.blog.QueryAllPostResponse} message QueryAllPostResponse
				 * @param {$protobuf.IConversionOptions} [options] Conversion options
				 * @returns {Object.<string,*>} Plain object
				 */
				QueryAllPostResponse.toObject = function toObject(message, options) {
					if (!options) options = {}
					let object = {}
					if (options.arrays || options.defaults) object.Post = []
					if (options.defaults) object.pagination = null
					if (message.Post && message.Post.length) {
						object.Post = []
						for (let j = 0; j < message.Post.length; ++j)
							object.Post[j] = $root.foo.bar.blog.Post.toObject(
								message.Post[j],
								options
							)
					}
					if (
						message.pagination != null &&
						message.hasOwnProperty('pagination')
					)
						object.pagination = $root.cosmos.base.query.v1beta1.PageResponse.toObject(
							message.pagination,
							options
						)
					return object
				}

				/**
				 * Converts this QueryAllPostResponse to JSON.
				 * @function toJSON
				 * @memberof foo.bar.blog.QueryAllPostResponse
				 * @instance
				 * @returns {Object.<string,*>} JSON object
				 */
				QueryAllPostResponse.prototype.toJSON = function toJSON() {
					return this.constructor.toObject(this, $protobuf.util.toJSONOptions)
				}

				return QueryAllPostResponse
			})()

			blog.Msg = (function () {
				/**
				 * Constructs a new Msg service.
				 * @memberof foo.bar.blog
				 * @classdesc Represents a Msg
				 * @extends $protobuf.rpc.Service
				 * @constructor
				 * @param {$protobuf.RPCImpl} rpcImpl RPC implementation
				 * @param {boolean} [requestDelimited=false] Whether requests are length-delimited
				 * @param {boolean} [responseDelimited=false] Whether responses are length-delimited
				 */
				function Msg(rpcImpl, requestDelimited, responseDelimited) {
					$protobuf.rpc.Service.call(
						this,
						rpcImpl,
						requestDelimited,
						responseDelimited
					)
				}

				;(Msg.prototype = Object.create(
					$protobuf.rpc.Service.prototype
				)).constructor = Msg

				/**
				 * Creates new Msg service using the specified rpc implementation.
				 * @function create
				 * @memberof foo.bar.blog.Msg
				 * @static
				 * @param {$protobuf.RPCImpl} rpcImpl RPC implementation
				 * @param {boolean} [requestDelimited=false] Whether requests are length-delimited
				 * @param {boolean} [responseDelimited=false] Whether responses are length-delimited
				 * @returns {Msg} RPC service. Useful where requests and/or responses are streamed.
				 */
				Msg.create = function create(
					rpcImpl,
					requestDelimited,
					responseDelimited
				) {
					return new this(rpcImpl, requestDelimited, responseDelimited)
				}

				/**
				 * Callback as used by {@link foo.bar.blog.Msg#createPost}.
				 * @memberof foo.bar.blog.Msg
				 * @typedef CreatePostCallback
				 * @type {function}
				 * @param {Error|null} error Error, if any
				 * @param {foo.bar.blog.MsgCreatePostResponse} [response] MsgCreatePostResponse
				 */

				/**
				 * Calls CreatePost.
				 * @function createPost
				 * @memberof foo.bar.blog.Msg
				 * @instance
				 * @param {foo.bar.blog.IMsgCreatePost} request MsgCreatePost message or plain object
				 * @param {foo.bar.blog.Msg.CreatePostCallback} callback Node-style callback called with the error, if any, and MsgCreatePostResponse
				 * @returns {undefined}
				 * @variation 1
				 */
				Object.defineProperty(
					(Msg.prototype.createPost = function createPost(request, callback) {
						return this.rpcCall(
							createPost,
							$root.foo.bar.blog.MsgCreatePost,
							$root.foo.bar.blog.MsgCreatePostResponse,
							request,
							callback
						)
					}),
					'name',
					{ value: 'CreatePost' }
				)

				/**
				 * Calls CreatePost.
				 * @function createPost
				 * @memberof foo.bar.blog.Msg
				 * @instance
				 * @param {foo.bar.blog.IMsgCreatePost} request MsgCreatePost message or plain object
				 * @returns {Promise<foo.bar.blog.MsgCreatePostResponse>} Promise
				 * @variation 2
				 */

				/**
				 * Callback as used by {@link foo.bar.blog.Msg#updatePost}.
				 * @memberof foo.bar.blog.Msg
				 * @typedef UpdatePostCallback
				 * @type {function}
				 * @param {Error|null} error Error, if any
				 * @param {foo.bar.blog.MsgUpdatePostResponse} [response] MsgUpdatePostResponse
				 */

				/**
				 * Calls UpdatePost.
				 * @function updatePost
				 * @memberof foo.bar.blog.Msg
				 * @instance
				 * @param {foo.bar.blog.IMsgUpdatePost} request MsgUpdatePost message or plain object
				 * @param {foo.bar.blog.Msg.UpdatePostCallback} callback Node-style callback called with the error, if any, and MsgUpdatePostResponse
				 * @returns {undefined}
				 * @variation 1
				 */
				Object.defineProperty(
					(Msg.prototype.updatePost = function updatePost(request, callback) {
						return this.rpcCall(
							updatePost,
							$root.foo.bar.blog.MsgUpdatePost,
							$root.foo.bar.blog.MsgUpdatePostResponse,
							request,
							callback
						)
					}),
					'name',
					{ value: 'UpdatePost' }
				)

				/**
				 * Calls UpdatePost.
				 * @function updatePost
				 * @memberof foo.bar.blog.Msg
				 * @instance
				 * @param {foo.bar.blog.IMsgUpdatePost} request MsgUpdatePost message or plain object
				 * @returns {Promise<foo.bar.blog.MsgUpdatePostResponse>} Promise
				 * @variation 2
				 */

				/**
				 * Callback as used by {@link foo.bar.blog.Msg#deletePost}.
				 * @memberof foo.bar.blog.Msg
				 * @typedef DeletePostCallback
				 * @type {function}
				 * @param {Error|null} error Error, if any
				 * @param {foo.bar.blog.MsgDeletePostResponse} [response] MsgDeletePostResponse
				 */

				/**
				 * Calls DeletePost.
				 * @function deletePost
				 * @memberof foo.bar.blog.Msg
				 * @instance
				 * @param {foo.bar.blog.IMsgDeletePost} request MsgDeletePost message or plain object
				 * @param {foo.bar.blog.Msg.DeletePostCallback} callback Node-style callback called with the error, if any, and MsgDeletePostResponse
				 * @returns {undefined}
				 * @variation 1
				 */
				Object.defineProperty(
					(Msg.prototype.deletePost = function deletePost(request, callback) {
						return this.rpcCall(
							deletePost,
							$root.foo.bar.blog.MsgDeletePost,
							$root.foo.bar.blog.MsgDeletePostResponse,
							request,
							callback
						)
					}),
					'name',
					{ value: 'DeletePost' }
				)

				/**
				 * Calls DeletePost.
				 * @function deletePost
				 * @memberof foo.bar.blog.Msg
				 * @instance
				 * @param {foo.bar.blog.IMsgDeletePost} request MsgDeletePost message or plain object
				 * @returns {Promise<foo.bar.blog.MsgDeletePostResponse>} Promise
				 * @variation 2
				 */

				return Msg
			})()

			blog.MsgCreatePost = (function () {
				/**
				 * Properties of a MsgCreatePost.
				 * @memberof foo.bar.blog
				 * @interface IMsgCreatePost
				 * @property {string|null} [creator] MsgCreatePost creator
				 * @property {string|null} [title] MsgCreatePost title
				 * @property {string|null} [body] MsgCreatePost body
				 * @property {number|null} [votes] MsgCreatePost votes
				 */

				/**
				 * Constructs a new MsgCreatePost.
				 * @memberof foo.bar.blog
				 * @classdesc Represents a MsgCreatePost.
				 * @implements IMsgCreatePost
				 * @constructor
				 * @param {foo.bar.blog.IMsgCreatePost=} [properties] Properties to set
				 */
				function MsgCreatePost(properties) {
					if (properties)
						for (
							let keys = Object.keys(properties), i = 0;
							i < keys.length;
							++i
						)
							if (properties[keys[i]] != null)
								this[keys[i]] = properties[keys[i]]
				}

				/**
				 * MsgCreatePost creator.
				 * @member {string} creator
				 * @memberof foo.bar.blog.MsgCreatePost
				 * @instance
				 */
				MsgCreatePost.prototype.creator = ''

				/**
				 * MsgCreatePost title.
				 * @member {string} title
				 * @memberof foo.bar.blog.MsgCreatePost
				 * @instance
				 */
				MsgCreatePost.prototype.title = ''

				/**
				 * MsgCreatePost body.
				 * @member {string} body
				 * @memberof foo.bar.blog.MsgCreatePost
				 * @instance
				 */
				MsgCreatePost.prototype.body = ''

				/**
				 * MsgCreatePost votes.
				 * @member {number} votes
				 * @memberof foo.bar.blog.MsgCreatePost
				 * @instance
				 */
				MsgCreatePost.prototype.votes = 0

				/**
				 * Creates a new MsgCreatePost instance using the specified properties.
				 * @function create
				 * @memberof foo.bar.blog.MsgCreatePost
				 * @static
				 * @param {foo.bar.blog.IMsgCreatePost=} [properties] Properties to set
				 * @returns {foo.bar.blog.MsgCreatePost} MsgCreatePost instance
				 */
				MsgCreatePost.create = function create(properties) {
					return new MsgCreatePost(properties)
				}

				/**
				 * Encodes the specified MsgCreatePost message. Does not implicitly {@link foo.bar.blog.MsgCreatePost.verify|verify} messages.
				 * @function encode
				 * @memberof foo.bar.blog.MsgCreatePost
				 * @static
				 * @param {foo.bar.blog.IMsgCreatePost} message MsgCreatePost message or plain object to encode
				 * @param {$protobuf.Writer} [writer] Writer to encode to
				 * @returns {$protobuf.Writer} Writer
				 */
				MsgCreatePost.encode = function encode(message, writer) {
					if (!writer) writer = $Writer.create()
					if (
						message.creator != null &&
						Object.hasOwnProperty.call(message, 'creator')
					)
						writer.uint32(/* id 1, wireType 2 =*/ 10).string(message.creator)
					if (
						message.title != null &&
						Object.hasOwnProperty.call(message, 'title')
					)
						writer.uint32(/* id 2, wireType 2 =*/ 18).string(message.title)
					if (
						message.body != null &&
						Object.hasOwnProperty.call(message, 'body')
					)
						writer.uint32(/* id 3, wireType 2 =*/ 26).string(message.body)
					if (
						message.votes != null &&
						Object.hasOwnProperty.call(message, 'votes')
					)
						writer.uint32(/* id 4, wireType 0 =*/ 32).int32(message.votes)
					return writer
				}

				/**
				 * Encodes the specified MsgCreatePost message, length delimited. Does not implicitly {@link foo.bar.blog.MsgCreatePost.verify|verify} messages.
				 * @function encodeDelimited
				 * @memberof foo.bar.blog.MsgCreatePost
				 * @static
				 * @param {foo.bar.blog.IMsgCreatePost} message MsgCreatePost message or plain object to encode
				 * @param {$protobuf.Writer} [writer] Writer to encode to
				 * @returns {$protobuf.Writer} Writer
				 */
				MsgCreatePost.encodeDelimited = function encodeDelimited(
					message,
					writer
				) {
					return this.encode(message, writer).ldelim()
				}

				/**
				 * Decodes a MsgCreatePost message from the specified reader or buffer.
				 * @function decode
				 * @memberof foo.bar.blog.MsgCreatePost
				 * @static
				 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
				 * @param {number} [length] Message length if known beforehand
				 * @returns {foo.bar.blog.MsgCreatePost} MsgCreatePost
				 * @throws {Error} If the payload is not a reader or valid buffer
				 * @throws {$protobuf.util.ProtocolError} If required fields are missing
				 */
				MsgCreatePost.decode = function decode(reader, length) {
					if (!(reader instanceof $Reader)) reader = $Reader.create(reader)
					let end = length === undefined ? reader.len : reader.pos + length,
						message = new $root.foo.bar.blog.MsgCreatePost()
					while (reader.pos < end) {
						let tag = reader.uint32()
						switch (tag >>> 3) {
							case 1:
								message.creator = reader.string()
								break
							case 2:
								message.title = reader.string()
								break
							case 3:
								message.body = reader.string()
								break
							case 4:
								message.votes = reader.int32()
								break
							default:
								reader.skipType(tag & 7)
								break
						}
					}
					return message
				}

				/**
				 * Decodes a MsgCreatePost message from the specified reader or buffer, length delimited.
				 * @function decodeDelimited
				 * @memberof foo.bar.blog.MsgCreatePost
				 * @static
				 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
				 * @returns {foo.bar.blog.MsgCreatePost} MsgCreatePost
				 * @throws {Error} If the payload is not a reader or valid buffer
				 * @throws {$protobuf.util.ProtocolError} If required fields are missing
				 */
				MsgCreatePost.decodeDelimited = function decodeDelimited(reader) {
					if (!(reader instanceof $Reader)) reader = new $Reader(reader)
					return this.decode(reader, reader.uint32())
				}

				/**
				 * Verifies a MsgCreatePost message.
				 * @function verify
				 * @memberof foo.bar.blog.MsgCreatePost
				 * @static
				 * @param {Object.<string,*>} message Plain object to verify
				 * @returns {string|null} `null` if valid, otherwise the reason why it is not
				 */
				MsgCreatePost.verify = function verify(message) {
					if (typeof message !== 'object' || message === null)
						return 'object expected'
					if (message.creator != null && message.hasOwnProperty('creator'))
						if (!$util.isString(message.creator))
							return 'creator: string expected'
					if (message.title != null && message.hasOwnProperty('title'))
						if (!$util.isString(message.title)) return 'title: string expected'
					if (message.body != null && message.hasOwnProperty('body'))
						if (!$util.isString(message.body)) return 'body: string expected'
					if (message.votes != null && message.hasOwnProperty('votes'))
						if (!$util.isInteger(message.votes))
							return 'votes: integer expected'
					return null
				}

				/**
				 * Creates a MsgCreatePost message from a plain object. Also converts values to their respective internal types.
				 * @function fromObject
				 * @memberof foo.bar.blog.MsgCreatePost
				 * @static
				 * @param {Object.<string,*>} object Plain object
				 * @returns {foo.bar.blog.MsgCreatePost} MsgCreatePost
				 */
				MsgCreatePost.fromObject = function fromObject(object) {
					if (object instanceof $root.foo.bar.blog.MsgCreatePost) return object
					let message = new $root.foo.bar.blog.MsgCreatePost()
					if (object.creator != null) message.creator = String(object.creator)
					if (object.title != null) message.title = String(object.title)
					if (object.body != null) message.body = String(object.body)
					if (object.votes != null) message.votes = object.votes | 0
					return message
				}

				/**
				 * Creates a plain object from a MsgCreatePost message. Also converts values to other types if specified.
				 * @function toObject
				 * @memberof foo.bar.blog.MsgCreatePost
				 * @static
				 * @param {foo.bar.blog.MsgCreatePost} message MsgCreatePost
				 * @param {$protobuf.IConversionOptions} [options] Conversion options
				 * @returns {Object.<string,*>} Plain object
				 */
				MsgCreatePost.toObject = function toObject(message, options) {
					if (!options) options = {}
					let object = {}
					if (options.defaults) {
						object.creator = ''
						object.title = ''
						object.body = ''
						object.votes = 0
					}
					if (message.creator != null && message.hasOwnProperty('creator'))
						object.creator = message.creator
					if (message.title != null && message.hasOwnProperty('title'))
						object.title = message.title
					if (message.body != null && message.hasOwnProperty('body'))
						object.body = message.body
					if (message.votes != null && message.hasOwnProperty('votes'))
						object.votes = message.votes
					return object
				}

				/**
				 * Converts this MsgCreatePost to JSON.
				 * @function toJSON
				 * @memberof foo.bar.blog.MsgCreatePost
				 * @instance
				 * @returns {Object.<string,*>} JSON object
				 */
				MsgCreatePost.prototype.toJSON = function toJSON() {
					return this.constructor.toObject(this, $protobuf.util.toJSONOptions)
				}

				return MsgCreatePost
			})()

			blog.MsgCreatePostResponse = (function () {
				/**
				 * Properties of a MsgCreatePostResponse.
				 * @memberof foo.bar.blog
				 * @interface IMsgCreatePostResponse
				 * @property {string|null} [id] MsgCreatePostResponse id
				 */

				/**
				 * Constructs a new MsgCreatePostResponse.
				 * @memberof foo.bar.blog
				 * @classdesc Represents a MsgCreatePostResponse.
				 * @implements IMsgCreatePostResponse
				 * @constructor
				 * @param {foo.bar.blog.IMsgCreatePostResponse=} [properties] Properties to set
				 */
				function MsgCreatePostResponse(properties) {
					if (properties)
						for (
							let keys = Object.keys(properties), i = 0;
							i < keys.length;
							++i
						)
							if (properties[keys[i]] != null)
								this[keys[i]] = properties[keys[i]]
				}

				/**
				 * MsgCreatePostResponse id.
				 * @member {string} id
				 * @memberof foo.bar.blog.MsgCreatePostResponse
				 * @instance
				 */
				MsgCreatePostResponse.prototype.id = ''

				/**
				 * Creates a new MsgCreatePostResponse instance using the specified properties.
				 * @function create
				 * @memberof foo.bar.blog.MsgCreatePostResponse
				 * @static
				 * @param {foo.bar.blog.IMsgCreatePostResponse=} [properties] Properties to set
				 * @returns {foo.bar.blog.MsgCreatePostResponse} MsgCreatePostResponse instance
				 */
				MsgCreatePostResponse.create = function create(properties) {
					return new MsgCreatePostResponse(properties)
				}

				/**
				 * Encodes the specified MsgCreatePostResponse message. Does not implicitly {@link foo.bar.blog.MsgCreatePostResponse.verify|verify} messages.
				 * @function encode
				 * @memberof foo.bar.blog.MsgCreatePostResponse
				 * @static
				 * @param {foo.bar.blog.IMsgCreatePostResponse} message MsgCreatePostResponse message or plain object to encode
				 * @param {$protobuf.Writer} [writer] Writer to encode to
				 * @returns {$protobuf.Writer} Writer
				 */
				MsgCreatePostResponse.encode = function encode(message, writer) {
					if (!writer) writer = $Writer.create()
					if (message.id != null && Object.hasOwnProperty.call(message, 'id'))
						writer.uint32(/* id 1, wireType 2 =*/ 10).string(message.id)
					return writer
				}

				/**
				 * Encodes the specified MsgCreatePostResponse message, length delimited. Does not implicitly {@link foo.bar.blog.MsgCreatePostResponse.verify|verify} messages.
				 * @function encodeDelimited
				 * @memberof foo.bar.blog.MsgCreatePostResponse
				 * @static
				 * @param {foo.bar.blog.IMsgCreatePostResponse} message MsgCreatePostResponse message or plain object to encode
				 * @param {$protobuf.Writer} [writer] Writer to encode to
				 * @returns {$protobuf.Writer} Writer
				 */
				MsgCreatePostResponse.encodeDelimited = function encodeDelimited(
					message,
					writer
				) {
					return this.encode(message, writer).ldelim()
				}

				/**
				 * Decodes a MsgCreatePostResponse message from the specified reader or buffer.
				 * @function decode
				 * @memberof foo.bar.blog.MsgCreatePostResponse
				 * @static
				 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
				 * @param {number} [length] Message length if known beforehand
				 * @returns {foo.bar.blog.MsgCreatePostResponse} MsgCreatePostResponse
				 * @throws {Error} If the payload is not a reader or valid buffer
				 * @throws {$protobuf.util.ProtocolError} If required fields are missing
				 */
				MsgCreatePostResponse.decode = function decode(reader, length) {
					if (!(reader instanceof $Reader)) reader = $Reader.create(reader)
					let end = length === undefined ? reader.len : reader.pos + length,
						message = new $root.foo.bar.blog.MsgCreatePostResponse()
					while (reader.pos < end) {
						let tag = reader.uint32()
						switch (tag >>> 3) {
							case 1:
								message.id = reader.string()
								break
							default:
								reader.skipType(tag & 7)
								break
						}
					}
					return message
				}

				/**
				 * Decodes a MsgCreatePostResponse message from the specified reader or buffer, length delimited.
				 * @function decodeDelimited
				 * @memberof foo.bar.blog.MsgCreatePostResponse
				 * @static
				 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
				 * @returns {foo.bar.blog.MsgCreatePostResponse} MsgCreatePostResponse
				 * @throws {Error} If the payload is not a reader or valid buffer
				 * @throws {$protobuf.util.ProtocolError} If required fields are missing
				 */
				MsgCreatePostResponse.decodeDelimited = function decodeDelimited(
					reader
				) {
					if (!(reader instanceof $Reader)) reader = new $Reader(reader)
					return this.decode(reader, reader.uint32())
				}

				/**
				 * Verifies a MsgCreatePostResponse message.
				 * @function verify
				 * @memberof foo.bar.blog.MsgCreatePostResponse
				 * @static
				 * @param {Object.<string,*>} message Plain object to verify
				 * @returns {string|null} `null` if valid, otherwise the reason why it is not
				 */
				MsgCreatePostResponse.verify = function verify(message) {
					if (typeof message !== 'object' || message === null)
						return 'object expected'
					if (message.id != null && message.hasOwnProperty('id'))
						if (!$util.isString(message.id)) return 'id: string expected'
					return null
				}

				/**
				 * Creates a MsgCreatePostResponse message from a plain object. Also converts values to their respective internal types.
				 * @function fromObject
				 * @memberof foo.bar.blog.MsgCreatePostResponse
				 * @static
				 * @param {Object.<string,*>} object Plain object
				 * @returns {foo.bar.blog.MsgCreatePostResponse} MsgCreatePostResponse
				 */
				MsgCreatePostResponse.fromObject = function fromObject(object) {
					if (object instanceof $root.foo.bar.blog.MsgCreatePostResponse)
						return object
					let message = new $root.foo.bar.blog.MsgCreatePostResponse()
					if (object.id != null) message.id = String(object.id)
					return message
				}

				/**
				 * Creates a plain object from a MsgCreatePostResponse message. Also converts values to other types if specified.
				 * @function toObject
				 * @memberof foo.bar.blog.MsgCreatePostResponse
				 * @static
				 * @param {foo.bar.blog.MsgCreatePostResponse} message MsgCreatePostResponse
				 * @param {$protobuf.IConversionOptions} [options] Conversion options
				 * @returns {Object.<string,*>} Plain object
				 */
				MsgCreatePostResponse.toObject = function toObject(message, options) {
					if (!options) options = {}
					let object = {}
					if (options.defaults) object.id = ''
					if (message.id != null && message.hasOwnProperty('id'))
						object.id = message.id
					return object
				}

				/**
				 * Converts this MsgCreatePostResponse to JSON.
				 * @function toJSON
				 * @memberof foo.bar.blog.MsgCreatePostResponse
				 * @instance
				 * @returns {Object.<string,*>} JSON object
				 */
				MsgCreatePostResponse.prototype.toJSON = function toJSON() {
					return this.constructor.toObject(this, $protobuf.util.toJSONOptions)
				}

				return MsgCreatePostResponse
			})()

			blog.MsgUpdatePost = (function () {
				/**
				 * Properties of a MsgUpdatePost.
				 * @memberof foo.bar.blog
				 * @interface IMsgUpdatePost
				 * @property {string|null} [creator] MsgUpdatePost creator
				 * @property {string|null} [id] MsgUpdatePost id
				 * @property {string|null} [title] MsgUpdatePost title
				 * @property {string|null} [body] MsgUpdatePost body
				 * @property {number|null} [votes] MsgUpdatePost votes
				 */

				/**
				 * Constructs a new MsgUpdatePost.
				 * @memberof foo.bar.blog
				 * @classdesc Represents a MsgUpdatePost.
				 * @implements IMsgUpdatePost
				 * @constructor
				 * @param {foo.bar.blog.IMsgUpdatePost=} [properties] Properties to set
				 */
				function MsgUpdatePost(properties) {
					if (properties)
						for (
							let keys = Object.keys(properties), i = 0;
							i < keys.length;
							++i
						)
							if (properties[keys[i]] != null)
								this[keys[i]] = properties[keys[i]]
				}

				/**
				 * MsgUpdatePost creator.
				 * @member {string} creator
				 * @memberof foo.bar.blog.MsgUpdatePost
				 * @instance
				 */
				MsgUpdatePost.prototype.creator = ''

				/**
				 * MsgUpdatePost id.
				 * @member {string} id
				 * @memberof foo.bar.blog.MsgUpdatePost
				 * @instance
				 */
				MsgUpdatePost.prototype.id = ''

				/**
				 * MsgUpdatePost title.
				 * @member {string} title
				 * @memberof foo.bar.blog.MsgUpdatePost
				 * @instance
				 */
				MsgUpdatePost.prototype.title = ''

				/**
				 * MsgUpdatePost body.
				 * @member {string} body
				 * @memberof foo.bar.blog.MsgUpdatePost
				 * @instance
				 */
				MsgUpdatePost.prototype.body = ''

				/**
				 * MsgUpdatePost votes.
				 * @member {number} votes
				 * @memberof foo.bar.blog.MsgUpdatePost
				 * @instance
				 */
				MsgUpdatePost.prototype.votes = 0

				/**
				 * Creates a new MsgUpdatePost instance using the specified properties.
				 * @function create
				 * @memberof foo.bar.blog.MsgUpdatePost
				 * @static
				 * @param {foo.bar.blog.IMsgUpdatePost=} [properties] Properties to set
				 * @returns {foo.bar.blog.MsgUpdatePost} MsgUpdatePost instance
				 */
				MsgUpdatePost.create = function create(properties) {
					return new MsgUpdatePost(properties)
				}

				/**
				 * Encodes the specified MsgUpdatePost message. Does not implicitly {@link foo.bar.blog.MsgUpdatePost.verify|verify} messages.
				 * @function encode
				 * @memberof foo.bar.blog.MsgUpdatePost
				 * @static
				 * @param {foo.bar.blog.IMsgUpdatePost} message MsgUpdatePost message or plain object to encode
				 * @param {$protobuf.Writer} [writer] Writer to encode to
				 * @returns {$protobuf.Writer} Writer
				 */
				MsgUpdatePost.encode = function encode(message, writer) {
					if (!writer) writer = $Writer.create()
					if (
						message.creator != null &&
						Object.hasOwnProperty.call(message, 'creator')
					)
						writer.uint32(/* id 1, wireType 2 =*/ 10).string(message.creator)
					if (message.id != null && Object.hasOwnProperty.call(message, 'id'))
						writer.uint32(/* id 2, wireType 2 =*/ 18).string(message.id)
					if (
						message.title != null &&
						Object.hasOwnProperty.call(message, 'title')
					)
						writer.uint32(/* id 3, wireType 2 =*/ 26).string(message.title)
					if (
						message.body != null &&
						Object.hasOwnProperty.call(message, 'body')
					)
						writer.uint32(/* id 4, wireType 2 =*/ 34).string(message.body)
					if (
						message.votes != null &&
						Object.hasOwnProperty.call(message, 'votes')
					)
						writer.uint32(/* id 5, wireType 0 =*/ 40).int32(message.votes)
					return writer
				}

				/**
				 * Encodes the specified MsgUpdatePost message, length delimited. Does not implicitly {@link foo.bar.blog.MsgUpdatePost.verify|verify} messages.
				 * @function encodeDelimited
				 * @memberof foo.bar.blog.MsgUpdatePost
				 * @static
				 * @param {foo.bar.blog.IMsgUpdatePost} message MsgUpdatePost message or plain object to encode
				 * @param {$protobuf.Writer} [writer] Writer to encode to
				 * @returns {$protobuf.Writer} Writer
				 */
				MsgUpdatePost.encodeDelimited = function encodeDelimited(
					message,
					writer
				) {
					return this.encode(message, writer).ldelim()
				}

				/**
				 * Decodes a MsgUpdatePost message from the specified reader or buffer.
				 * @function decode
				 * @memberof foo.bar.blog.MsgUpdatePost
				 * @static
				 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
				 * @param {number} [length] Message length if known beforehand
				 * @returns {foo.bar.blog.MsgUpdatePost} MsgUpdatePost
				 * @throws {Error} If the payload is not a reader or valid buffer
				 * @throws {$protobuf.util.ProtocolError} If required fields are missing
				 */
				MsgUpdatePost.decode = function decode(reader, length) {
					if (!(reader instanceof $Reader)) reader = $Reader.create(reader)
					let end = length === undefined ? reader.len : reader.pos + length,
						message = new $root.foo.bar.blog.MsgUpdatePost()
					while (reader.pos < end) {
						let tag = reader.uint32()
						switch (tag >>> 3) {
							case 1:
								message.creator = reader.string()
								break
							case 2:
								message.id = reader.string()
								break
							case 3:
								message.title = reader.string()
								break
							case 4:
								message.body = reader.string()
								break
							case 5:
								message.votes = reader.int32()
								break
							default:
								reader.skipType(tag & 7)
								break
						}
					}
					return message
				}

				/**
				 * Decodes a MsgUpdatePost message from the specified reader or buffer, length delimited.
				 * @function decodeDelimited
				 * @memberof foo.bar.blog.MsgUpdatePost
				 * @static
				 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
				 * @returns {foo.bar.blog.MsgUpdatePost} MsgUpdatePost
				 * @throws {Error} If the payload is not a reader or valid buffer
				 * @throws {$protobuf.util.ProtocolError} If required fields are missing
				 */
				MsgUpdatePost.decodeDelimited = function decodeDelimited(reader) {
					if (!(reader instanceof $Reader)) reader = new $Reader(reader)
					return this.decode(reader, reader.uint32())
				}

				/**
				 * Verifies a MsgUpdatePost message.
				 * @function verify
				 * @memberof foo.bar.blog.MsgUpdatePost
				 * @static
				 * @param {Object.<string,*>} message Plain object to verify
				 * @returns {string|null} `null` if valid, otherwise the reason why it is not
				 */
				MsgUpdatePost.verify = function verify(message) {
					if (typeof message !== 'object' || message === null)
						return 'object expected'
					if (message.creator != null && message.hasOwnProperty('creator'))
						if (!$util.isString(message.creator))
							return 'creator: string expected'
					if (message.id != null && message.hasOwnProperty('id'))
						if (!$util.isString(message.id)) return 'id: string expected'
					if (message.title != null && message.hasOwnProperty('title'))
						if (!$util.isString(message.title)) return 'title: string expected'
					if (message.body != null && message.hasOwnProperty('body'))
						if (!$util.isString(message.body)) return 'body: string expected'
					if (message.votes != null && message.hasOwnProperty('votes'))
						if (!$util.isInteger(message.votes))
							return 'votes: integer expected'
					return null
				}

				/**
				 * Creates a MsgUpdatePost message from a plain object. Also converts values to their respective internal types.
				 * @function fromObject
				 * @memberof foo.bar.blog.MsgUpdatePost
				 * @static
				 * @param {Object.<string,*>} object Plain object
				 * @returns {foo.bar.blog.MsgUpdatePost} MsgUpdatePost
				 */
				MsgUpdatePost.fromObject = function fromObject(object) {
					if (object instanceof $root.foo.bar.blog.MsgUpdatePost) return object
					let message = new $root.foo.bar.blog.MsgUpdatePost()
					if (object.creator != null) message.creator = String(object.creator)
					if (object.id != null) message.id = String(object.id)
					if (object.title != null) message.title = String(object.title)
					if (object.body != null) message.body = String(object.body)
					if (object.votes != null) message.votes = object.votes | 0
					return message
				}

				/**
				 * Creates a plain object from a MsgUpdatePost message. Also converts values to other types if specified.
				 * @function toObject
				 * @memberof foo.bar.blog.MsgUpdatePost
				 * @static
				 * @param {foo.bar.blog.MsgUpdatePost} message MsgUpdatePost
				 * @param {$protobuf.IConversionOptions} [options] Conversion options
				 * @returns {Object.<string,*>} Plain object
				 */
				MsgUpdatePost.toObject = function toObject(message, options) {
					if (!options) options = {}
					let object = {}
					if (options.defaults) {
						object.creator = ''
						object.id = ''
						object.title = ''
						object.body = ''
						object.votes = 0
					}
					if (message.creator != null && message.hasOwnProperty('creator'))
						object.creator = message.creator
					if (message.id != null && message.hasOwnProperty('id'))
						object.id = message.id
					if (message.title != null && message.hasOwnProperty('title'))
						object.title = message.title
					if (message.body != null && message.hasOwnProperty('body'))
						object.body = message.body
					if (message.votes != null && message.hasOwnProperty('votes'))
						object.votes = message.votes
					return object
				}

				/**
				 * Converts this MsgUpdatePost to JSON.
				 * @function toJSON
				 * @memberof foo.bar.blog.MsgUpdatePost
				 * @instance
				 * @returns {Object.<string,*>} JSON object
				 */
				MsgUpdatePost.prototype.toJSON = function toJSON() {
					return this.constructor.toObject(this, $protobuf.util.toJSONOptions)
				}

				return MsgUpdatePost
			})()

			blog.MsgUpdatePostResponse = (function () {
				/**
				 * Properties of a MsgUpdatePostResponse.
				 * @memberof foo.bar.blog
				 * @interface IMsgUpdatePostResponse
				 */

				/**
				 * Constructs a new MsgUpdatePostResponse.
				 * @memberof foo.bar.blog
				 * @classdesc Represents a MsgUpdatePostResponse.
				 * @implements IMsgUpdatePostResponse
				 * @constructor
				 * @param {foo.bar.blog.IMsgUpdatePostResponse=} [properties] Properties to set
				 */
				function MsgUpdatePostResponse(properties) {
					if (properties)
						for (
							let keys = Object.keys(properties), i = 0;
							i < keys.length;
							++i
						)
							if (properties[keys[i]] != null)
								this[keys[i]] = properties[keys[i]]
				}

				/**
				 * Creates a new MsgUpdatePostResponse instance using the specified properties.
				 * @function create
				 * @memberof foo.bar.blog.MsgUpdatePostResponse
				 * @static
				 * @param {foo.bar.blog.IMsgUpdatePostResponse=} [properties] Properties to set
				 * @returns {foo.bar.blog.MsgUpdatePostResponse} MsgUpdatePostResponse instance
				 */
				MsgUpdatePostResponse.create = function create(properties) {
					return new MsgUpdatePostResponse(properties)
				}

				/**
				 * Encodes the specified MsgUpdatePostResponse message. Does not implicitly {@link foo.bar.blog.MsgUpdatePostResponse.verify|verify} messages.
				 * @function encode
				 * @memberof foo.bar.blog.MsgUpdatePostResponse
				 * @static
				 * @param {foo.bar.blog.IMsgUpdatePostResponse} message MsgUpdatePostResponse message or plain object to encode
				 * @param {$protobuf.Writer} [writer] Writer to encode to
				 * @returns {$protobuf.Writer} Writer
				 */
				MsgUpdatePostResponse.encode = function encode(message, writer) {
					if (!writer) writer = $Writer.create()
					return writer
				}

				/**
				 * Encodes the specified MsgUpdatePostResponse message, length delimited. Does not implicitly {@link foo.bar.blog.MsgUpdatePostResponse.verify|verify} messages.
				 * @function encodeDelimited
				 * @memberof foo.bar.blog.MsgUpdatePostResponse
				 * @static
				 * @param {foo.bar.blog.IMsgUpdatePostResponse} message MsgUpdatePostResponse message or plain object to encode
				 * @param {$protobuf.Writer} [writer] Writer to encode to
				 * @returns {$protobuf.Writer} Writer
				 */
				MsgUpdatePostResponse.encodeDelimited = function encodeDelimited(
					message,
					writer
				) {
					return this.encode(message, writer).ldelim()
				}

				/**
				 * Decodes a MsgUpdatePostResponse message from the specified reader or buffer.
				 * @function decode
				 * @memberof foo.bar.blog.MsgUpdatePostResponse
				 * @static
				 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
				 * @param {number} [length] Message length if known beforehand
				 * @returns {foo.bar.blog.MsgUpdatePostResponse} MsgUpdatePostResponse
				 * @throws {Error} If the payload is not a reader or valid buffer
				 * @throws {$protobuf.util.ProtocolError} If required fields are missing
				 */
				MsgUpdatePostResponse.decode = function decode(reader, length) {
					if (!(reader instanceof $Reader)) reader = $Reader.create(reader)
					let end = length === undefined ? reader.len : reader.pos + length,
						message = new $root.foo.bar.blog.MsgUpdatePostResponse()
					while (reader.pos < end) {
						let tag = reader.uint32()
						switch (tag >>> 3) {
							default:
								reader.skipType(tag & 7)
								break
						}
					}
					return message
				}

				/**
				 * Decodes a MsgUpdatePostResponse message from the specified reader or buffer, length delimited.
				 * @function decodeDelimited
				 * @memberof foo.bar.blog.MsgUpdatePostResponse
				 * @static
				 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
				 * @returns {foo.bar.blog.MsgUpdatePostResponse} MsgUpdatePostResponse
				 * @throws {Error} If the payload is not a reader or valid buffer
				 * @throws {$protobuf.util.ProtocolError} If required fields are missing
				 */
				MsgUpdatePostResponse.decodeDelimited = function decodeDelimited(
					reader
				) {
					if (!(reader instanceof $Reader)) reader = new $Reader(reader)
					return this.decode(reader, reader.uint32())
				}

				/**
				 * Verifies a MsgUpdatePostResponse message.
				 * @function verify
				 * @memberof foo.bar.blog.MsgUpdatePostResponse
				 * @static
				 * @param {Object.<string,*>} message Plain object to verify
				 * @returns {string|null} `null` if valid, otherwise the reason why it is not
				 */
				MsgUpdatePostResponse.verify = function verify(message) {
					if (typeof message !== 'object' || message === null)
						return 'object expected'
					return null
				}

				/**
				 * Creates a MsgUpdatePostResponse message from a plain object. Also converts values to their respective internal types.
				 * @function fromObject
				 * @memberof foo.bar.blog.MsgUpdatePostResponse
				 * @static
				 * @param {Object.<string,*>} object Plain object
				 * @returns {foo.bar.blog.MsgUpdatePostResponse} MsgUpdatePostResponse
				 */
				MsgUpdatePostResponse.fromObject = function fromObject(object) {
					if (object instanceof $root.foo.bar.blog.MsgUpdatePostResponse)
						return object
					return new $root.foo.bar.blog.MsgUpdatePostResponse()
				}

				/**
				 * Creates a plain object from a MsgUpdatePostResponse message. Also converts values to other types if specified.
				 * @function toObject
				 * @memberof foo.bar.blog.MsgUpdatePostResponse
				 * @static
				 * @param {foo.bar.blog.MsgUpdatePostResponse} message MsgUpdatePostResponse
				 * @param {$protobuf.IConversionOptions} [options] Conversion options
				 * @returns {Object.<string,*>} Plain object
				 */
				MsgUpdatePostResponse.toObject = function toObject() {
					return {}
				}

				/**
				 * Converts this MsgUpdatePostResponse to JSON.
				 * @function toJSON
				 * @memberof foo.bar.blog.MsgUpdatePostResponse
				 * @instance
				 * @returns {Object.<string,*>} JSON object
				 */
				MsgUpdatePostResponse.prototype.toJSON = function toJSON() {
					return this.constructor.toObject(this, $protobuf.util.toJSONOptions)
				}

				return MsgUpdatePostResponse
			})()

			blog.MsgDeletePost = (function () {
				/**
				 * Properties of a MsgDeletePost.
				 * @memberof foo.bar.blog
				 * @interface IMsgDeletePost
				 * @property {string|null} [creator] MsgDeletePost creator
				 * @property {string|null} [id] MsgDeletePost id
				 */

				/**
				 * Constructs a new MsgDeletePost.
				 * @memberof foo.bar.blog
				 * @classdesc Represents a MsgDeletePost.
				 * @implements IMsgDeletePost
				 * @constructor
				 * @param {foo.bar.blog.IMsgDeletePost=} [properties] Properties to set
				 */
				function MsgDeletePost(properties) {
					if (properties)
						for (
							let keys = Object.keys(properties), i = 0;
							i < keys.length;
							++i
						)
							if (properties[keys[i]] != null)
								this[keys[i]] = properties[keys[i]]
				}

				/**
				 * MsgDeletePost creator.
				 * @member {string} creator
				 * @memberof foo.bar.blog.MsgDeletePost
				 * @instance
				 */
				MsgDeletePost.prototype.creator = ''

				/**
				 * MsgDeletePost id.
				 * @member {string} id
				 * @memberof foo.bar.blog.MsgDeletePost
				 * @instance
				 */
				MsgDeletePost.prototype.id = ''

				/**
				 * Creates a new MsgDeletePost instance using the specified properties.
				 * @function create
				 * @memberof foo.bar.blog.MsgDeletePost
				 * @static
				 * @param {foo.bar.blog.IMsgDeletePost=} [properties] Properties to set
				 * @returns {foo.bar.blog.MsgDeletePost} MsgDeletePost instance
				 */
				MsgDeletePost.create = function create(properties) {
					return new MsgDeletePost(properties)
				}

				/**
				 * Encodes the specified MsgDeletePost message. Does not implicitly {@link foo.bar.blog.MsgDeletePost.verify|verify} messages.
				 * @function encode
				 * @memberof foo.bar.blog.MsgDeletePost
				 * @static
				 * @param {foo.bar.blog.IMsgDeletePost} message MsgDeletePost message or plain object to encode
				 * @param {$protobuf.Writer} [writer] Writer to encode to
				 * @returns {$protobuf.Writer} Writer
				 */
				MsgDeletePost.encode = function encode(message, writer) {
					if (!writer) writer = $Writer.create()
					if (
						message.creator != null &&
						Object.hasOwnProperty.call(message, 'creator')
					)
						writer.uint32(/* id 1, wireType 2 =*/ 10).string(message.creator)
					if (message.id != null && Object.hasOwnProperty.call(message, 'id'))
						writer.uint32(/* id 2, wireType 2 =*/ 18).string(message.id)
					return writer
				}

				/**
				 * Encodes the specified MsgDeletePost message, length delimited. Does not implicitly {@link foo.bar.blog.MsgDeletePost.verify|verify} messages.
				 * @function encodeDelimited
				 * @memberof foo.bar.blog.MsgDeletePost
				 * @static
				 * @param {foo.bar.blog.IMsgDeletePost} message MsgDeletePost message or plain object to encode
				 * @param {$protobuf.Writer} [writer] Writer to encode to
				 * @returns {$protobuf.Writer} Writer
				 */
				MsgDeletePost.encodeDelimited = function encodeDelimited(
					message,
					writer
				) {
					return this.encode(message, writer).ldelim()
				}

				/**
				 * Decodes a MsgDeletePost message from the specified reader or buffer.
				 * @function decode
				 * @memberof foo.bar.blog.MsgDeletePost
				 * @static
				 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
				 * @param {number} [length] Message length if known beforehand
				 * @returns {foo.bar.blog.MsgDeletePost} MsgDeletePost
				 * @throws {Error} If the payload is not a reader or valid buffer
				 * @throws {$protobuf.util.ProtocolError} If required fields are missing
				 */
				MsgDeletePost.decode = function decode(reader, length) {
					if (!(reader instanceof $Reader)) reader = $Reader.create(reader)
					let end = length === undefined ? reader.len : reader.pos + length,
						message = new $root.foo.bar.blog.MsgDeletePost()
					while (reader.pos < end) {
						let tag = reader.uint32()
						switch (tag >>> 3) {
							case 1:
								message.creator = reader.string()
								break
							case 2:
								message.id = reader.string()
								break
							default:
								reader.skipType(tag & 7)
								break
						}
					}
					return message
				}

				/**
				 * Decodes a MsgDeletePost message from the specified reader or buffer, length delimited.
				 * @function decodeDelimited
				 * @memberof foo.bar.blog.MsgDeletePost
				 * @static
				 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
				 * @returns {foo.bar.blog.MsgDeletePost} MsgDeletePost
				 * @throws {Error} If the payload is not a reader or valid buffer
				 * @throws {$protobuf.util.ProtocolError} If required fields are missing
				 */
				MsgDeletePost.decodeDelimited = function decodeDelimited(reader) {
					if (!(reader instanceof $Reader)) reader = new $Reader(reader)
					return this.decode(reader, reader.uint32())
				}

				/**
				 * Verifies a MsgDeletePost message.
				 * @function verify
				 * @memberof foo.bar.blog.MsgDeletePost
				 * @static
				 * @param {Object.<string,*>} message Plain object to verify
				 * @returns {string|null} `null` if valid, otherwise the reason why it is not
				 */
				MsgDeletePost.verify = function verify(message) {
					if (typeof message !== 'object' || message === null)
						return 'object expected'
					if (message.creator != null && message.hasOwnProperty('creator'))
						if (!$util.isString(message.creator))
							return 'creator: string expected'
					if (message.id != null && message.hasOwnProperty('id'))
						if (!$util.isString(message.id)) return 'id: string expected'
					return null
				}

				/**
				 * Creates a MsgDeletePost message from a plain object. Also converts values to their respective internal types.
				 * @function fromObject
				 * @memberof foo.bar.blog.MsgDeletePost
				 * @static
				 * @param {Object.<string,*>} object Plain object
				 * @returns {foo.bar.blog.MsgDeletePost} MsgDeletePost
				 */
				MsgDeletePost.fromObject = function fromObject(object) {
					if (object instanceof $root.foo.bar.blog.MsgDeletePost) return object
					let message = new $root.foo.bar.blog.MsgDeletePost()
					if (object.creator != null) message.creator = String(object.creator)
					if (object.id != null) message.id = String(object.id)
					return message
				}

				/**
				 * Creates a plain object from a MsgDeletePost message. Also converts values to other types if specified.
				 * @function toObject
				 * @memberof foo.bar.blog.MsgDeletePost
				 * @static
				 * @param {foo.bar.blog.MsgDeletePost} message MsgDeletePost
				 * @param {$protobuf.IConversionOptions} [options] Conversion options
				 * @returns {Object.<string,*>} Plain object
				 */
				MsgDeletePost.toObject = function toObject(message, options) {
					if (!options) options = {}
					let object = {}
					if (options.defaults) {
						object.creator = ''
						object.id = ''
					}
					if (message.creator != null && message.hasOwnProperty('creator'))
						object.creator = message.creator
					if (message.id != null && message.hasOwnProperty('id'))
						object.id = message.id
					return object
				}

				/**
				 * Converts this MsgDeletePost to JSON.
				 * @function toJSON
				 * @memberof foo.bar.blog.MsgDeletePost
				 * @instance
				 * @returns {Object.<string,*>} JSON object
				 */
				MsgDeletePost.prototype.toJSON = function toJSON() {
					return this.constructor.toObject(this, $protobuf.util.toJSONOptions)
				}

				return MsgDeletePost
			})()

			blog.MsgDeletePostResponse = (function () {
				/**
				 * Properties of a MsgDeletePostResponse.
				 * @memberof foo.bar.blog
				 * @interface IMsgDeletePostResponse
				 */

				/**
				 * Constructs a new MsgDeletePostResponse.
				 * @memberof foo.bar.blog
				 * @classdesc Represents a MsgDeletePostResponse.
				 * @implements IMsgDeletePostResponse
				 * @constructor
				 * @param {foo.bar.blog.IMsgDeletePostResponse=} [properties] Properties to set
				 */
				function MsgDeletePostResponse(properties) {
					if (properties)
						for (
							let keys = Object.keys(properties), i = 0;
							i < keys.length;
							++i
						)
							if (properties[keys[i]] != null)
								this[keys[i]] = properties[keys[i]]
				}

				/**
				 * Creates a new MsgDeletePostResponse instance using the specified properties.
				 * @function create
				 * @memberof foo.bar.blog.MsgDeletePostResponse
				 * @static
				 * @param {foo.bar.blog.IMsgDeletePostResponse=} [properties] Properties to set
				 * @returns {foo.bar.blog.MsgDeletePostResponse} MsgDeletePostResponse instance
				 */
				MsgDeletePostResponse.create = function create(properties) {
					return new MsgDeletePostResponse(properties)
				}

				/**
				 * Encodes the specified MsgDeletePostResponse message. Does not implicitly {@link foo.bar.blog.MsgDeletePostResponse.verify|verify} messages.
				 * @function encode
				 * @memberof foo.bar.blog.MsgDeletePostResponse
				 * @static
				 * @param {foo.bar.blog.IMsgDeletePostResponse} message MsgDeletePostResponse message or plain object to encode
				 * @param {$protobuf.Writer} [writer] Writer to encode to
				 * @returns {$protobuf.Writer} Writer
				 */
				MsgDeletePostResponse.encode = function encode(message, writer) {
					if (!writer) writer = $Writer.create()
					return writer
				}

				/**
				 * Encodes the specified MsgDeletePostResponse message, length delimited. Does not implicitly {@link foo.bar.blog.MsgDeletePostResponse.verify|verify} messages.
				 * @function encodeDelimited
				 * @memberof foo.bar.blog.MsgDeletePostResponse
				 * @static
				 * @param {foo.bar.blog.IMsgDeletePostResponse} message MsgDeletePostResponse message or plain object to encode
				 * @param {$protobuf.Writer} [writer] Writer to encode to
				 * @returns {$protobuf.Writer} Writer
				 */
				MsgDeletePostResponse.encodeDelimited = function encodeDelimited(
					message,
					writer
				) {
					return this.encode(message, writer).ldelim()
				}

				/**
				 * Decodes a MsgDeletePostResponse message from the specified reader or buffer.
				 * @function decode
				 * @memberof foo.bar.blog.MsgDeletePostResponse
				 * @static
				 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
				 * @param {number} [length] Message length if known beforehand
				 * @returns {foo.bar.blog.MsgDeletePostResponse} MsgDeletePostResponse
				 * @throws {Error} If the payload is not a reader or valid buffer
				 * @throws {$protobuf.util.ProtocolError} If required fields are missing
				 */
				MsgDeletePostResponse.decode = function decode(reader, length) {
					if (!(reader instanceof $Reader)) reader = $Reader.create(reader)
					let end = length === undefined ? reader.len : reader.pos + length,
						message = new $root.foo.bar.blog.MsgDeletePostResponse()
					while (reader.pos < end) {
						let tag = reader.uint32()
						switch (tag >>> 3) {
							default:
								reader.skipType(tag & 7)
								break
						}
					}
					return message
				}

				/**
				 * Decodes a MsgDeletePostResponse message from the specified reader or buffer, length delimited.
				 * @function decodeDelimited
				 * @memberof foo.bar.blog.MsgDeletePostResponse
				 * @static
				 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
				 * @returns {foo.bar.blog.MsgDeletePostResponse} MsgDeletePostResponse
				 * @throws {Error} If the payload is not a reader or valid buffer
				 * @throws {$protobuf.util.ProtocolError} If required fields are missing
				 */
				MsgDeletePostResponse.decodeDelimited = function decodeDelimited(
					reader
				) {
					if (!(reader instanceof $Reader)) reader = new $Reader(reader)
					return this.decode(reader, reader.uint32())
				}

				/**
				 * Verifies a MsgDeletePostResponse message.
				 * @function verify
				 * @memberof foo.bar.blog.MsgDeletePostResponse
				 * @static
				 * @param {Object.<string,*>} message Plain object to verify
				 * @returns {string|null} `null` if valid, otherwise the reason why it is not
				 */
				MsgDeletePostResponse.verify = function verify(message) {
					if (typeof message !== 'object' || message === null)
						return 'object expected'
					return null
				}

				/**
				 * Creates a MsgDeletePostResponse message from a plain object. Also converts values to their respective internal types.
				 * @function fromObject
				 * @memberof foo.bar.blog.MsgDeletePostResponse
				 * @static
				 * @param {Object.<string,*>} object Plain object
				 * @returns {foo.bar.blog.MsgDeletePostResponse} MsgDeletePostResponse
				 */
				MsgDeletePostResponse.fromObject = function fromObject(object) {
					if (object instanceof $root.foo.bar.blog.MsgDeletePostResponse)
						return object
					return new $root.foo.bar.blog.MsgDeletePostResponse()
				}

				/**
				 * Creates a plain object from a MsgDeletePostResponse message. Also converts values to other types if specified.
				 * @function toObject
				 * @memberof foo.bar.blog.MsgDeletePostResponse
				 * @static
				 * @param {foo.bar.blog.MsgDeletePostResponse} message MsgDeletePostResponse
				 * @param {$protobuf.IConversionOptions} [options] Conversion options
				 * @returns {Object.<string,*>} Plain object
				 */
				MsgDeletePostResponse.toObject = function toObject() {
					return {}
				}

				/**
				 * Converts this MsgDeletePostResponse to JSON.
				 * @function toJSON
				 * @memberof foo.bar.blog.MsgDeletePostResponse
				 * @instance
				 * @returns {Object.<string,*>} JSON object
				 */
				MsgDeletePostResponse.prototype.toJSON = function toJSON() {
					return this.constructor.toObject(this, $protobuf.util.toJSONOptions)
				}

				return MsgDeletePostResponse
			})()

			return blog
		})()

		return bar
	})()

	return foo
})())

export const cosmos = ($root.cosmos = (() => {
	/**
	 * Namespace cosmos.
	 * @exports cosmos
	 * @namespace
	 */
	const cosmos = {}

	cosmos.base = (function () {
		/**
		 * Namespace base.
		 * @memberof cosmos
		 * @namespace
		 */
		const base = {}

		base.query = (function () {
			/**
			 * Namespace query.
			 * @memberof cosmos.base
			 * @namespace
			 */
			const query = {}

			query.v1beta1 = (function () {
				/**
				 * Namespace v1beta1.
				 * @memberof cosmos.base.query
				 * @namespace
				 */
				const v1beta1 = {}

				v1beta1.PageRequest = (function () {
					/**
					 * Properties of a PageRequest.
					 * @memberof cosmos.base.query.v1beta1
					 * @interface IPageRequest
					 * @property {Uint8Array|null} [key] PageRequest key
					 * @property {number|Long|null} [offset] PageRequest offset
					 * @property {number|Long|null} [limit] PageRequest limit
					 * @property {boolean|null} [countTotal] PageRequest countTotal
					 */

					/**
					 * Constructs a new PageRequest.
					 * @memberof cosmos.base.query.v1beta1
					 * @classdesc Represents a PageRequest.
					 * @implements IPageRequest
					 * @constructor
					 * @param {cosmos.base.query.v1beta1.IPageRequest=} [properties] Properties to set
					 */
					function PageRequest(properties) {
						if (properties)
							for (
								let keys = Object.keys(properties), i = 0;
								i < keys.length;
								++i
							)
								if (properties[keys[i]] != null)
									this[keys[i]] = properties[keys[i]]
					}

					/**
					 * PageRequest key.
					 * @member {Uint8Array} key
					 * @memberof cosmos.base.query.v1beta1.PageRequest
					 * @instance
					 */
					PageRequest.prototype.key = $util.newBuffer([])

					/**
					 * PageRequest offset.
					 * @member {number|Long} offset
					 * @memberof cosmos.base.query.v1beta1.PageRequest
					 * @instance
					 */
					PageRequest.prototype.offset = $util.Long
						? $util.Long.fromBits(0, 0, true)
						: 0

					/**
					 * PageRequest limit.
					 * @member {number|Long} limit
					 * @memberof cosmos.base.query.v1beta1.PageRequest
					 * @instance
					 */
					PageRequest.prototype.limit = $util.Long
						? $util.Long.fromBits(0, 0, true)
						: 0

					/**
					 * PageRequest countTotal.
					 * @member {boolean} countTotal
					 * @memberof cosmos.base.query.v1beta1.PageRequest
					 * @instance
					 */
					PageRequest.prototype.countTotal = false

					/**
					 * Creates a new PageRequest instance using the specified properties.
					 * @function create
					 * @memberof cosmos.base.query.v1beta1.PageRequest
					 * @static
					 * @param {cosmos.base.query.v1beta1.IPageRequest=} [properties] Properties to set
					 * @returns {cosmos.base.query.v1beta1.PageRequest} PageRequest instance
					 */
					PageRequest.create = function create(properties) {
						return new PageRequest(properties)
					}

					/**
					 * Encodes the specified PageRequest message. Does not implicitly {@link cosmos.base.query.v1beta1.PageRequest.verify|verify} messages.
					 * @function encode
					 * @memberof cosmos.base.query.v1beta1.PageRequest
					 * @static
					 * @param {cosmos.base.query.v1beta1.IPageRequest} message PageRequest message or plain object to encode
					 * @param {$protobuf.Writer} [writer] Writer to encode to
					 * @returns {$protobuf.Writer} Writer
					 */
					PageRequest.encode = function encode(message, writer) {
						if (!writer) writer = $Writer.create()
						if (
							message.key != null &&
							Object.hasOwnProperty.call(message, 'key')
						)
							writer.uint32(/* id 1, wireType 2 =*/ 10).bytes(message.key)
						if (
							message.offset != null &&
							Object.hasOwnProperty.call(message, 'offset')
						)
							writer.uint32(/* id 2, wireType 0 =*/ 16).uint64(message.offset)
						if (
							message.limit != null &&
							Object.hasOwnProperty.call(message, 'limit')
						)
							writer.uint32(/* id 3, wireType 0 =*/ 24).uint64(message.limit)
						if (
							message.countTotal != null &&
							Object.hasOwnProperty.call(message, 'countTotal')
						)
							writer.uint32(/* id 4, wireType 0 =*/ 32).bool(message.countTotal)
						return writer
					}

					/**
					 * Encodes the specified PageRequest message, length delimited. Does not implicitly {@link cosmos.base.query.v1beta1.PageRequest.verify|verify} messages.
					 * @function encodeDelimited
					 * @memberof cosmos.base.query.v1beta1.PageRequest
					 * @static
					 * @param {cosmos.base.query.v1beta1.IPageRequest} message PageRequest message or plain object to encode
					 * @param {$protobuf.Writer} [writer] Writer to encode to
					 * @returns {$protobuf.Writer} Writer
					 */
					PageRequest.encodeDelimited = function encodeDelimited(
						message,
						writer
					) {
						return this.encode(message, writer).ldelim()
					}

					/**
					 * Decodes a PageRequest message from the specified reader or buffer.
					 * @function decode
					 * @memberof cosmos.base.query.v1beta1.PageRequest
					 * @static
					 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
					 * @param {number} [length] Message length if known beforehand
					 * @returns {cosmos.base.query.v1beta1.PageRequest} PageRequest
					 * @throws {Error} If the payload is not a reader or valid buffer
					 * @throws {$protobuf.util.ProtocolError} If required fields are missing
					 */
					PageRequest.decode = function decode(reader, length) {
						if (!(reader instanceof $Reader)) reader = $Reader.create(reader)
						let end = length === undefined ? reader.len : reader.pos + length,
							message = new $root.cosmos.base.query.v1beta1.PageRequest()
						while (reader.pos < end) {
							let tag = reader.uint32()
							switch (tag >>> 3) {
								case 1:
									message.key = reader.bytes()
									break
								case 2:
									message.offset = reader.uint64()
									break
								case 3:
									message.limit = reader.uint64()
									break
								case 4:
									message.countTotal = reader.bool()
									break
								default:
									reader.skipType(tag & 7)
									break
							}
						}
						return message
					}

					/**
					 * Decodes a PageRequest message from the specified reader or buffer, length delimited.
					 * @function decodeDelimited
					 * @memberof cosmos.base.query.v1beta1.PageRequest
					 * @static
					 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
					 * @returns {cosmos.base.query.v1beta1.PageRequest} PageRequest
					 * @throws {Error} If the payload is not a reader or valid buffer
					 * @throws {$protobuf.util.ProtocolError} If required fields are missing
					 */
					PageRequest.decodeDelimited = function decodeDelimited(reader) {
						if (!(reader instanceof $Reader)) reader = new $Reader(reader)
						return this.decode(reader, reader.uint32())
					}

					/**
					 * Verifies a PageRequest message.
					 * @function verify
					 * @memberof cosmos.base.query.v1beta1.PageRequest
					 * @static
					 * @param {Object.<string,*>} message Plain object to verify
					 * @returns {string|null} `null` if valid, otherwise the reason why it is not
					 */
					PageRequest.verify = function verify(message) {
						if (typeof message !== 'object' || message === null)
							return 'object expected'
						if (message.key != null && message.hasOwnProperty('key'))
							if (
								!(
									(message.key && typeof message.key.length === 'number') ||
									$util.isString(message.key)
								)
							)
								return 'key: buffer expected'
						if (message.offset != null && message.hasOwnProperty('offset'))
							if (
								!$util.isInteger(message.offset) &&
								!(
									message.offset &&
									$util.isInteger(message.offset.low) &&
									$util.isInteger(message.offset.high)
								)
							)
								return 'offset: integer|Long expected'
						if (message.limit != null && message.hasOwnProperty('limit'))
							if (
								!$util.isInteger(message.limit) &&
								!(
									message.limit &&
									$util.isInteger(message.limit.low) &&
									$util.isInteger(message.limit.high)
								)
							)
								return 'limit: integer|Long expected'
						if (
							message.countTotal != null &&
							message.hasOwnProperty('countTotal')
						)
							if (typeof message.countTotal !== 'boolean')
								return 'countTotal: boolean expected'
						return null
					}

					/**
					 * Creates a PageRequest message from a plain object. Also converts values to their respective internal types.
					 * @function fromObject
					 * @memberof cosmos.base.query.v1beta1.PageRequest
					 * @static
					 * @param {Object.<string,*>} object Plain object
					 * @returns {cosmos.base.query.v1beta1.PageRequest} PageRequest
					 */
					PageRequest.fromObject = function fromObject(object) {
						if (object instanceof $root.cosmos.base.query.v1beta1.PageRequest)
							return object
						let message = new $root.cosmos.base.query.v1beta1.PageRequest()
						if (object.key != null)
							if (typeof object.key === 'string')
								$util.base64.decode(
									object.key,
									(message.key = $util.newBuffer(
										$util.base64.length(object.key)
									)),
									0
								)
							else if (object.key.length) message.key = object.key
						if (object.offset != null)
							if ($util.Long)
								(message.offset = $util.Long.fromValue(
									object.offset
								)).unsigned = true
							else if (typeof object.offset === 'string')
								message.offset = parseInt(object.offset, 10)
							else if (typeof object.offset === 'number')
								message.offset = object.offset
							else if (typeof object.offset === 'object')
								message.offset = new $util.LongBits(
									object.offset.low >>> 0,
									object.offset.high >>> 0
								).toNumber(true)
						if (object.limit != null)
							if ($util.Long)
								(message.limit = $util.Long.fromValue(
									object.limit
								)).unsigned = true
							else if (typeof object.limit === 'string')
								message.limit = parseInt(object.limit, 10)
							else if (typeof object.limit === 'number')
								message.limit = object.limit
							else if (typeof object.limit === 'object')
								message.limit = new $util.LongBits(
									object.limit.low >>> 0,
									object.limit.high >>> 0
								).toNumber(true)
						if (object.countTotal != null)
							message.countTotal = Boolean(object.countTotal)
						return message
					}

					/**
					 * Creates a plain object from a PageRequest message. Also converts values to other types if specified.
					 * @function toObject
					 * @memberof cosmos.base.query.v1beta1.PageRequest
					 * @static
					 * @param {cosmos.base.query.v1beta1.PageRequest} message PageRequest
					 * @param {$protobuf.IConversionOptions} [options] Conversion options
					 * @returns {Object.<string,*>} Plain object
					 */
					PageRequest.toObject = function toObject(message, options) {
						if (!options) options = {}
						let object = {}
						if (options.defaults) {
							if (options.bytes === String) object.key = ''
							else {
								object.key = []
								if (options.bytes !== Array)
									object.key = $util.newBuffer(object.key)
							}
							if ($util.Long) {
								let long = new $util.Long(0, 0, true)
								object.offset =
									options.longs === String
										? long.toString()
										: options.longs === Number
										? long.toNumber()
										: long
							} else object.offset = options.longs === String ? '0' : 0
							if ($util.Long) {
								let long = new $util.Long(0, 0, true)
								object.limit =
									options.longs === String
										? long.toString()
										: options.longs === Number
										? long.toNumber()
										: long
							} else object.limit = options.longs === String ? '0' : 0
							object.countTotal = false
						}
						if (message.key != null && message.hasOwnProperty('key'))
							object.key =
								options.bytes === String
									? $util.base64.encode(message.key, 0, message.key.length)
									: options.bytes === Array
									? Array.prototype.slice.call(message.key)
									: message.key
						if (message.offset != null && message.hasOwnProperty('offset'))
							if (typeof message.offset === 'number')
								object.offset =
									options.longs === String
										? String(message.offset)
										: message.offset
							else
								object.offset =
									options.longs === String
										? $util.Long.prototype.toString.call(message.offset)
										: options.longs === Number
										? new $util.LongBits(
												message.offset.low >>> 0,
												message.offset.high >>> 0
										  ).toNumber(true)
										: message.offset
						if (message.limit != null && message.hasOwnProperty('limit'))
							if (typeof message.limit === 'number')
								object.limit =
									options.longs === String
										? String(message.limit)
										: message.limit
							else
								object.limit =
									options.longs === String
										? $util.Long.prototype.toString.call(message.limit)
										: options.longs === Number
										? new $util.LongBits(
												message.limit.low >>> 0,
												message.limit.high >>> 0
										  ).toNumber(true)
										: message.limit
						if (
							message.countTotal != null &&
							message.hasOwnProperty('countTotal')
						)
							object.countTotal = message.countTotal
						return object
					}

					/**
					 * Converts this PageRequest to JSON.
					 * @function toJSON
					 * @memberof cosmos.base.query.v1beta1.PageRequest
					 * @instance
					 * @returns {Object.<string,*>} JSON object
					 */
					PageRequest.prototype.toJSON = function toJSON() {
						return this.constructor.toObject(this, $protobuf.util.toJSONOptions)
					}

					return PageRequest
				})()

				v1beta1.PageResponse = (function () {
					/**
					 * Properties of a PageResponse.
					 * @memberof cosmos.base.query.v1beta1
					 * @interface IPageResponse
					 * @property {Uint8Array|null} [nextKey] PageResponse nextKey
					 * @property {number|Long|null} [total] PageResponse total
					 */

					/**
					 * Constructs a new PageResponse.
					 * @memberof cosmos.base.query.v1beta1
					 * @classdesc Represents a PageResponse.
					 * @implements IPageResponse
					 * @constructor
					 * @param {cosmos.base.query.v1beta1.IPageResponse=} [properties] Properties to set
					 */
					function PageResponse(properties) {
						if (properties)
							for (
								let keys = Object.keys(properties), i = 0;
								i < keys.length;
								++i
							)
								if (properties[keys[i]] != null)
									this[keys[i]] = properties[keys[i]]
					}

					/**
					 * PageResponse nextKey.
					 * @member {Uint8Array} nextKey
					 * @memberof cosmos.base.query.v1beta1.PageResponse
					 * @instance
					 */
					PageResponse.prototype.nextKey = $util.newBuffer([])

					/**
					 * PageResponse total.
					 * @member {number|Long} total
					 * @memberof cosmos.base.query.v1beta1.PageResponse
					 * @instance
					 */
					PageResponse.prototype.total = $util.Long
						? $util.Long.fromBits(0, 0, true)
						: 0

					/**
					 * Creates a new PageResponse instance using the specified properties.
					 * @function create
					 * @memberof cosmos.base.query.v1beta1.PageResponse
					 * @static
					 * @param {cosmos.base.query.v1beta1.IPageResponse=} [properties] Properties to set
					 * @returns {cosmos.base.query.v1beta1.PageResponse} PageResponse instance
					 */
					PageResponse.create = function create(properties) {
						return new PageResponse(properties)
					}

					/**
					 * Encodes the specified PageResponse message. Does not implicitly {@link cosmos.base.query.v1beta1.PageResponse.verify|verify} messages.
					 * @function encode
					 * @memberof cosmos.base.query.v1beta1.PageResponse
					 * @static
					 * @param {cosmos.base.query.v1beta1.IPageResponse} message PageResponse message or plain object to encode
					 * @param {$protobuf.Writer} [writer] Writer to encode to
					 * @returns {$protobuf.Writer} Writer
					 */
					PageResponse.encode = function encode(message, writer) {
						if (!writer) writer = $Writer.create()
						if (
							message.nextKey != null &&
							Object.hasOwnProperty.call(message, 'nextKey')
						)
							writer.uint32(/* id 1, wireType 2 =*/ 10).bytes(message.nextKey)
						if (
							message.total != null &&
							Object.hasOwnProperty.call(message, 'total')
						)
							writer.uint32(/* id 2, wireType 0 =*/ 16).uint64(message.total)
						return writer
					}

					/**
					 * Encodes the specified PageResponse message, length delimited. Does not implicitly {@link cosmos.base.query.v1beta1.PageResponse.verify|verify} messages.
					 * @function encodeDelimited
					 * @memberof cosmos.base.query.v1beta1.PageResponse
					 * @static
					 * @param {cosmos.base.query.v1beta1.IPageResponse} message PageResponse message or plain object to encode
					 * @param {$protobuf.Writer} [writer] Writer to encode to
					 * @returns {$protobuf.Writer} Writer
					 */
					PageResponse.encodeDelimited = function encodeDelimited(
						message,
						writer
					) {
						return this.encode(message, writer).ldelim()
					}

					/**
					 * Decodes a PageResponse message from the specified reader or buffer.
					 * @function decode
					 * @memberof cosmos.base.query.v1beta1.PageResponse
					 * @static
					 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
					 * @param {number} [length] Message length if known beforehand
					 * @returns {cosmos.base.query.v1beta1.PageResponse} PageResponse
					 * @throws {Error} If the payload is not a reader or valid buffer
					 * @throws {$protobuf.util.ProtocolError} If required fields are missing
					 */
					PageResponse.decode = function decode(reader, length) {
						if (!(reader instanceof $Reader)) reader = $Reader.create(reader)
						let end = length === undefined ? reader.len : reader.pos + length,
							message = new $root.cosmos.base.query.v1beta1.PageResponse()
						while (reader.pos < end) {
							let tag = reader.uint32()
							switch (tag >>> 3) {
								case 1:
									message.nextKey = reader.bytes()
									break
								case 2:
									message.total = reader.uint64()
									break
								default:
									reader.skipType(tag & 7)
									break
							}
						}
						return message
					}

					/**
					 * Decodes a PageResponse message from the specified reader or buffer, length delimited.
					 * @function decodeDelimited
					 * @memberof cosmos.base.query.v1beta1.PageResponse
					 * @static
					 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
					 * @returns {cosmos.base.query.v1beta1.PageResponse} PageResponse
					 * @throws {Error} If the payload is not a reader or valid buffer
					 * @throws {$protobuf.util.ProtocolError} If required fields are missing
					 */
					PageResponse.decodeDelimited = function decodeDelimited(reader) {
						if (!(reader instanceof $Reader)) reader = new $Reader(reader)
						return this.decode(reader, reader.uint32())
					}

					/**
					 * Verifies a PageResponse message.
					 * @function verify
					 * @memberof cosmos.base.query.v1beta1.PageResponse
					 * @static
					 * @param {Object.<string,*>} message Plain object to verify
					 * @returns {string|null} `null` if valid, otherwise the reason why it is not
					 */
					PageResponse.verify = function verify(message) {
						if (typeof message !== 'object' || message === null)
							return 'object expected'
						if (message.nextKey != null && message.hasOwnProperty('nextKey'))
							if (
								!(
									(message.nextKey &&
										typeof message.nextKey.length === 'number') ||
									$util.isString(message.nextKey)
								)
							)
								return 'nextKey: buffer expected'
						if (message.total != null && message.hasOwnProperty('total'))
							if (
								!$util.isInteger(message.total) &&
								!(
									message.total &&
									$util.isInteger(message.total.low) &&
									$util.isInteger(message.total.high)
								)
							)
								return 'total: integer|Long expected'
						return null
					}

					/**
					 * Creates a PageResponse message from a plain object. Also converts values to their respective internal types.
					 * @function fromObject
					 * @memberof cosmos.base.query.v1beta1.PageResponse
					 * @static
					 * @param {Object.<string,*>} object Plain object
					 * @returns {cosmos.base.query.v1beta1.PageResponse} PageResponse
					 */
					PageResponse.fromObject = function fromObject(object) {
						if (object instanceof $root.cosmos.base.query.v1beta1.PageResponse)
							return object
						let message = new $root.cosmos.base.query.v1beta1.PageResponse()
						if (object.nextKey != null)
							if (typeof object.nextKey === 'string')
								$util.base64.decode(
									object.nextKey,
									(message.nextKey = $util.newBuffer(
										$util.base64.length(object.nextKey)
									)),
									0
								)
							else if (object.nextKey.length) message.nextKey = object.nextKey
						if (object.total != null)
							if ($util.Long)
								(message.total = $util.Long.fromValue(
									object.total
								)).unsigned = true
							else if (typeof object.total === 'string')
								message.total = parseInt(object.total, 10)
							else if (typeof object.total === 'number')
								message.total = object.total
							else if (typeof object.total === 'object')
								message.total = new $util.LongBits(
									object.total.low >>> 0,
									object.total.high >>> 0
								).toNumber(true)
						return message
					}

					/**
					 * Creates a plain object from a PageResponse message. Also converts values to other types if specified.
					 * @function toObject
					 * @memberof cosmos.base.query.v1beta1.PageResponse
					 * @static
					 * @param {cosmos.base.query.v1beta1.PageResponse} message PageResponse
					 * @param {$protobuf.IConversionOptions} [options] Conversion options
					 * @returns {Object.<string,*>} Plain object
					 */
					PageResponse.toObject = function toObject(message, options) {
						if (!options) options = {}
						let object = {}
						if (options.defaults) {
							if (options.bytes === String) object.nextKey = ''
							else {
								object.nextKey = []
								if (options.bytes !== Array)
									object.nextKey = $util.newBuffer(object.nextKey)
							}
							if ($util.Long) {
								let long = new $util.Long(0, 0, true)
								object.total =
									options.longs === String
										? long.toString()
										: options.longs === Number
										? long.toNumber()
										: long
							} else object.total = options.longs === String ? '0' : 0
						}
						if (message.nextKey != null && message.hasOwnProperty('nextKey'))
							object.nextKey =
								options.bytes === String
									? $util.base64.encode(
											message.nextKey,
											0,
											message.nextKey.length
									  )
									: options.bytes === Array
									? Array.prototype.slice.call(message.nextKey)
									: message.nextKey
						if (message.total != null && message.hasOwnProperty('total'))
							if (typeof message.total === 'number')
								object.total =
									options.longs === String
										? String(message.total)
										: message.total
							else
								object.total =
									options.longs === String
										? $util.Long.prototype.toString.call(message.total)
										: options.longs === Number
										? new $util.LongBits(
												message.total.low >>> 0,
												message.total.high >>> 0
										  ).toNumber(true)
										: message.total
						return object
					}

					/**
					 * Converts this PageResponse to JSON.
					 * @function toJSON
					 * @memberof cosmos.base.query.v1beta1.PageResponse
					 * @instance
					 * @returns {Object.<string,*>} JSON object
					 */
					PageResponse.prototype.toJSON = function toJSON() {
						return this.constructor.toObject(this, $protobuf.util.toJSONOptions)
					}

					return PageResponse
				})()

				return v1beta1
			})()

			return query
		})()

		return base
	})()

	return cosmos
})())

export { $root as default }
