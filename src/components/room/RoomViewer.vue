<template>
  <div class="roomViewer">
    <div class="info"></div>
    <VideoPlayer :videoId="'localVideo'"></VideoPlayer>
    <VideoPlayer :videoId="'roomVideo'"></VideoPlayer>
  </div>
</template>
<script>
import VideoPlayer from '@/components/video/VideoPlayer.vue';
import WebRTC from '@/mixin/WebRTC.js';

export default {
  mixins: [WebRTC],
  components: {
    VideoPlayer
  },

  data() {
    return {};
  },
  async mounted() {
    this.hello();
    await this.getDeviceMedia();
  }
};
</script>

<style lang="scss" scoped></style>
