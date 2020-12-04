<template>
  <div class="roomViewer">
    <div class="info"></div>
    <VideoPlayer :videoId="'localVideo'"></VideoPlayer>
    <VideoPlayer :videoId="'roomVideo'"></VideoPlayer>
  </div>
</template>
<script>
import { mapActions } from 'vuex';
import VideoPlayer from '@/components/video/VideoPlayer.vue';

export default {
  components: {
    VideoPlayer
  },

  data() {
    return {};
  },
  methods: {
    ...mapActions('video', ['getDeviceMedia', 'setLocalStreamVideoEl'])
  },
  async mounted() {
    await this.getDeviceMedia();
    this.setLocalStreamVideoEl(this.refs.localVideo);
  }
};
</script>

<style lang="scss" scoped></style>
