<template>
  <div class="video">
    <video :ref="`video_${videoId}`" autoplay :id="videoId" width="300" height="200"></video>
  </div>
</template>
<script>
export default {
  name: 'videoItem',
  props: {
    videoStream: MediaStream,
    videoId: {
      type: String,
      default: 'video',
      require: false
    }
  },
  data() {
    return {};
  },
  mounted() {},
  methods: {}
};
</script>
<style lang="scss"></style>
