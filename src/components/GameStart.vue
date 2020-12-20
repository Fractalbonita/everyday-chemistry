<template>
  <div class="start-container">
    <section class="start-sidekick">
      <SpeechBubble v-if="sidekick">
        <p class="start-bubble">
          Hello {{ player }}, <br />
          I will support you during the game!
        </p>
      </SpeechBubble>
      <component :is="selectedSidekick"></component>
    </section>
    <section class="start-intro">
      <h2 class="start-headline">
        Good morning, {{ player
        }}<span v-if="sidekick"> and {{ sidekick }}</span
        >!
      </h2>
      <p class="start-text">
        What a wonderful day. It’s time for new adventures.
      </p>
      <p class="start-text">
        We will go on a jounrey thorugh a new day full of short stories. Each
        story ends with a question, to which you have to find the correct
        answer. You can choose from three different answers. If you pick the
        right answer, you will score 10 points.
      </p>
      <p class="start-text">Are you ready? Let’s play!</p>
      <BaseButton type="button" @click="startGame" text="Start game" />
    </section>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { mapState } from 'vuex';
import BaseButton from './BaseButton.vue';
import SidekickFairy from './SidekickFairy.vue';
import SidekickDwarf from './SidekickDwarf.vue';
import SidekickGoblin from './SidekickGoblin.vue';
import SidekickWizard from './SidekickWizard.vue';
import SpeechBubble from './SpeechBubble.vue';

export default defineComponent({
  name: 'GameStart',
  components: {
    SidekickFairy,
    SidekickDwarf,
    SidekickGoblin,
    SidekickWizard,
    SpeechBubble,
    BaseButton
  },
  computed: {
    ...mapState(['player', 'sidekick']),
    selectedSidekick(): string {
      return 'Sidekick' + this.sidekick;
    }
  },
  methods: {
    startGame() {
      this.$store.commit('updateUiState', 'gaming');
    }
  }
});
</script>

<style lang="scss" scoped>
.start {
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
  &-bubble {
    color: var(--color-background);
    font-family: inherit;
    font-size: var(--font-size-button);
    font-weight: 600;
    margin: 0.5rem 0;
    word-break: normal;
    text-align: center;
  }
  // flex min-width: 500pxinstead of 400px is possible
  &-intro {
    border-radius: 25px;
    flex: 1 2 400px;
    text-align: center;
    padding: 30px;
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;

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
  &-headline {
    color: var(--color-surface);
    font-family: inherit;
    font-size: var(--font-size-h2);
    font-weight: 700;
    margin: 1rem 0;
  }
  &-text {
    color: var(--color-surface);
    font-family: inherit;
    font-size: var(--font-size-body);
    font-weight: 400;
    margin: 0.5rem 0;
  }
  &-wrapper {
    position: relative;
  }
}
</style>
