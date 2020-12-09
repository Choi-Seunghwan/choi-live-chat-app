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
    this.initContext();
    this.initMedia();
    this.initAccount();
    this.initNetworkConnector();
  },
  methods: {
    ...mapActions('context', ['initContext']),
    ...mapActions('media', ['initMedia']),
    ...mapActions('account', ['initAccount']),
    ...mapActions('networkConnector', ['initNetworkConnector'])
  }
};
</script>

<style>
#app {
  width: 100%;
  height: 100%;
}
</style>
