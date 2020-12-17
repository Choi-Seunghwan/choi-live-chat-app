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
  async startLive({ dispatch, rootGetters }, roomInfo) {
    await dispatch('media/createOffer', true, { root: true });

    const offer = rootGetters['media/getLocalDescriptionOffer'];
    console.log('offer', offer);
    ws.sendMessage('live/startLive', [{ ...roomInfo, offer }]);
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
