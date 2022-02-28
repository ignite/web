import blocks from './modules/common/blocks'
import env from './modules/common/env'
import wallet from './modules/common/wallet'
export { blocks, env, wallet }

import { Buffer } from 'buffer'

// @ts-ignore
globalThis['Buffer'] = Buffer
