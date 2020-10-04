<template>
  <div class="videoPlayer">
    <Video :videoId="videoId" />
  </div>
</template>
<script>
import Video from './Video.vue';

export default {
  components: { Video },
  name: 'videoPlayer',
  data() {
    return {};
  },
  props: { videoId: { type: String, required: true, default: 'video' } },
  mounted() {},
  methods: {}
};
</script>
<style lang="scss"></style>
