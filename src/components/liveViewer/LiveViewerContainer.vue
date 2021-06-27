<template>
  <div class="LiveViewerContainer">
    <ChatContainer>
      <template v-slot:background>
        <VideoContainer />
      </template>
    </ChatContainer>
  </div>
</template>

<script>
import ChatContainer from '@/components/chat/ChatContainer.vue';
import VideoContainer from '@/components/video/VideoController.vue';

export default {
  components: {
    ChatContainer,
    VideoContainer
  }
};
</script>

<style lang="scss">
.LiveViewerContainer {
  max-width: 600px;
  background-color: #fff;
  width: 100%;
  margin: 40px auto;
  padding: 20px;
  box-sizing: border-box;
  border-radius: 12px;
}
</style>
