<template>
  <div :class="theme" class="layout">
    <TopNav />
    <div class="wrapper">
      <slot></slot>
    </div>
  </div>
</template>
<script>
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
  mounted() {},
  methods: {}
};
</script>

<style lang="scss">
.layout {
  width: 100%;
  height: 100%;
  display: flex;
  flex-flow: column;
  align-items: center;

  .wrapper {
    max-width: 1440px;
    width: 100%;
    height: 100%;
  }
}
</style>
