<template>
  <div class="TopNav"></div>
</template>
<script>
export default {
  name: 'TopNav'
};
</script>
<style lang="scss">
@import '@/assets/scss/theme';

.TopNav {
  @include theme-color('background', 'color-primary');
  width: 100%;
  height: 96px;
}
</style>
