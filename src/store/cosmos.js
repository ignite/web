import axios from "axios";
import {
  Secp256k1Wallet,
  SigningCosmosClient,
  makeCosmoshubPath,
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
        const [{ address }] = await wallet.getAccounts();
        const url = `${API}/auth/accounts/${address}`;
        const acc = (await axios.get(url)).data;
        if (acc.result.value.address === address) {
          localStorage.setItem("mnemonic", mnemonic);
          const account = acc.result.value;
          const client = new SigningCosmosClient(API, address, wallet);
          commit("set", { key: "account", value: account });
          commit("set", { key: "client", value: client });
          // dispatch("delegationsFetch");
          // dispatch("transfersIncomingFetch");
          // dispatch("transfersOutgoingFetch");
          dispatch("bankBalancesGet");
          resolve(account);
        } else {
          reject("Account doesn't exist.");
        }
      });
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
