import axios from "axios";
import {
  Secp256k1Wallet,
  SigningCosmosClient,
  makeCosmoshubPath,
  coins,
} from "@cosmjs/launchpad";

const CUSTOM_URL =
  process.env.VUE_APP_CUSTOM_URL && new URL(process.env.VUE_APP_CUSTOM_URL);
const API =
  (CUSTOM_URL && `${CUSTOM_URL.protocol}//1317-${CUSTOM_URL.hostname}`) ||
  "http://localhost:1317";
const ADDRESS_PREFIX = "cosmos";

export default {
  namespaced: true,
  state: {
    API,
    account: {},
    client: null,
    chain_id: "",
    bankBalances: [],
  },
  mutations: {
    set(state, { key, value }) {
      state[key] = value;
    },
  },
  actions: {
    async init({ dispatch }) {
      // dispatch("stakingPoolFetch");
      // dispatch("validatorsFetch");
      await dispatch("chainIdFetch");
      await dispatch("accountSignInTry");
    },
    async accountSignInTry({ dispatch }) {
      const mnemonic = localStorage.getItem("mnemonic");
      if (mnemonic) {
        await dispatch("accountSignIn", { mnemonic });
      }
    },
    async chainIdFetch({ commit }) {
      const url = `${API}/node_info`;
      const value = (await axios.get(url)).data.node_info.network;
      commit("set", { key: "chain_id", value });
    },
    accountSignIn({ commit, dispatch }, { mnemonic }) {
      return new Promise(async (resolve, reject) => {
        const wallet = await Secp256k1Wallet.fromMnemonic(
          mnemonic,
          makeCosmoshubPath(0),
          ADDRESS_PREFIX
        );
        localStorage.setItem("mnemonic", mnemonic);
        const [{ address }] = await wallet.getAccounts();
        const url = `${API}/auth/accounts/${address}`;
        const acc = (await axios.get(url)).data;
        const account = acc.result.value;
        commit("set", { key: "account", value: account });
        const client = new SigningCosmosClient(API, address, wallet);
        commit("set", { key: "client", value: client });
        // // dispatch("delegationsFetch");
        // // dispatch("transfersIncomingFetch");
        // // dispatch("transfersOutgoingFetch");
        try {
          await dispatch("bankBalancesGet");
        } catch {
          console.log("Error in getting a bank balance.");
        }
        // resolve(account);
      });
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
        amount: coins(200, "token"),
        gas: "200000",
      };
      return await state.client.signAndPost([msg], fee, memo);
    },
    async bankBalancesGet({ commit, state }) {
      const { address } = state.account;
      const url = `${API}/bank/balances/${address}`;
      const value = (await axios.get(url)).data.result;
      commit("set", { key: "bankBalances", value });
    },
    async accountSignOut({ commit }) {
      localStorage.removeItem("mnemonic");
      window.location.reload();
    },
  },
};
