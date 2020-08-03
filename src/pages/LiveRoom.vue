<template>
  <div class="liveRoom">
    <div class="liveRoom__top"></div>
    <VideoPlayer />
    <div class="liveRoom__bottom"></div>
  </div>
</template>
<script>
import VideoPlayer from "../components/videoPlayer/VideoPlayer";
export default {
  components: {
    VideoPlayer
  },
  mounted() {}
};
</script>
<style lang="scss"></style>
