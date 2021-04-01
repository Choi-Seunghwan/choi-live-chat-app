<template>
  <div class="ChatController">
    <div class="inputWrap">
      <input v-model="chatText" class="inputWrap__chatText" />
    </div>
    <div class="controller">
      <button class="controller__submit" />
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    chatText: ''
  })
};
</script>

<style lang="scss" scoped>
.ChatController {
  .inputWrap {
    &__chatText {
    }
  }
  .controller {
    &__submit {
    }
  }
}
</style>
