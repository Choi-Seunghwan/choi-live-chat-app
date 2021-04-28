<template>
  <div class="home">
    <!-- <Banner></Banner> -->
    <RoomListContainer :roomList="roomList"></RoomListContainer>
  </div>
</template>
<script>
// import Banner from '@/components/Banner.vue';
import { mapState, mapActions } from 'vuex';
import RoomListContainer from '@/components/roomList/RoomListContainer.vue';

export default {
  components: {
    // Banner,
    RoomListContainer
  },
  computed: {
    ...mapState('live', ['roomList'])
  },
  methods: {
    ...mapActions('live', ['getRoomList'])
  },
  mounted() {
    this.getRoomList();
  }
};
</script>
<style lang="scss"></style>
