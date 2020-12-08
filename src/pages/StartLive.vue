<template>
  <div class="startLive">
    <StartLiveInterface />
  </div>
</template>

<script>
import StartLiveInterface from '@/components/live/StartLiveInterface.vue';
export default {
  components: {
    StartLiveInterface
  }
};
</script>

<style lang="scss">
.startLive {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  min-width: 320px;
}
</style>
