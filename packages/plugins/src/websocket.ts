import axios from 'axios'
import EventEmitter from 'eventemitter3'
import ReconnectingWebSocket from 'reconnecting-websocket'

import { Env } from './env'

function plugWebSocket(env: Env): {
  ws: {
    ee: () => EventEmitter
    close: () => void
    connect: () => void
  }
} {
  let _refresh = 5000
  let _socket: ReconnectingWebSocket
  let _timer: NodeJS.Timer
  let _ee = new EventEmitter()

  let ping = async () => {
    if (env.apiURL) {
      try {
        const status: any = await axios.get(env.apiURL + '/node_info')
        _ee.emit('ws-chain-id', status.data.node_info.network)

        status.data.application_version.name
          ? _ee.emit('ws-chain-name', status.data.application_version.name)
          : _ee.emit('ws-chain-name', status.data.node_info.network)

        _ee.emit('ws-api-status', true)
      } catch (error) {
        if (!error.response) {
          _ee.emit('ws-api-status', false)

          console.error(new Error('WebSocketClient: API Node unavailable'))
        }
      }

      if (env.rpcURL) {
        try {
          await axios.get(env.rpcURL)
          _ee.emit('ws-rpc-status', true)
        } catch (error) {
          _ee.emit('ws-rpc-status', false)

          if (!error.response) {
            console.error(new Error('WebSocketClient: RPC Node unavailable'))
          }
        }
      }
    }
  }

  let onError = () => {
    console.error(new Error('WebSocketClient: Could not connect to websocket.'))
  }

  let onClose = () => {
    _ee.emit('ws-close')
  }

  let onOpen = () => {
    _ee.emit('ws-open')

    _socket.send(
      JSON.stringify({
        jsonrpc: '2.0',
        method: 'subscribe',
        id: '1',
        params: ["tm.event = 'NewBlock'"]
      })
    )
  }

  let onMessage = (msg) => {
    const result = JSON.parse(msg.data).result

    if (result.data && result.data.type === 'tendermint/event/NewBlock') {
      _ee.emit('ws-newblock', JSON.parse(msg.data).result)
    }
  }

  return {
    ws: {
      ee: () => _ee,

      close: () => {
        clearInterval(_timer)
        _timer = undefined
        _socket.close()
      },

      connect: () => {
        _socket = new ReconnectingWebSocket(env.wsURL)
        ping()
        _timer = setInterval(() => ping(), _refresh)
        _socket.onopen = onOpen.bind(this)
        _socket.onmessage = onMessage.bind(this)
        _socket.onerror = onError.bind(this)
        _socket.onclose = onClose.bind(this)
      }
    }
  }
}

export { plugWebSocket }
