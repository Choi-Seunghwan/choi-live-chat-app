<template>
  <div class="home">
    <!-- <Banner></Banner> -->
    <RoomListContainer />
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
  computed: {},
  methods: {}
};
</script>
<style lang="scss"></style>
