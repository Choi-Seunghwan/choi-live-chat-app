import socket from '@/util/socket.js';

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
  state,
  mutations,
  getters,
  actions,
  namespaced: true
};
