<template>
  <div @click="dimClickHandler" v-show="isDimmed" class="dimmed"></div>
</template>

<script>
import { mapActions, mapState } from 'vuex';
export default {
  computed: {
    ...mapState('context', ['isDimmed'])
  },
  methods: {
    ...mapActions('context', ['setDimmed', 'setSideNav']),
    dimClickHandler() {
      this.setSideNav(false);
      this.setDimmed(false);
    }
  }
};
</script>

<style>
.dimmed {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #000000;
  opacity: 0.7;
  z-index: 1;
}
</style>
