<template>
  <nav class="topNav">
    <div class="logoWrapper">
      <h1 @click="titleClickHandler" class="logoWrapper__logo">
        {{ $t('logo') }}
      </h1>
    </div>
    <div class="userWrapper">
      <User />
    </div>
  </nav>
</template>
<script>
import User from '@/components/account/User';

export default {
  name: 'TopNav',
  components: {
    User
  },
  methods: {
    titleClickHandler() {
      this.$router.push('/');
    }
  }
};
</script>
<style lang="scss">
@import '@/assets/scss/theme';

.topNav {
  @include theme-color('background', 'color-primary');
  width: 100%;
  height: 56px;
  display: flex;
  justify-content: space-between;

  .logoWrapper {
    &__logo {
      color: #ffffff;
      margin: 12px;
      width: fit-content;
      cursor: pointer;
    }
  }

  .userWrapper {
    margin: 12px;
  }
}
</style>
