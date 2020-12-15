<template>
  <input :id="id" type="radio" :value="label" v-model="picked" />
  <label :for="id"> {{ label }}</label>
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

<style lang="scss" scoped></style>
