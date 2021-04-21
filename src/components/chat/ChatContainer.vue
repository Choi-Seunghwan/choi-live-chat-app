<template>
  <div class="ChatContainer">
    <ChatDialog />
    <ChatController @sendMessage="sendMessage" />
  </div>
</template>

<script>
import { mapActions } from 'vuex';
import ChatDialog from './ChatDialog.vue';
import ChatController from './ChatController';

export default {
  components: {
    ChatDialog,
    ChatController
  },
  props: {
    roomId: {
      type: String,
      default: ''
    }
  },
  methods: {
    ...mapActions('chat', ['sendChatMessage']),
    sendMessage(message) {
      this.sendChatMessage({ roomId: this.roomId, message });
    }
  }
};
</script>

<style lang="scss">
.ChatContainer {
}
</style>
