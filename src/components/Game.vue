<template>
  <div class="game-container">
    <section class="game-sidekick">
      <p>sidekick</p>
      <span>sidekick bubble</span>
    </section>
    <section class="game-story">
      <Score />
      <Story />
    </section>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Story from './/Story.vue';
import Score from './/Score.vue';

export default defineComponent({
  name: 'Game',
  components: {
    Story,
    Score
  }
});
</script>

<style lang="scss" scoped>
.game {
  &-container {
    display: flex;
    flex-flow: row wrap;
  }
  &-sidekick {
    color: black;
    text-shadow: none;
    flex: 1 1 180px;
  }
  &-story {
    border-radius: 25px;
    flex: 1 2 270px;
    text-align: center;
    padding: 30px;
    position: relative;

    &::before {
      content: ' ';
      border-radius: 25px;
      background: var(--color-text-shadow);
      opacity: 0.6;
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      z-index: -1;
    }
  }
}
</style>
