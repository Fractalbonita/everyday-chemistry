<template>
  <div>
    <section v-if="uiState === 'highscore'">
      <h2>
        Congratulations, {{ player
        }}<span v-if="sidekick"> and {{ sidekick }}</span
        >!
      </h2>
      <p>
        You have answered all questions correctly and scored {{ score }} points.
        You already know a lot about everyday chemistry. You can be very proud
        of yourself.
      </p>
    </section>
    <section v-else-if="uiState === 'good'">
      <h2>
        Congratulations, {{ player
        }}<span v-if="sidekick"> and {{ sidekick }}</span
        >!
      </h2>
      <p>
        You scored {{ score }} points. You have a good knowledge of everyday
        chemistry. I guess, you can still improve yourself.
      </p>
    </section>
    <section v-else-if="uiState === 'poor'">
      <h2>
        I'm sorry, {{ player
        }}<span v-if="sidekick"> and {{ sidekick }}, you lost the game</span>
      </h2>
      <p>
        You have done quite well, but you haven't answered enough questions
        correctly. You should practice a lot to win the game next time.
      </p>
    </section>
    <p>Do you want to play again?</p>
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

<style lang="scss" scoped></style>
