<template>
  <div>
    <p>Score</p>
    <p>{{ score }}</p>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  computed: {
    score() {
      return this.$store.state.score;
    }
  }
});
</script>

<style lang="scss" scoped></style>
