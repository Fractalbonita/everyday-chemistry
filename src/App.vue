<template>
  <Welcome v-if="uiState === 'welcome'" />
  <GameStart v-else-if="uiState === 'start'" />
  <div v-else-if="uiState === 'gaming'">
    <Score />
    <Story />
  </div>
  <GameEnd v-else />
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Welcome from './components/Welcome.vue';
import GameStart from './components/GameStart.vue';
import Story from './components/Story.vue';
import Score from './components/Score.vue';
import { mapState } from 'vuex';
import GameEnd from './components/GameEnd.vue';

export default defineComponent({
  name: 'App',
  components: {
    Welcome,
    GameStart,
    Story,
    Score,
    GameEnd
  },
  computed: {
    ...mapState(['uiState', 'player', 'sidekick', 'stories'])
  }
});
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
