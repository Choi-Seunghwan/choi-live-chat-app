<template>
  <div class="ChatContainer">
    <ChatDialog />
    <ChatControl @sendMessage="sendMessage" />
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { mapActions } from 'vuex';
import ChatDialog from './ChatDialog.vue';
import ChatControl from './ChatControl.vue';

export default Vue.extend({
  components: {
    ChatDialog,
    ChatControl
  },
  props: {
    roomId: {
      type: String,
      default: ''
    }
  },
  methods: {
    ...mapActions('chat', ['sendChatMessage']),
    init() {
      this.$store.subscribeAction((action, state) => {
        if (action.type === 'chat/receiveChatMessage') {
          //
        }
      });
    },
    sendMessage(message) {
      this.sendChatMessage({ roomId: this.roomId, message });
    }
  },
  beforeMount() {
    this.init();
  }
});
</script>

<style lang="scss">
.ChatContainer {
}
</style>
