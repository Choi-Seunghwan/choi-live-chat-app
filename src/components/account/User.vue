<template>
  <div class="user">
    <div class="avatar">
      <img :src="true ? require(`@/assets/images/user_icon.png`) : ''" class="icon" />
    </div>
    <div class="identifier">
      <span class="nickname">{{ getNickname }}</span>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'User',
  computed: {
    ...mapGetters('account', ['getNickname'])
  }
};
</script>

<style lang="scss">
.user {
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

  .identifier {
    margin-left: 8px;
    .nickname {
      color: #ffffff;
    }
  }
}
</style>
