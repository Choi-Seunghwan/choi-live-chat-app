<template>
  <div :class="theme" class="layout">
    <Dimmed />
    <TopNav />
    <SideNav />
    <div class="wrapper">
      <slot></slot>
    </div>
  </div>
</template>
<script>
import TopNav from '@/components/navigator/TopNav.vue';
import SideNav from '@/components/navigator/SideNav.vue';
import Dimmed from '../components/layout/Dimmed.vue';

export default {
  name: 'BaseLayout',
  components: {
    TopNav,
    SideNav,
    Dimmed
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
    padding: 0 20px;
  }
}
</style>
