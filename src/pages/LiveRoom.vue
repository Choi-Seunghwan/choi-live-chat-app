<template>
  <div class="liveRoom">
    <div class="liveRoom__top"></div>
    LiveRoom!
    <VideoPlayer />
    <div class="liveRoom__bottom"></div>
  </div>
</template>
<script>
import VideoPlayer from '@/components/video/VideoPlayer.vue';
export default {
  components: {
    VideoPlayer
  },
  mounted() {}
};
</script>
<style lang="scss"></style>
