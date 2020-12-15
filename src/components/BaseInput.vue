<template>
  <label :for="id" class="label">{{ label }}</label>
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
.input {
  background-color: white;
  border: 1px solid black;
  border-radius: 25px;
  color: black;
  cursor: text;
  font-size: 16px;
  font-weight: 400;
  height: 48px;
  outline: none;
  padding: 0 12px;
  width: 80%;

  &::placeholder {
    color: black;
    font-size: 0.875rem;
    font-weight: normal;
    letter-spacing: 0.1rem;
    opacity: 0.5;
  }
  &:hover {
    border: 1px solid #16a085;
  }
  &:focus {
    border: 2px solid #16a085;
  }
}
</style>
