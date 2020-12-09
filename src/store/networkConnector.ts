import ws from '../services/webSocket.js';

const state = () => ({
  isConnected: false
});

const mutations = {};

const getters = {};

const actions = {
  initNetworkConnector({ dispatch }) {
    dispatch('connection');
  },

  connection() {
    ws.connection();
  }
};

export default {
  namespaced: true,
  state,
  mutations,
  getters,
  actions
};
