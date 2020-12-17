<template>
  <label :for="id" class="label">{{ label }}</label>
  <span class="effect">
    <input
      v-bind="$attrs"
      :id="id"
      :name="name"
      type="text"
      autocomplete="off"
      :placeholder="placeholder"
      v-model="value"
      class="input"
    />
  </span>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { InputValue } from './types';

export default defineComponent({
  name: 'BaseInput',
  props: {
    label: {
      type: String,
      required: true
    },
    id: {
      type: String,
      required: true
    },
    name: {
      type: String,
      required: true
    },
    placeholder: {
      type: String,
      required: true
    },
    modelValue: {
      type: [String, Number],
      default: ''
    }
  },
  computed: {
    value: {
      get(): InputValue {
        return this.modelValue;
      },
      set(value: InputValue) {
        return this.$emit('update:modelValue', value);
      }
    }
  }
});
</script>

<style lang="scss" scoped>
.label {
  border: 0;
  clip: rect(0 0 0 0);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  width: 1px;
}
.effect {
  display: block;
  margin: 0.5rem auto;
  position: relative;
  width: 60%;

  &::before {
    content: ' ';
    background-image: url('../assets/images/cauldron.jpg');
    background-attachment: fixed;
    background-position: center;
    background-size: cover;
    border: 1px solid var(--color-box-shadow);
    border-radius: 25px;
    filter: blur(10px);
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: -1;
  }
}
.input {
  background-color: var(--color-input);
  border: none;
  border-radius: 25px;
  color: var(--color-background);
  cursor: text;
  font-size: var(--font-size-body);
  font-weight: 400;
  height: 48px;
  outline: none;
  padding: 0 12px;
  text-align: center;
  width: 100%;

  &::placeholder {
    color: var(--color-background);
    font-size: var(--font-size-button);
    font-weight: 400;
    letter-spacing: 0.1rem;
    opacity: 0.7;
  }
  &:hover {
    border: 1px solid var(--color-surface);
  }
  &:focus {
    border: 2px solid var(--color-surface);
  }
}
</style>
