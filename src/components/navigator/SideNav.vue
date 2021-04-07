<template>
  <aside v-show="showSideNav" class="sideNav">
    <nav class="nav">
      <ul>
        <li>
          <router-link :to="{ path: '/' }" class="nav__item">{{ $t('home') }}</router-link>
        </li>
        <li>
          <router-link :to="{ path: '/' }" class="nav__item">{{ $t('live') }}</router-link>
        </li>
        <li>
          <router-link :to="{ path: '/createRoom' }" class="nav__item">{{ $t('createRoom') }}</router-link>
        </li>
      </ul>
      <div class="divide" />
    </nav>
  </aside>
</template>

<script>
import { mapState } from 'vuex';
export default {
  computed: {
    ...mapState('context', ['showSideNav'])
  }
};
</script>

<style lang="scss">
.sideNav {
  display: flex;
  flex-direction: column;
  position: absolute;
  left: 0;
  width: 240px;
  height: 100%;
  background-color: #f7f7f7;
  z-index: 2;

  .divide {
    height: 1px;
    background-color: #e6e6e6;
  }

  .nav {
    width: 100%;
    height: 100%;
    margin-top: 56px;

    ul {
      padding: 0;
      margin: 0;
    }

    li {
      list-style: none;
    }

    &__item {
      display: block;
      padding: 15px;
      font-size: 14px;
      line-height: 20px;
      color: #4d4d4d;
    }
  }
}
</style>
