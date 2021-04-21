<template>
  <div class="ChatController">
    <div class="inputWrap">
      <input v-model="chatText" class="inputWrap__chatText" />
    </div>
    <div class="btnWrap">
      <button @click="sendBtnHandler" class="controller__submit">{{ $t('send') }}</button>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    chatText: ''
  }),
  methods: {
    sendBtnHandler() {
      this.$emit('sendMessage', this.chatText);
    }
  }
};
</script>

<style lang="scss" scoped>
.ChatController {
  display: flex;
  justify-content: center;
  .inputWrap {
    flex-basis: 50%;
    margin-right: 15px;
    &__chatText {
      width: 100%;
    }
  }
  .btnWrap {
    &__submit {
    }
  }
}
</style>
