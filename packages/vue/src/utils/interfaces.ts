export interface Amount {
  amount: string
  denom: string
}
export type AmountWithMeta = Amount & {
  coinDenom: string
  coinMinimalDenom: string
  coinDecimals: number
}
