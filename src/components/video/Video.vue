<template>
  <div class="video">
    <video ref="video" autoplay width="300" height="200"></video>
    <div>
      <button @click="getDeviceMedia"></button>
      <p>{{ text }}</p>
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
      text: 'test'
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
      // this.videoEl.src = 'https://www.w3schools.com/tags/movie.ogg';
      console.log(this.videoEl);
    });
  },
  methods: {
    async getDeviceMedia() {
      if ('mediaDevices' in navigator) {
        try {
          const stream = await navigator.mediaDevices.getUserMedia({ video: true });
          // const videoTracks = stream.getVideoTracks();
          // const track = videoTracks[0];

          this.videoEl.srcObject = stream;
        } catch (error) {
          alert(error);
        }
      }
    }
  }
};
</script>
<style lang="scss"></style>
