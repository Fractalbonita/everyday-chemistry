<template>
  <div class="end-container">
    <section v-if="uiState === 'highscore'">
      <h2 class="end-headline">
        Congratulations, {{ player
        }}<span v-if="sidekick"> and {{ sidekick }}</span
        >!
      </h2>
      <span class="end-score">Highscore</span>
      <p class="end-text">
        You have answered all questions correctly and scored {{ score }} points.
      </p>
      <p class="end-text">
        You already know a lot about everyday chemistry. You can be very proud
        of yourself.
      </p>
    </section>
    <section v-else-if="uiState === 'good'">
      <h2 class="end-headline">
        Congratulations, {{ player
        }}<span v-if="sidekick"> and {{ sidekick }}</span
        >!
      </h2>
      <span class="end-score">Score: {{ score }}</span>
      <p class="end-text">
        You have a good knowledge of everyday chemistry. I guess, you can still
        improve yourself.
      </p>
    </section>
    <section v-else-if="uiState === 'poor'">
      <h2 class="end-headline">
        I'm sorry {{ player }}<span v-if="sidekick"> and {{ sidekick }}</span
        >, you lost the game!
      </h2>
      <p class="end-text">
        You have done quite well, but you haven't answered enough questions
        correctly. You should practice a lot to win the game next time.
      </p>
    </section>
    <h3 class="end-heading">Do you want to play again?</h3>
    <BaseButton type="button" @click="restartGame" text="Restart game" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { mapState } from 'vuex';
import BaseButton from './BaseButton.vue';

export default defineComponent({
  name: 'GameEnd',
  components: {
    BaseButton
  },
  computed: {
    ...mapState(['uiState', 'player', 'sidekick', 'score'])
  },
  methods: {
    restartGame() {
      this.$store.commit('restartGame');
    }
  }
});
</script>

<style lang="scss" scoped>
.end {
  &-container {
    border-radius: 25px;
    background: var(--color-primary);
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 30px;
    text-align: center;
    min-width: 350px;
    max-width: 700px;
    margin: 0 auto;
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
  &-heading {
    color: var(--color-surface);
    font-family: inherit;
    font-size: var(--font-size-h3);
    font-weight: 500;
    margin: 0.7rem 0;
  }
  &-score {
    -webkit-text-stroke: 1px var(--color-surface);
    -webkit-text-fill-color: var(--color-primary);
    font-family: inherit;
    font-size: var(--font-size-h1);
    font-weight: 500;
    margin: 1rem 0;
    text-transform: uppercase;
  }
}
</style>
