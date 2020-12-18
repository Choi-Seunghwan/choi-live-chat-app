<template>
  <div class="live">
    <LiveViewer></LiveViewer>
  </div>
</template>
<script>
import LiveViewer from '@/components/live/LiveViewer.vue';
import { mapActions } from 'vuex';

export default {
  components: {
    LiveViewer
  },
  props: {},
  methods: {
    ...mapActions('live', ['enterRoom'])
  },
  beforeMount() {
    const roomId = this.$route.params.roomId;
    this.enterRoom(roomId);
  },
  mounted() {}
};
</script>
<style lang="scss"></style>
