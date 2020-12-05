<template>
  <div class="home">
    <!-- <Banner></Banner> -->
    <RoomList></RoomList>
  </div>
</template>
<script>
// import Banner from '@/components/Banner.vue';
import { mapActions } from 'vuex';
import RoomList from '@/components/roomList/RoomList.vue';

export default {
  components: {
    // Banner,
    RoomList
  },
  methods: {
    ...mapActions('room', ['getRoomList'])
  },
  mounted() {
    this.getRoomList();
  }
};
</script>
<style lang="scss"></style>
