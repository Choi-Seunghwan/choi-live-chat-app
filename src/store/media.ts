const state = () => ({
  localStream: undefined,
  roomStream: undefined,
  peerConnection: undefined
});

const mutations = {};

const getters = {};

const actions = {
  initMedia({ state }) {
    const { RTCPeerConnection } = window;
    state.peerConnection = new RTCPeerConnection();
  },

  async getDeviceMedia({ state }) {
    if ('mediaDevices' in navigator) {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({ video: true });
        state.localStream = stream;

        stream.getTracks().forEach(track => state.peerConnection.addTrack(track, stream));
      } catch (error) {
        alert(error);
      }
    }
  },

  setLocalStreamVideoEl({ state }, el) {
    el.srcObject = state.localStream;
  },

  setRoomStreamVideoEl({ state }, el) {
    el.srcObject = state.roomStream;
  },

  async createOffer({ state }) {
    const { RTCSessionDescription } = window;
    const offer = await state.peerConnection.createOffer();
    await state.peerConnection.setLocalDescription(new RTCSessionDescription(offer));
    return offer;
  }
};

export default {
  state,
  mutations,
  getters,
  actions,
  namespaced: true
};
