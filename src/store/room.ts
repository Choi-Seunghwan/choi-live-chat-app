import ws from '../services/webSocket.js';
import api from '../services/api.js';

const state = () => ({
  roomList: [],
  member: []
});

const mutations = {};

const getters = {};

const actions = {
  // getRoomList({ commit }) {
  //   api.get('/');
  // }
  roomEnter() {
    ws.connection();
  },

  getRoomList() {
    api.get('room/roomList', response => {
      console.log('roomList', response);
    });
  },

  callUser(offer) {
    ws.callUser(offer);
  }
};

export default {
  state,
  mutations,
  getters,
  actions,
  namespaced: true
};
