<template>
  <progress :id="id" :max="max" :value="value" class="progress"></progress>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'BaseProgress',
  props: {
    id: {
      type: String,
      required: true
    },
    max: {
      type: [Number, String],
      required: true
    },
    value: {
      type: [Number, String],
      required: true
    }
  }
});
</script>

<style lang="scss" scoped>
.progress {
  background-color: var(--color-input);
  border: none;
  border-radius: 25px;
  box-shadow: 0 1px 5px var(--color-background) inset;

  &[value] {
    -webkit-appearance: none;
    appearance: none;
    height: 15px;
    width: 185px;

    &::-webkit-progress-bar {
      background-color: var(--color-input);
      border: none;
      border-radius: 25px;
      box-shadow: 0 1px 5px var(--color-background) inset;
    }
    &::-webkit-progress-value {
      background-color: var(--color-primary);
      background-image: -webkit-linear-gradient(
        left,
        var(--color-primary) 0%,
        var(--color-secondary) 51%,
        var(--color-primary) 100%
      );
      background-size: 200% auto;
      border-top-left-radius: 25px;
      border-bottom-left-radius: 25px;
      border-top-right-radius: 25px;
      border-bottom-right-radius: 25px;
      box-shadow: 0 0 4px var(--color-background) inset;
    }
    &::-moz-progress-bar {
      background-color: var(--color-primary);
      background-image: -moz-linear-gradient(
        left,
        var(--color-primary) 0%,
        var(--color-secondary) 51%,
        var(--color-primary) 100%
      );
      background-size: 200% auto;
      border-top-left-radius: 25px;
      border-bottom-left-radius: 25px;
      border-top-right-radius: 25px;
      border-bottom-right-radius: 25px;
      box-shadow: 0 0 4px var(--color-background) inset;
    }
  }
}
</style>
