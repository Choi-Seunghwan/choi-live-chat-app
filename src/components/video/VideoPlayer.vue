<template>
  <div class="videoPlayer">
    <Video :videoId="'localVideo'" />
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
  props: {},
  mounted() {},
  methods: {}
};
</script>
<style lang="scss"></style>
