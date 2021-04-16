<template>
  <nav class="topNav">
    <div class="leftWrapper">
      <div class="leftWrapper__menu">
        <img @click="menuIconHandler" :src="require(`@/assets/images/menu_icon.png`)" class="menuIcon" />
      </div>
      <h1 @click="titleClickHandler" class="leftWrapper__logo">
        {{ $t('logo') }}
      </h1>
    </div>
    <div class="rightWrapper">
      <User />
    </div>
  </nav>
</template>
<script>
import { mapActions } from 'vuex';
import User from '@/components/user/User';

export default {
  name: 'TopNav',
  components: {
    User
  },
  methods: {
    ...mapActions('context', ['toggleSideNav']),

    titleClickHandler() {
      this.$router.push('/');
    },

    menuIconHandler() {
      this.toggleSideNav();
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
  z-index: 3;

  .leftWrapper {
    display: flex;
    align-items: center;
    margin: 12px;

    &__menu {
      display: flex;
      justify-content: center;
      align-items: center;
      padding-top: 2px;
      cursor: pointer;

      .menuIcon {
        width: 28px;
        height: 28px;
      }
    }

    &__logo {
      color: #ffffff;
      margin: 12px;
      width: fit-content;
      cursor: pointer;
    }
  }

  .rightWrapper {
    margin: 12px;
  }
}
</style>
