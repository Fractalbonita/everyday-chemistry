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
  align-items: center;
  cursor: pointer;
  display: flex;
  flex-wrap: nowrap;
  justify-content: flex-start;
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
  border: 1px solid var(--color-text);
  border-radius: 100%;
  height: 16px;
  margin-right: 16px;
  position: relative;
  width: 16px;

  &::before,
  &::after {
    border-radius: inherit;
    content: '';
    display: block;
    height: inherit;
    left: -2px;
    position: absolute;
    top: -2px;
    transform: scale(0);
    transform-origin: center center;
    width: inherit;
  }
  &::before {
    background: transparent;
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
