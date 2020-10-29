import axios from "axios";
import {
  Secp256k1HdWallet,
  SigningCosmosClient,
  makeCosmoshubPath,
  coins
} from "@cosmjs/launchpad";

export default {
  namespaced: true,
  state: {
    account: {},
    client: null,
    bankBalances: []
  },
  getters: {
    client: state => state.client
  },
  mutations: {
    set(state, { key, value }) {
      state[key] = value;
    },
  },  
  actions: {
    async accountSignInTry({ dispatch }) {
      const mnemonic = localStorage.getItem("mnemonic");
      if (mnemonic) {
        await dispatch("accountSignIn", { mnemonic });
      }
    },
    accountSignIn({ commit, dispatch, rootGetters }, { mnemonic }) {
      const { API, ADDR_PREFIX } = rootGetters['cosmos/env/appEnv']

      return new Promise(async (resolve, reject) => {
        const wallet = await Secp256k1HdWallet.fromMnemonic(
          mnemonic,
          makeCosmoshubPath(0),
          ADDR_PREFIX
        );
        localStorage.setItem("mnemonic", mnemonic);
        const [{ address }] = await wallet.getAccounts();
        const url = `${API}/auth/accounts/${address}`;
        const acc = (await axios.get(url)).data;
        const account = acc.result.value;
        commit("set", { key: "account", value: account });
        const client = new SigningCosmosClient(API, address, wallet);
        commit("set", { key: "client", value: client });
        try {
          await dispatch("bankBalancesGet");
        } catch {
          console.log("Error in getting a bank balance.");
        }
      });
    },    
    async accountSignOut({ commit }) {
      localStorage.removeItem("mnemonic");
      window.location.reload();
    },    
    async tokenSend({ state }, { amount, denom, to_address, memo = "" }) {
      const from_address = state.client.senderAddress;
      const msg = {
        type: "cosmos-sdk/MsgSend",
        value: {
          amount: [
            {
              amount,
              denom,
            },
          ],
          from_address,
          to_address,
        },
      };
      const fee = {
        amount: coins(0, denom),
        gas: "200000",
      };
      return await state.client.signAndBroadcast([msg], fee, memo);
    },
    async bankBalancesGet({ commit, state, rootGetters }) {
      const { API } = rootGetters['cosmos/env/appEnv']      
      const { address } = state.account;
      const url = `${API}/bank/balances/${address}`;
      const value = (await axios.get(url)).data.result;
      commit("set", { key: "bankBalances", value });
    },    
  }  
}