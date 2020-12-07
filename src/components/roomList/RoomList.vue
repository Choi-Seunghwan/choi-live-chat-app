<template>
  <div class="roomList">
    <div class="roomItem" v-for="(roomItem, roomListIndex) in roomList" :key="roomListIndex">
      <RoomCard @click="roomCardClickHandler" :title="roomItem.title" :memberCount="roomItem.memberCount" />
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
