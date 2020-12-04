<template>
  <div class="roomViewer">
    <div class="info"></div>
    <VideoPlayer ref="localVideo" :videoId="'localVideo'"></VideoPlayer>
    <VideoPlayer ref="roomVideo" :videoId="'roomVideo'"></VideoPlayer>
  </div>
</template>
<script>
import { mapActions, mapState } from 'vuex';
import VideoPlayer from '@/components/video/VideoPlayer.vue';

export default {
  components: {
    VideoPlayer
  },

  data() {
    return {};
  },
  computed: {
    ...mapState('video', ['localStream'])
  },
  methods: {
    ...mapActions('video', ['getDeviceMedia', 'setLocalStreamVideoEl']),
    init() {
      this.$refs;
    }
  },
  async mounted() {
    await this.getDeviceMedia();
    console.log(this.$refs);
    this.$nextTick(() => {
      console.log(this.$refs.localVideo.getVideoEl());
      this.setLocalStreamVideoEl(this.$refs.localVideo.getVideoEl());
    });
  }
};
</script>

<style lang="scss" scoped></style>
