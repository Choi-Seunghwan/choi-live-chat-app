<template>
  <div class="videoPlayer">
    <h4>remote Video</h4>
    <video autoplay playsinline ref="remoteVideo" id="remoteVideo" width="300" height="200"></video>
    <p />
    <hr />
    <h4>local Video</h4>
    <video autoplay playsinline ref="localVideo" id="localVideo" width="300" height="200"></video>
  </div>
</template>
<script>
export default {
  name: 'videoPlayer',
  data() {
    return {
      localVideoEl: undefined,
      remoteVideoEl: undefined,
      pc: undefined
    };
  },
  props: {
    msg: String
  },
  mounted() {
    this.localVideoEl = this.$refs['localVideo'];
    this.remoteVideoEl = this.$refs['remoteVideo'];
  },
  methods: {
    createPeerConnection() {
      this.pc = new RTCPeerConnection();
    }
  }
};
</script>
<style lang="scss"></style>
