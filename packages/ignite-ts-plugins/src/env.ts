interface Env {
  chainID?: string
  chainName?: string
  apiURL: string
  rpcURL: string
  wsURL: string
  prefix?: string
  status?: {
    apiConnected: boolean
    rpcConnected: boolean
    wsConnected: boolean
  }
}
function plugEnv(initial: Env): {
  env: Env
} {
  return {
    env: {
      status: {
        apiConnected: false,
        rpcConnected: false,
        wsConnected: false
      },
      ...initial
    }
  }
}

export { Env, plugEnv }
