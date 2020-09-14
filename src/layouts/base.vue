<template>
  <div :class="theme" class="theme">
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: 'BaseLayout',
  data() {
    return {
      theme: 'default'
    };
  }
};
</script>
<style lang="scss"></style>
