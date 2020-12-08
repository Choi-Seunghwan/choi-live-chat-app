<template>
  <div class="startLive">
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
        <input :placeholder="$t('title')" class="title__input" />
      </div>
    </div>
    <div class="interface">
      <button>{{ $t('startLive') }}</button>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
.startLive {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  min-width: 320px;

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
