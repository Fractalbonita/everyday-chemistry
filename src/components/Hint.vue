<template>
  <div>
    <SpeechBubble v-if="sidekick">
      <div v-if="hint === true">
        <p class="hint-bubble">
          {{ stories[storyIndex].hint }}
        </p>
      </div>
      <div v-else>
        <p class="hint-bubble">
          Do you need a hint? <br />
          Click me!
        </p>
      </div>
    </SpeechBubble>
    <component
      :is="selectedSidekick"
      @click="showHint"
      class="hint-sidekick"
    ></component>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import SidekickFairy from './SidekickFairy.vue';
import SidekickDwarf from './SidekickDwarf.vue';
import SidekickGoblin from './SidekickGoblin.vue';
import SidekickWizard from './SidekickWizard.vue';
import SpeechBubble from './SpeechBubble.vue';
import { mapState } from 'vuex';

export default defineComponent({
  name: 'Hint',
  components: {
    SidekickFairy,
    SidekickDwarf,
    SidekickGoblin,
    SidekickWizard,
    SpeechBubble
  },
  computed: {
    ...mapState(['sidekick', 'hint', 'storyIndex', 'stories']),
    selectedSidekick(): string {
      return 'Sidekick' + this.sidekick;
    }
  },
  methods: {
    showHint() {
      this.$store.commit('showHint');
    }
  }
});
</script>

<style lang="scss" scoped>
.hint {
  &-bubble {
    color: var(--color-background);
    font-family: 'Gochi Hand', Helvetica, Arial, sans-serif;
    font-size: var(--font-size-button);
    font-weight: 600;
    margin: 0.5rem 0;
    word-break: normal;
    text-align: center;
  }
  &-sidekick {
    cursor: pointer;
  }
}
</style>
