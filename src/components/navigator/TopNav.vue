<template>
  <div class="topNav">
    <div class="topNav__title">
      {{ $t('title') }}
    </div>
  </div>
</template>
<script>
export default {
  name: 'TopNav'
};
</script>
<style lang="scss">
@import '@/assets/scss/theme';

.topNav {
  @include theme-color('background', 'color-primary');
  width: 100%;
  height: 56px;

  &__title {
  }
}
</style>
