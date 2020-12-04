<template>
  <div class="roomViewer">
    <div class="info"></div>
    <VideoPlayer ref="localVideo" :videoId="'localVideo'"></VideoPlayer>
    <VideoPlayer ref="roomVideo" :videoId="'roomVideo'"></VideoPlayer>

    <button @click="callHandler">Call User</button>
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
    ...mapActions('room', ['callUser']),
    ...mapActions('media', ['getDeviceMedia', 'createOffer', 'setLocalStreamVideoEl']),
    callHandler() {
      const offer = this.createOffer();
      this.callUser(offer);
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
