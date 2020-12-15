<template>
  <div>
    <progress
      id="progress"
      :max="stories.length + 1"
      :value="storyIndex + 1"
    ></progress>
    <p>
      {{ stories[storyIndex].story }}
    </p>
    <h2>{{ stories[storyIndex].question }}</h2>
    <div v-for="[key, answer] in answers" :key="key">
      <button type="button" @click="selectAnswer(answer)">
        {{ answer }}
      </button>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { mapState } from 'vuex';

export default defineComponent({
  name: 'Story',
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

<style lang="scss" scoped></style>
