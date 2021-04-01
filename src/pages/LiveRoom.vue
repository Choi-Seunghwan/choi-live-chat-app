<template>
  <div class="live">
    <ChatContainer />
  </div>
</template>
<script>
import ChatContainer from '@/components/chat/ChatContainer.vue';
import { mapActions } from 'vuex';

export default {
  components: {
    ChatContainer
  },
  props: {},
  methods: {
    ...mapActions('live', ['enterRoom'])
  },
  beforeMount() {
    // const roomId = this.$route.params.roomId;
    // this.enterRoom(roomId);
  },
  mounted() {}
};
</script>
<style lang="scss"></style>
