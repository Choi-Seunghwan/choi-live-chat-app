<template>
  <div :class="theme" class="layout">
    <TopNav />
    <slot></slot>
  </div>
</template>
<script>
import { mapActions } from 'vuex';
import TopNav from '@/components/navigator/TopNav.vue';

export default {
  name: 'BaseLayout',
  components: {
    TopNav
  },
  data() {
    return {
      theme: 'default'
    };
  },
  mounted() {
    this.init();
  },
  methods: {
    ...mapActions('context', ['init'])
  }
};
</script>
<style lang="scss">
.Layout {
  width: 100%;
  height: 100%;
}
</style>
