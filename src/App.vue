<template id="app">
  <div class="background" :style="{ backgroundImage: setBackground }"></div>
  <div class="content">
    <Welcome v-if="uiState === 'welcome'" />
    <GameStart v-else-if="uiState === 'start'" />
    <Game v-else-if="uiState === 'gaming'" />
    <GameEnd v-else />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Welcome from './components/Welcome.vue';
import GameStart from './components/GameStart.vue';
import { mapState } from 'vuex';
import GameEnd from './components/GameEnd.vue';
import Game from './components/Game.vue';

export default defineComponent({
  name: 'App',
  components: {
    Welcome,
    GameStart,
    Game,
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

  &::after {
    content: ' ';
    display: block;
    height: 100px;
  }
}
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
  min-height: 100%;
}
h1 {
  font-family: inherit;
  font-size: var(--font-size-h1);
  font-weight: 900;
  margin: 1.5rem 0;
}
h2 {
  font-family: inherit;
  font-size: var(--font-size-h2);
  font-weight: 700;
  margin: 1rem 0;
}
h3 {
  font-family: inherit;
  font-size: var(--font-size-h3);
  font-weight: 500;
  margin: 0.7rem 0;
}
p {
  font-family: inherit;
  font-size: var(--font-size-body);
  font-weight: 400;
  margin: 0.5rem 0;
}
button,
input {
  font-family: inherit;
}
</style>
