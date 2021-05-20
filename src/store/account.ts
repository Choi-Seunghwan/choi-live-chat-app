import api from '../services/api.js';
import { HTTP_STATUS } from '../util/constant';

const state = () => ({
  loggedIn: false,
  nickname: ''
});

const mutations = {};

const getters = {
  getNickname(state) {
    if (state.nickname) return state.nickname;
    else return 'defaultNickname';
  }
};

const actions = {
  initAccount({ dispatch }) {
    dispatch('login');
  },

  async login({ state }) {
    const res = await api.get('account/login');

    // state.nickname = data.nickname;
    // state.loggedIn = data.result;
  },

  handleMessage({ state }, args) {
    console.log('account handleMessage', state, args);
  }
};

export default {
  namespaced: true,
  state,
  mutations,
  getters,
  actions
};
