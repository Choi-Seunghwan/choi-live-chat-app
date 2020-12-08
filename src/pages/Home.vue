<template>
  <div class="home">
    <!-- <Banner></Banner> -->
    <RoomList :roomList="roomList"></RoomList>
  </div>
</template>
<script>
// import Banner from '@/components/Banner.vue';
import { mapState, mapActions } from 'vuex';
import RoomList from '@/components/roomList/RoomList.vue';

export default {
  components: {
    // Banner,
    RoomList
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
