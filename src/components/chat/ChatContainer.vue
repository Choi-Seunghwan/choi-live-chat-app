<template>
  <div class="ChatContainer">
    <ChatDialog />
    <ChatControl @sendMessage="sendMessage" />
  </div>
</template>

<script>
import { mapActions } from 'vuex';
import ChatDialog from './ChatDialog.vue';
import ChatControl from './ChatControl.vue';
import chatMixin from '@/mixin/chatMixin';

export default {
  components: {
    ChatDialog,
    ChatControl
  },
  mixins: [chatMixin],
  props: {
    roomId: {
      type: String,
      default: ''
    }
  },
  methods: {
    ...mapActions('chat', ['sendChatMessage']),
    receiveChatMessageHandler(args) {
      console.log('args', args);
    },
    sendMessage(message) {
      this.sendChatMessage({ roomId: this.roomId, message });
    }
  },
  beforeMount() {
    this.initSubscribeAction(this.receiveChatMessageHandler.bind(this));
  }
};
</script>

<style lang="scss">
.ChatContainer {
}
</style>
