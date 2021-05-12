import ws from '../services/webSocket.js';
import api from '../services/api.js';
import { HTTP_STATUS } from '../util/constant';
import { TYPE_RADIO, SET_CURRENT_LIVE_ROOM_ID } from '@/constant';

const state = () => ({
  roomList: [],
  member: [],
  currentLiveRoom: {},
  currentLiveRoomId: ''
});

const mutations = {
  [SET_CURRENT_LIVE_ROOM_ID]: (state, roomId) => (state.currentLiveRoomId = roomId),
  setCurrentLiveRoom: (state, room) => (state.currentLiveRoom = room)
};

const getters = {
  _currentLiveRoomId: state => state.currentLiveRoomId
};

const actions = {
  async createRoom(_, { title, type = TYPE_RADIO }) {
    ws.sendMessage('live/createRoom', { title, type });
  },

  async startLive({ dispatch, rootGetters }, roomInfo) {
    await dispatch('media/createOffer', true, { root: true });

    const localDescriptionOffer = rootGetters['media/getLocalDescriptionOffer'];
    ws.sendMessage('live/startLive', [{ ...roomInfo, localDescriptionOffer }]);
  },

  joinRoom({ state }, roomId: string) {
    ws.sendMessage('live/joinRoom', { roomId });
  },

  async getRoomList({ state }) {
    await api.get('live/roomList', (status, data) => {
      if (status === HTTP_STATUS.OK && data.roomList) {
        state.roomList = data.roomList;
      }
    });
  },

  handleMessage({ state, commit }, args) {
    const { method } = args;
    const splittedMethod = method.split('/');
    console.log('@@', args);

    switch (method[1]) {
      case 'joinRoom': {
        const { room } = args.result;
        const { roomId } = room;
        commit(SET_CURRENT_LIVE_ROOM_ID, roomId);
        break;
      }
      default:
        break;
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
