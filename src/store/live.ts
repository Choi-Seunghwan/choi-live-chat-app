import ws from '../services/webSocket.js';
import api from '../services/api.js';
import { HTTP_STATUS } from '../util/constant';

const state = () => ({
  roomList: [],
  member: []
});

const mutations = {};

const getters = {};

const actions = {
  startLive() {
    ws.sendMessage('live/startLive', [{}, {}, { a: {}, b: ['a', 'b', {}] }]);
  },

  roomEnter() {
    ws.connection();
  },

  async getRoomList({ state }) {
    await api.get('live/roomList', (status, data) => {
      if (status === HTTP_STATUS.OK && data.roomList) {
        state.roomList = data.roomList;
      }
    });
  },

  handleMessage({ state }, args) {
    console.log('live handleMessage', state, args);
  }
};

export default {
  state,
  mutations,
  getters,
  actions,
  namespaced: true
};
