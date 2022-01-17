import SpVuexError from './errors/SpVuexError'
import { keyFromWif, keyToWif } from './helpers/keys'
import blocks from './modules/common/blocks'
import env from './modules/common/env'
import relayers from './modules/common/relayers'
import transfers from './modules/common/transfers'
import wallet from './modules/common/wallet'
export {
  blocks,
  env,
  keyFromWif,
  keyToWif,
  relayers,
  SpVuexError,
  transfers,
  wallet
}

import { Buffer } from 'buffer'

// @ts-ignore
globalThis['Buffer'] = Buffer
