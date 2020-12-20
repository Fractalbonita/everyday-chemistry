import { ComponentCustomProperties } from 'vue';
import { Store } from 'vuex';

declare module '@vue/runtime-core' {
  interface State {
    sidekick: string;
    score: number;
    answers: { [key: string]: string };
    storyIndex: number;
    stories: unknown[];
  }
  // provide typings for `this.$store`
  interface ComponentCustomProperties {
    $store: Store<State>;
  }
}
