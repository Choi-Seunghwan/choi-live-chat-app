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
  namespaced: true,
  state,
  mutations,
  getters,
  actions
};
