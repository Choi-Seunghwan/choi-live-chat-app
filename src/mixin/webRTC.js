export const videoConf = {
  data() {
    return {
      localStream: undefined
    };
  },

  method: {
    async getDeviceMedia() {
      if ('mediaDevices' in navigator) {
        try {
          const stream = await navigator.mediaDevices.getUserMedia({ video: true });
          this.localStream = stream;
        } catch (error) {
          alert(error);
        }
      }
    },
    getAudioVideo() {}
  }
};
