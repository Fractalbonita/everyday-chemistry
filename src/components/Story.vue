<template>
  <div class="story-container">
    <BaseProgress
      id="progress"
      :max="stories.length + 1"
      :value="storyIndex + 1"
    />
    <h2 class="story-time">{{ stories[storyIndex].time }}</h2>
    <p class="story-text">
      {{ stories[storyIndex].story }}
    </p>
    <h2 class="story-question">{{ stories[storyIndex].question }}</h2>
    <div v-for="[key, answer] in answers" :key="key + storyIndex">
      <button type="button" @click="selectAnswer(answer)" class="story-button">
        {{ answer }}
      </button>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { mapState } from 'vuex';
import BaseProgress from './BaseProgress.vue';

export default defineComponent({
  name: 'Story',
  components: {
    BaseProgress
  },
  computed: {
    ...mapState(['answer', 'storyIndex', 'stories']),
    answers(): [string, string][] {
      const answerPairs = Object.entries<string>(
        this.stories[this.storyIndex].answers
      );
      return this.shuffle(answerPairs);
    }
  },
  methods: {
    selectAnswer(answer: string) {
      this.$store.commit('selectAnswer', answer);
      this.$store.commit('hideHint');
    },
    shuffle<T>(array: T[]) {
      for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
      }
      return array;
    }
  }
});
</script>

<style lang="scss" scoped>
.story {
  &-container {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  &-time {
    color: var(--color-primary);
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
  &-question {
    color: var(--color-surface);
    font-family: inherit;
    font-size: var(--font-size-h2);
    font-weight: 700;
    margin: 1rem 0;
  }
  &-button {
    background-image: linear-gradient(
      to right,
      var(--color-primary) 0%,
      var(--color-secondary) 51%,
      var(--color-primary) 100%
    );
    background-size: 200% auto;
    border: none;
    border-radius: 25px;
    box-shadow: 0 0 20px var(--color-box-shadow);
    color: var(--color-surface);
    cursor: pointer;
    display: block;
    font-size: var(--font-size-button);
    font-weight: 500;
    letter-spacing: 0.1rem;
    line-height: 1.5;
    margin: 0.7rem 0;
    outline: none;
    padding: 12px 18px;
    text-align: center;
    transition: 0.5s;

    &:hover,
    &:focus {
      background-position: right center;
      color: var(--color-surface);
    }
    &:active {
      background-image: none;
      background-color: var(--color-primary);
    }
  }
}
</style>
