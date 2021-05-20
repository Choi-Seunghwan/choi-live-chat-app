import ws from '../services/webSocket.js';
import api from '../services/api.js';
import { HTTP_STATUS } from '../util/constant';
import { TYPE_RADIO } from '@/constant';

const state = () => ({});

const mutations = {};

const getters = {};

const actions = {
  sendChatMessage({ rootGetters }, { message }) {
    const roomId = rootGetters['live/_currentLiveRoomId'];
    ws.sendMessage('live/sendChatMessage', { roomId, message });
  },
  receiveChatMessage(_, args) {},
  handleMessage({ state, dispatch }, args) {
    const { method } = args;
    const splittedMethod = method.split('/');
    console.log('chat handleMessage', state, args);

    switch (splittedMethod[1]) {
      case 'receiveChatMessage': {
        dispatch('receiveChatMessage', args);
        break;
      }
      default: {
        break;
      }
    }
  }
};

export default {
  state,
  mutations,
  getters,
  actions,
  namespaced: true
};
