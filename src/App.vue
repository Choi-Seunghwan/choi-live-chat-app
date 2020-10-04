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
import { mapAction } from 'vuex';

export default {
  name: 'App',
  components: {
    BaseLayout
  },
  mounted() {},
  methods: {
    ...mapAction['']
  }
};
</script>

<style>
#app {
  width: 100vw;
  height: 100vh;
}
</style>
