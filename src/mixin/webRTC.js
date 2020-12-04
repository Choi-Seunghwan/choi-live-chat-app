const webRTC = {
  data() {
    return {
      localStream: undefined
    };
  },

  methods: {
    // async getDeviceMedia() {
    //   if ('mediaDevices' in navigator) {
    //     try {
    //       const stream = await navigator.mediaDevices.getUserMedia({ video: true });
    //       this.localStream = stream;
    //     } catch (error) {
    //       alert(error);
    //     }
    //   }
    // }
  },
  mounted() {}
};

export default webRTC;
