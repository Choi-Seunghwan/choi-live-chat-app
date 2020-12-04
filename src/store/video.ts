const state = () => ({
  localStream: undefined
});

const mutations = {};

const getters = {};

const actions = {
  async getDeviceMedia({ state }) {
    if ('mediaDevices' in navigator) {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({ video: true });
        state.localStream = stream;
      } catch (error) {
        alert(error);
      }
    }
  },

  setLocalStreamVideoEl({ state }, el) {
    el.srcObject = state.localStream;
  }
};

export default {
  state,
  mutations,
  getters,
  actions,
  namespaced: true
};
