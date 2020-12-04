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
import { mapActions } from 'vuex';

export default {
  name: 'App',
  components: {
    BaseLayout
  },
  mounted() {
    this.init();
    this.connection();
  },
  methods: {
    ...mapActions('context', ['init']),
    ...mapActions('networkConnector', ['connection'])
  }
};
</script>

<style>
#app {
  width: 100vw;
  height: 100vh;
}
</style>
