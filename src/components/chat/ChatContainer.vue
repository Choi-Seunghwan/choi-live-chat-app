<template>
  <div class="ChatContainer">
    <ChatDialog />
    <ChatController />
  </div>
</template>

<script>
import ChatDialog from './ChatDialog.vue';
import ChatController from './ChatController';
export default {
  components: {
    ChatDialog,
    ChatController
  }
};
</script>

<style></style>
