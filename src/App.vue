<template>
  <div id="app">
    <BaseLayout>
      <router-view />
    </BaseLayout>
  </div>
</template>

<script>
import BaseLayout from '@/layouts/BaseLayout.vue';
import '@/assets/scss/base.scss';

export default {
  name: 'App',
  components: {
    BaseLayout
  }
};
</script>

<style>
#app {
  width: 100vw;
  height: 100vh;
}
</style>
