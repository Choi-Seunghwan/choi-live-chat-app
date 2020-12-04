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
