<template>
  <div class="room">
    <div class="room__top"></div>
    Room!
    <VideoPlayer />
    <div class="room__bottom"></div>
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
