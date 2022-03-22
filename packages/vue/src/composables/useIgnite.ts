import { OfflineDirectSigner } from '@cosmjs/proto-signing'
import { SigningStargateClient } from '@cosmjs/stargate'
import { createIgnite, Environment, Ignite, registry } from '@ignt/client'
import { computed, ComputedRef, Ref, ref } from 'vue'

// defaults
let apiURL = process.env.VUE_APP_API_COSMOS || 'http://localhost:1317'
let rpcURL = process.env.VUE_APP_API_TENDERMINT || 'http://localhost:26657'
let wsURL =
  process.env.VUE_APP_WS_TENDERMINT || 'ws://localhost:26657/websocket'
let prefix = process.env.VUE_APP_ADDRESS_PREFIX || 'cosmos'

// singleton state
let ignite: Ref<Ignite | undefined> = ref<Ignite>()
let computedIgnite = computed<Ignite | undefined>(() => ignite.value)

type Response = {
  ignite: ComputedRef<Ignite | undefined>
  signIn: (offlineSigner: OfflineDirectSigner) => void
  signOut: () => void
}

export default function (): Response {
  let initIgnite = !ignite.value

  if (initIgnite) {
    let env: Environment = {
      apiURL,
      rpcURL,
      wsURL,
      prefix
    }

    ignite.value = createIgnite({
      env
    }).useWebSocket()
  }

  let signIn = async (offlineSigner: OfflineDirectSigner) => {
    let [acc] = await offlineSigner.getAccounts()

    let stargateClient = await SigningStargateClient.connectWithSigner(
      ignite.value?.env.rpcURL,
      offlineSigner,
      { registry }
    )

    ignite.value?.useSigner(stargateClient, acc.address)
  }

  let signOut = () => {
    ignite.value?.signOut()
  }

  return {
    ignite: computedIgnite,
    signIn,
    signOut
  }
}
