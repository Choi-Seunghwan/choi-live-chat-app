<template>
  <div class="videoPlayer">
    <video :srcObject="mediaStream" :ref="`video_${videoId}`" autoplay :id="videoId" width="300" height="200"></video>
  </div>
</template>
<script>
export default {
  name: 'videoPlayer',
  data() {
    return {};
  },
  props: { videoId: { type: String, required: true, default: 'video' }, mediaStream: { required: false } },
  mounted() {},
  methods: {
    getVideoEl() {
      console.log('this.$refs[`vidoe_${this.videoId}`];', this.$refs, this.$refs[`vidoe_${this.videoId}`]);
      return this.$refs[`video_${this.videoId}`];
    }
  }
};
</script>
<style lang="scss"></style>
