import { ComponentCustomProperties } from 'vue';
import { Store } from 'vuex';

declare module '@vue/runtime-core' {
  interface State {
    uiState: string;
    player: string;
    sidekick: string;
    sidekickOptions: array;
    score: number;
    answer: string;
    answers: { [key: string]: string };
    storyIndex: number;
    stories: unknown[];
  }
  // provide typings for `this.$store`
  interface ComponentCustomProperties {
    $store: Store<State>;
  }
}
