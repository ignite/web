import { SigningStargateClient } from '@cosmjs/stargate'

function plugSigner(): {
  signer: {
    client: SigningStargateClient
    addr: string
  }
} {
  return {
    signer: {
      client: undefined,
      addr: undefined
    }
  }
}

export { plugSigner }
