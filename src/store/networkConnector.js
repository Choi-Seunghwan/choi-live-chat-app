import socket from '@/services/webSocket.js';

const state = () => ({
  isConnected: false
});

const mutations = {};

const getters = {};

const actions = {
  connection() {
    socket.connection();
  }
};

export default {
  namespaced: true,
  state,
  mutations,
  getters,
  actions
};
