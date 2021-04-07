import ws from '../services/webSocket.js';
import api from '../services/api.js';
import { HTTP_STATUS } from '../util/constant';
import { TYPE_RADIO } from '@/constant';

const state = () => ({
  roomList: [],
  member: []
});

const mutations = {};

const getters = {};

const actions = {
  async createRoom(_, { title, type = TYPE_RADIO }) {
    ws.sendMessage('live/createRoom', { title, type });
  },
  async startLive({ dispatch, rootGetters }, roomInfo) {
    await dispatch('media/createOffer', true, { root: true });

    const localDescriptionOffer = rootGetters['media/getLocalDescriptionOffer'];
    ws.sendMessage('live/startLive', [{ ...roomInfo, localDescriptionOffer }]);
  },

  enterRoom({ state }, roomId) {
    // ws.connection();
    state;
    ws.sendMessage('live/enterRoom', [{ roomId }]);
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
