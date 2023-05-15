import { createStore } from 'vuex';

const store = createStore({
  state() {
    return {
      contract: undefined,
      wallet: undefined,
      isOwner: false,
    };
  },
  mutations: {
    setwallet(state, wallet) {
      state.wallet = wallet;
    },
    checkOwner(state, isOwner) {
      state.isOwner = isOwner;
    },
    setContract(state, contract) {
      state.contract = contract;
    },
  },
});

export default store;
