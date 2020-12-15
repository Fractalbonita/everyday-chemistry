<template>
  <div>
    <h1>
      Good morning, {{ player }}<span v-if="sidekick"> and {{ sidekick }}</span
      >!
    </h1>
    <p>
      What a wonderful day. It’s time for new adventures.
    </p>
    <p>
      We will go on a jounrey thorugh a new day full of short stories. Each
      story ends with a question, to which you have to find the correct answer.
      You can choose from three different answers. If you pick the right answer,
      you will score 10 points.
    </p>
    <p>Are you ready? Let’s play!</p>
    <BaseButton type="button" @click="startGame" text="Start game" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { mapState } from 'vuex';
import BaseButton from './BaseButton.vue';

export default defineComponent({
  name: 'GameStart',
  components: {
    BaseButton
  },
  computed: {
    ...mapState(['player', 'sidekick'])
  },
  methods: {
    startGame() {
      this.$store.commit('updateUiState', 'gaming');
    }
  }
});
</script>

<style lang="scss" scoped></style>
