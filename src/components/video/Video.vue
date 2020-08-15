<template>
  <div class="video">
    <video ref="video" autoplay width="300" height="200"></video>
    <div>
      <button @click="getDeviceMedia"></button>
    </div>
  </div>
</template>
<script>
export default {
  name: 'videoItem',
  data() {
    return {
      videoEl: undefined,
      deviceMedia: undefined,
      localStream: undefined
    };
  },
  props: {
    videoId: {
      type: String,
      default: 'video',
      require: false
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.videoEl = this.$refs['video'];
    });
  },
  methods: {
    getDeviceMedia() {
      if ('mediaDevices' in navigator) {
        try {
          this.deviceMedia = navigator.mediaDevices.getUserMedia({ audio: true, video: true }, stream => {
            this.videoEl.src = window.URL.createObjectURL(stream);
          });
        } catch (error) {
          console.log('error');
        }
      }
    }
  }
};
</script>
<style lang="scss"></style>
