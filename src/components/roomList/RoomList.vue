<template>
  <div class="roomList">
    <div class="roomItem" v-for="(roomItem, roomListIndex) in roomList" :key="roomListIndex">
      <RoomCard :title="roomItem.title" :memberCount="roomItem.memberCount" />
    </div>
  </div>
</template>
<script>
import RoomCard from './RoomCard';
import { mapState, mapActions } from 'vuex';

export default {
  components: {
    RoomCard
  },
  computed: {
    ...mapState('room', ['roomList'])
  },
  methods: {
    ...mapActions('room', [''])
  }
};
</script>
<style scoped lang="scss">
.roomList {
  display: flex;

  .roomItem {
    margin: 10px;
  }
}
</style>
