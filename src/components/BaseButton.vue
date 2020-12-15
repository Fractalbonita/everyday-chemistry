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
    #16a085 0%,
    #f4d03f 51%,
    #16a085 100%
  );
  background-size: 200% auto;
  border: none;
  border-radius: 25px;
  box-shadow: 0 0 20px #eee;
  color: white;
  cursor: pointer;
  display: block;
  font-size: 0.875rem;
  font-weight: 400;
  letter-spacing: 0.1rem;
  line-height: 1.5;
  margin: 0;
  outline: none;
  padding: 12px 18px;
  text-align: center;
  text-transform: uppercase;
  transition: 0.5s;

  &:disabled {
    background-image: none;
    background-color: #d8d8d8;
    cursor: not-allowed;
  }
  &:hover,
  &:focus {
    background-position: right center; /* change the direction of the change here */
    color: #fff;
    text-decoration: none;
  }
  &:active {
    background-image: none;
    background-color: #16a085;
  }
}
</style>
