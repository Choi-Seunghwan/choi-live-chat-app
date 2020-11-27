<template>
  <div class="roomCard">
    <div class="thumbnail"></div>
    <span>{{ title }}</span>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: 'undefined title',
      required: true
    }
  }
};
</script>

<style lang="scss">
.roomCard {
  width: 200px;
  height: 220px;
  .thumbnail {
    width: 100%;
    height: 160px;
    background-color: grey;
  }
}
</style>
