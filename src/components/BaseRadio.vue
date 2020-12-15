<template>
  <label class="container">
    <input
      :id="id"
      type="radio"
      :value="label"
      v-model="picked"
      class="radio"
    />
    <span class="effect"></span>
    <span class="label">{{ label }} </span></label
  >
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { RadioValue } from './types';

export default defineComponent({
  name: 'BaseRadio',
  props: {
    id: {
      type: String,
      required: true
    },
    modelValue: {
      type: [String, Boolean],
      default: ''
    },
    label: {
      type: [String, Number],
      required: true
    }
  },
  computed: {
    picked: {
      get(): RadioValue {
        return this.modelValue;
      },
      set(value: RadioValue) {
        return this.$emit('update:modelValue', value);
      }
    }
  }
});
</script>

<style lang="scss" scoped>
.container {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-wrap: nowrap;
  cursor: pointer;
  margin: 0.5rem 0;
  position: relative;
}
.radio {
  -webkit-appearance: none;
  appearance: none;
}
.label {
  cursor: pointer;
  font-weight: 500;
}
.radio:checked + .effect::before {
  opacity: 1;
  transform: scale(0.6);
}
.radio:hover + .effect,
.radio:focus + .effect {
  border: 2px solid var(--color-primary);
}
.radio:hover + .effect::before,
.radio:focus + .effect::before {
  background: var(--color-primary);
}
.radio:hover ~ .label {
  color: var(--color-primary);
}
.radio:focus + .effect::after,
.radio:active + .effect::after {
  opacity: 0.1;
  transform: scale(2.4);
}
.effect {
  width: 16px;
  height: 16px;
  border: 1px solid var(--color-text);
  border-radius: 100%;
  margin-right: 16px;
  position: relative;

  &::before,
  &::after {
    content: '';
    display: block;
    width: inherit;
    height: inherit;
    border-radius: inherit;
    top: -2px;
    left: -2px;
    position: absolute;
    transform: scale(0);
    transform-origin: center center;
  }
  &::before {
    background: var(--color-surface);
    opacity: 0;
    transition: 0.3s;
  }
  &::after {
    background: var(--color-primary);
    opacity: 0.4;
    transition: 0.6s;
  }
}
</style>
