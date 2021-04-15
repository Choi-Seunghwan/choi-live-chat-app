<template>
  <div class="live">
    <LiveViewerContainer />
  </div>
</template>
<script>
import LiveViewerContainer from '@/components/liveViewer/LiveViewerContainer.vue';
import { mapActions } from 'vuex';

export default {
  components: {
    LiveViewerContainer
  },
  props: {},
  methods: {
    ...mapActions('live', ['enterRoom']),
    init() {}
  },
  beforeMount() {
    // const roomId = this.$route.params.roomId;
    // this.enterRoom(roomId);
  },
  mounted() {}
};
</script>
<style lang="scss"></style>
