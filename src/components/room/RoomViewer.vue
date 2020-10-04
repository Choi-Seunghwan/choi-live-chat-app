<template>
  <div class="roomViewer">
    <div class="info"></div>
    <VideoPlayer :videoId="'roomVideo'"></VideoPlayer>
  </div>
</template>
<script>
import VideoPlayer from '@/components/video/VideoPlayer.vue';

export default {
  components: {
    VideoPlayer
  }
};
</script>

<style lang="scss" scoped></style>
