<template>
  <div class="welcome-container">
    <h1>Welcome to the Everyday Chemistry Game!</h1>
    <p>
      In this game you will discover that we are surrounded by chemisty in many
      areas of our daily life. Before we start the game, you surely want to tell
      me your name.
    </p>
    <form v-on:submit.prevent="submitPlayer">
      <h2>What's your name?</h2>
      <BaseInput
        id="player"
        label="Name"
        name="player"
        type="text"
        placeholder="e.g. Kim"
        v-model.trim="playerName"
      />
      <p>
        The more the merrier... Adventures are more enjoyable with friends. You
        can invite your friends to play with you. But you can also choose a
        virtual friend, who will be your sidekick during the game.
      </p>
      <h2>Who should be your sidekick?</h2>
      <p v-for="sidekick in sidekickOptions" :key="sidekick">
        <BaseRadio :id="sidekick" :label="sidekick" v-model="sidekickChoice" />
      </p>
      <BaseButton type="submit" :disabled="!playerName" text="Let's go" />
    </form>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { mapState } from 'vuex';
import BaseInput from './BaseInput.vue';
import BaseRadio from './BaseRadio.vue';
import BaseButton from './BaseButton.vue';

export default defineComponent({
  name: 'Welcome',
  components: {
    BaseInput,
    BaseRadio,
    BaseButton
  },
  data() {
    return {
      playerName: '',
      sidekickChoice: ''
    };
  },
  computed: {
    ...mapState(['player', 'sidekickOptions'])
  },
  methods: {
    submitPlayer() {
      this.$store.commit('submitPlayerName', this.playerName);
      this.$store.commit('selectSidekick', this.sidekickChoice);
      this.$store.commit('updateUiState', 'start');
    }
  }
});
</script>

<style lang="scss" scoped></style>
