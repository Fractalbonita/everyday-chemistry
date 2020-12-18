<template>
  <div class="score-container">
    <h3 class="score-headline">Score:</h3>
    <div class="score-wrapper">
      <span class="score-number">{{ score }}</span>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Score',
  computed: {
    score() {
      return this.$store.state.score;
    }
  }
});
</script>

<style lang="scss" scoped>
.score {
  &-headline {
    -webkit-text-stroke: 1px var(--color-surface);
    -webkit-text-fill-color: var(--color-primary);
    font-family: inherit;
    font-size: var(--font-size-h3);
    font-weight: 500;
    margin: 0.7rem 0;
    text-transform: uppercase;
  }
  &-wrapper {
    background: var(--color-primary);
    border: 4px solid var(--color-primary);
    border-radius: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 52px;
    margin: 1rem auto;
    width: 52px;
  }
  &-number {
    color: var(--color-surface);
    font-family: inherit;
    font-size: var(--font-size-h3);
    font-weight: 400;
    line-height: 0;
    margin: 0.5rem 0;
  }
}
</style>
