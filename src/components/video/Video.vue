<template>
  <div class="video">
    <video autoplay :id="videoId" width="300" height="200"></video>
  </div>
</template>
<script>
export default {
  name: 'video',
  data() {
    return {};
  },
  props: {
    videoId: {
      type: String,
      default: 'video',
      require: false
    }
  },
  mounted() {
    this.localVideoEl = this.$refs['localVideo'];
    this.remoteVideoEl = this.$refs['remoteVideo'];
  }
};
</script>
<style lang="scss"></style>
