<template>
  <div class="roomList">
    <div class="roomItemContainer" v-for="(roomItem, roomListIndex) in roomList" :key="roomListIndex">
      <div class="roomItem">
        <RoomCard @click="roomCardClickHandler" :title="roomItem.title" :memberCount="roomItem.memberCount" />
      </div>
    </div>
  </div>
</template>
<script>
import RoomCard from './RoomCard';
import { mapActions } from 'vuex';

export default {
  components: {
    RoomCard
  },
  props: {
    roomList: {
      required: true,
      default: []
    }
  },
  methods: {
    ...mapActions('room', ['']),
    roomCardClickHandler() {}
  }
};
</script>
<style lang="scss">
.roomList {
  display: flex;
  flex-wrap: wrap;

  .roomItemContainer {
    flex: 0 0 100%;

    @media (min-width: 520px) {
      flex: 0 0 50%;
    }
    @media (min-width: 992px) {
      flex: 0 0 25%;
    }

    .roomItem {
      margin: 10px;
    }
  }
}
</style>
