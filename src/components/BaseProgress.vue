<template>
  <progress :id="id" :max="max" :value="value"></progress>
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

<style lang="scss" scoped></style>
