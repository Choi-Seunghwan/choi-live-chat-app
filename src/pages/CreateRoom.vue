<template>
  <div class="createRoom">
    <RoomCreatorContainer />
  </div>
</template>

<script>
import RoomCreatorContainer from '@/components/live/RoomCreatorContainer.vue';
export default {
  components: {
    RoomCreatorContainer
  }
};
</script>

<style lang="scss">
RoomCreatorContainer.startLive {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  min-width: 320px;
}
</style>
