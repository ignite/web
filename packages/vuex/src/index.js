import env from './modules/common/env'
export { env }

import { Buffer } from 'buffer'

// @ts-ignore
globalThis['Buffer'] = Buffer
