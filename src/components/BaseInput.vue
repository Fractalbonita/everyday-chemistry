<template>
  <label :for="id">{{ label }}</label>
  <input
    v-bind="$attrs"
    :id="id"
    :name="name"
    type="text"
    autocomplete="off"
    :placeholder="placeholder"
    v-model="value"
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

<style lang="scss" scoped></style>
