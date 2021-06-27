<template>
  <div class="login">
    <div class="login-wrap">
      <h1>{{ $t('LOGIN_TITLE') }}</h1>
      <div class="input-wrap">
        <input :placeholder="'Id'" v-model="id" class="input id" />
        <input :placeholder="'Pw'" v-model="pw" class="input password" />
        <button @click="loginBtnHandler" class="button">Login</button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex';
import _get from 'lodash/get';
import pageRouteMixin from '@/mixin/pageRouteMixin';

export default {
  mixins: [pageRouteMixin],
  data: () => ({
    id: '',
    pw: ''
  }),
  methods: {
    ...mapActions('account', ['login']),
    loginBtnHandler() {
      this._login();
    },
    async _login() {
      const res = await this.login({ username: this.id, password: this.pw });
      const errorCode = _get(res, 'errorCode', '');

      if (errorCode) return;

      this.$_routeMainPage();
    }
  }
};
</script>

<style lang="scss" scoped>
.login {
  .login-wrap {
    .input-wrap {
      .input {
        &.id {
        }

        &.password {
        }
      }
    }
  }
}
</style>
