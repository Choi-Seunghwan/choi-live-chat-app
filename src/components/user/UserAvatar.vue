<template>
  <div class="userAvatar">
    <div class="avatar">
      <img :src="true ? require(`@/assets/images/user_icon.png`) : ''" class="icon" />
    </div>
    <div class="info">
      <span class="nickname">{{ nickname }}</span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    nickname: {
      type: String,
      defaultProps: ''
    }
  }
};
</script>

<style lang="scss" scoped>
.userAvatar {
  display: flex;
  justify-content: center;
  align-items: center;

  .avatar {
    display: flex;
    width: 30px;
    height: 30px;
    border-radius: 50%;
    background-color: #ddd;
    justify-content: center;
    align-items: center;

    .icon {
      width: 28px;
      height: 28px;
      // background: url('~@/assets/images/user_icon.png');
    }
  }

  .info {
    margin-left: 8px;
    .nickname {
      color: #ffffff;
    }
  }
}
</style>
