<template>
  <div class="videoPlayer">
    <h4>remote Video</h4>
    <Video :videoId="'remoteVideo'" />
    <p />
    <hr />
    <h4>local Video</h4>
    <Video :videoId="'localVideo'" />
  </div>
</template>
<script>
import Video from './Video.vue';

export default {
  components: { Video },
  name: 'videoPlayer',
  data() {
    return {
      localVideoEl: undefined,
      remoteVideoEl: undefined,
      pc: undefined
    };
  },
  props: {},
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
