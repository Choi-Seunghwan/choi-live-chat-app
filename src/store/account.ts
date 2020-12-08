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
    await api.get('account/login', (status, data) => {
      if (status === HTTP_STATUS.OK && data) {
        state.nickname = data.nickname;
        state.loggedIn = data.result;
      }
    });
  }
};

export default {
  namespaced: true,
  state,
  mutations,
  getters,
  actions
};
