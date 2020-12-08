<template>
  <aside v-show="showSideNav" class="sideNav"></aside>
</template>

<script>
import { mapState } from 'vuex';
export default {
  computed: {
    ...mapState('context', ['showSideNav'])
  }
};
</script>

<style lang="scss">
.sideNav {
  display: flex;
  flex-direction: column;
  position: absolute;
  left: 0;
  width: 240px;
  height: 100%;
  background-color: #f7f7f7;
}
</style>
