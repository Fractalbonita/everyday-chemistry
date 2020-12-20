<template>
  <div class="game-container">
    <section class="game-sidekick">
      <component :is="selectedSidekick"></component>
    </section>
    <section class="game-story">
      <Score />
      <Story />
    </section>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import SidekickFairy from './SidekickFairy.vue';
import SidekickDwarf from './SidekickDwarf.vue';
import SidekickGoblin from './SidekickGoblin.vue';
import SidekickWizard from './SidekickWizard.vue';
import Story from './/Story.vue';
import Score from './/Score.vue';

export default defineComponent({
  name: 'Game',
  components: {
    SidekickFairy,
    SidekickDwarf,
    SidekickGoblin,
    SidekickWizard,
    Story,
    Score
  },
  computed: {
    sidekick() {
      return this.$store.state.sidekick;
    },
    selectedSidekick(): string {
      return 'Sidekick' + this.sidekick;
    }
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
    flex: 1 1 300px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  // flex min-width: 500pxinstead of 400px is possible
  &-story {
    border-radius: 25px;
    flex: 1 2 400px;
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
