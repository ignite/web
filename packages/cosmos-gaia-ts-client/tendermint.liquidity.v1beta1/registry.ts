import { GeneratedType } from '@cosmjs/proto-signing'

import { MsgDepositWithinBatch } from './types/tendermint/liquidity/v1beta1/tx'
import { MsgWithdrawWithinBatch } from './types/tendermint/liquidity/v1beta1/tx'
import { MsgSwapWithinBatch } from './types/tendermint/liquidity/v1beta1/tx'
import { MsgCreatePool } from './types/tendermint/liquidity/v1beta1/tx'

const msgTypes: Array<[string, GeneratedType]> = [
  [
    '/tendermint.liquidity.v1beta1.MsgDepositWithinBatch',
    MsgDepositWithinBatch
  ],
  [
    '/tendermint.liquidity.v1beta1.MsgWithdrawWithinBatch',
    MsgWithdrawWithinBatch
  ],
  ['/tendermint.liquidity.v1beta1.MsgSwapWithinBatch', MsgSwapWithinBatch],
  ['/tendermint.liquidity.v1beta1.MsgCreatePool', MsgCreatePool]
]

export { msgTypes }
