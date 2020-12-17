<template id="app">
  <div class="background" :style="{ backgroundImage: setBackground }"></div>
  <div class="content">
    <Welcome v-if="uiState === 'welcome'" />
    <GameStart v-else-if="uiState === 'start'" />
    <div v-else-if="uiState === 'gaming'">
      <Score />
      <Story />
    </div>
    <GameEnd v-else />
  </div>
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
    ...mapState(['uiState', 'player', 'sidekick', 'stories']),
    setBackground(): string {
      if (this.uiState === 'welcome') {
        return 'url(' + require('@/assets/images/cauldron.jpg') + ')';
      }
      if (this.sidekick === 'Fairy') {
        return 'url(' + require('@/assets/images/forest.jpg') + ')';
      } else if (this.sidekick === 'Dwarf') {
        return 'url(' + require('@/assets/images/hobbithouse.jpg') + ')';
      } else if (this.sidekick === 'Goblin') {
        return 'url(' + require('@/assets/images/mine.jpg') + ')';
      } else if (this.sidekick === 'Wizard') {
        return 'url(' + require('@/assets/images/aurora.jpg') + ')';
      } else {
        return 'url(' + require('@/assets/images/cauldron.jpg') + ')';
      }
    }
  }
});
</script>

<style lang="scss">
:root {
  --color-primary: #16a085;
  --color-secondary: #f4d03f;
  --color-surface: white;
  --color-background: black;
  --color-text: black;
  --color-input: rgba(238, 238, 238, 0.4);
  --color-text-shadow: #333333;
  --color-box-shadow: #eeeeee;
  --color-disabled: #d8d8d8;
  --font-size-button: 0.875rem;
  --font-size-body: 1rem;
  --font-size-h1: 2rem;
  --font-size-h2: 1.5rem;
  --font-size-h3: 1.25rem;
}
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
body,
html {
  height: 100vh;
}
body {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background: var(--color-background);
  color: var(--color-surface);
  font-family: Avenir, Helvetica, Arial, sans-serif;
  font-size: 1rem;
  font-weight: normal;
  letter-spacing: 0.1rem;
  line-height: 1.5;
  margin: 0;
  min-height: 100%;
  text-align: center;
  text-shadow: 0 0 3px var(--color-text-shadow);
}
#app {
  height: 100%;
}
.background {
  filter: blur(1px);
  opacity: 0.9;
  left: 0;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  z-index: -1;
  background-size: cover;
  background-position: center;
}
.content {
  min-height: 100%;
  padding: 20px;
}
h1 {
  color: var(--color-primary);
  font-size: var(--font-size-h1);
  font-weight: 900;
  margin: 1.5rem 0;
}
h2 {
  color: var(--color-surface);
  font-size: var(--font-size-h2);
  font-weight: 700;
  margin: 1rem 0;
}
h3 {
  color: var(--color-surface);
  font-size: var(--font-size-h3);
  font-weight: 500;
  margin: 0.5rem 0;
}
p {
  color: var(--color-surface);
  font-size: var(--font-size-body);
  font-weight: 400;
  margin: 0.5rem 0;
}
</style>
