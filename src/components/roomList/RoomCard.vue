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
      default: ''
    }
  }
};
</script>

<style lang="scss">
.roomCard {
  width: 100%;
  height: 260px;
  transition: box-shadow 150ms linear;
  border: 1px solid rgba(0, 0, 0, 0.12);
  height: 260px;
  cursor: pointer;

  &:hover {
    box-shadow: 0 0 8px 0 rgba(0, 0, 0, 0.08), 0 0 15px 0 rgba(0, 0, 0, 0.02), 0 0 20px 4px rgba(0, 0, 0, 0.06);
  }

  .thumbnail {
    width: 100%;
    height: 210px;
    background-color: silver;
  }
}
</style>
