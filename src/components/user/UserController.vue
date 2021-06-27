<template>
  <div class="userController">
    <slot :nickname="nickname" :avatarSrc="avatarSrc"></slot>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'UserController',
  computed: {
    ...mapGetters('account', ['getNickname']),
    nickname() {
      return this.getNickname;
    },
    avatarSrc() {
      return '';
    }
  }
};
</script>

<style lang="scss">
.UserController {
}
</style>
