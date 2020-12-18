<template>
  <div class="liveViewer">
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
    ...mapState('media', ['localStream'])
  },
  methods: {
    ...mapActions('live', ['callUser']),
    ...mapActions('media', ['getDeviceMedia', 'createOffer', 'setLocalStreamVideoEl']),
    callHandler() {
      // const offer = this.createOffer();
    }
  },
  async mounted() {
    await this.getDeviceMedia();
    this.$nextTick(() => {
      this.setLocalStreamVideoEl(this.$refs.localVideo.getVideoEl());
    });
  }
};
</script>
