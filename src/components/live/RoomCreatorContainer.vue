<template>
  <div class="roomCreatorContainer">
    <div class="liveType">
      <h4 class="liveType__text">
        {{ $t('liveType') }}
      </h4>
      <div class="liveType__inputs">
        <button class="input">
          {{ $t('broadcast') }}
        </button>
        <button class="input">
          {{ $t('radio') }}
        </button>
      </div>
    </div>
    <div class="liveForm">
      <div class="title">
        <h4 class="title__text">{{ $t('title') }}</h4>
        <input :placeholder="$t('title')" v-model="titleInput" class="title__input" />
      </div>
    </div>
    <div class="interface">
      <button @click="startLiveBtnHandler">{{ $t('startLive') }}</button>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  data() {
    return {
      titleInput: ''
    };
  },
  methods: {
    ...mapActions('live', ['createRoom']),
    startLiveBtnHandler() {
      const roomInfo = { title: this.titleInput };
      this.createRoom(roomInfo);
    }
  }
};
</script>

<style lang="scss">
.roomCreatorContainer {
  .liveType {
    &__inputs {
      display: flex;
      justify-content: center;

      .input {
        margin: 0 10px;
      }
    }
  }

  .liveForm {
    .title {
      &__text {
      }

      &__input {
        width: 100%;
      }
    }
  }

  .interface {
    margin-top: 15px;
    text-align: center;
  }
}
</style>
