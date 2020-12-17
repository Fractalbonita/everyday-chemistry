<template>
  <button :type="type" @click="$emit('click', $event)" class="button">
    {{ text }}
  </button>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'BaseButton',
  props: {
    type: {
      type: String,
      required: true
    },
    text: {
      type: String,
      required: true
    }
  }
});
</script>

<style lang="scss" scoped>
.button {
  background-image: linear-gradient(
    to right,
    var(--color-primary) 0%,
    var(--color-secondary) 51%,
    var(--color-primary) 100%
  );
  background-size: 200% auto;
  border: none;
  border-radius: 25px;
  box-shadow: 0 0 20px var(--color-box-shadow);
  color: var(--color-surface);
  cursor: pointer;
  display: block;
  font-size: var(--font-size-button);
  font-weight: 400;
  letter-spacing: 0.1rem;
  line-height: 1.5;
  margin: 1rem 0;
  outline: none;
  padding: 12px 18px;
  text-align: center;
  text-transform: uppercase;
  transition: 0.5s;

  &:disabled {
    background-image: none;
    background-color: var(--color-disabled);
    cursor: not-allowed;
  }
  &:hover,
  &:focus {
    background-position: right center;
    color: var(--color-surface);
  }
  &:active {
    background-image: none;
    background-color: var(--color-primary);
    color: var(--color-surface);
  }
}
</style>
