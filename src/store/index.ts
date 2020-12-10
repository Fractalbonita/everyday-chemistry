import { createStore } from 'vuex';

export default createStore({
  state: {
    uiState: 'start',
    player: '',
    sidekick: '',
    sidekickOptions: ['Elf', 'Milky Way', 'Wizard', 'Gargoyle'],
    answer: '',
    answers: ['answerWrong', 'answerCorrect', 'answerFalse'],
    score: 0,
    storyIndex: 0,
    stories: [
      {
        id: '1',
        story:
          'A glass of hot chocolate is a good beverage to start into a new day. It keeps you hydrated and supplies lots of energy. Did you know that milk has a pH? The pH indicates if a liquid is acidic, basic or neutral. For example, water has a neutral pH and lemon juice is acidic. I guess you can remember your facial expression as you have tried lemon juice the last time.',
        question: 'What is the pH of milk? ',
        answerWrong: 'Acidic',
        answerCorrect: 'Neutral',
        answerFalse: 'Basic'
      },
      {
        id: '2',
        story:
          'After breakfast you should take care of your teeth. But wait a little bit before you brush your teeth. Your teeth are very sensitive. Toothpaste is a great invention. It contains a bunch of cleaning ingredients. The most import ones are abrasives and fluoride. Abrasives help remove plaque, a film of bacteria, and fluoride strengthens your teeth to prevent Karius and Baktus to settle in. These two trolls are responsible for cavities and tooth decay.',
        question: 'What is fluoride?',
        answerCorrect:
          'It is a natural mineral, which re-mineralizes your teeth.',
        answerFalse: 'It is a gas, which shields your teeth from cavities. ',
        answerWrong: 'It is natural mineral, which destroys bacteria.'
      },
      {
        id: '3',
        story:
          'The bathroom offers so many discoveries. Since we do not only have bad germs in our mouth, but also on our skin, especially our hands, it is important to wash our hands regularly with soap. Soap exists in so many different shapes and states. It is made up from very little substances that contain two groups, one that loves fat and another one that loves water. Therefore they can easily connect with the fat on your hands, which hosts the bad germs, and the water. When you rinse your hands, they are washed off.',
        question: 'What are these little substances called?',
        answerFalse: 'Scrubbers',
        answerCorrect: 'Surfactants',
        answerWrong: 'Indicators'
      }
    ]
  },
  mutations: {
    submitPlayerName(state, player) {
      state.player = player;
    },
    updateUiState(state, uiState) {
      state.uiState = uiState;
    },
    selectSidekick(state, sidekick) {
      state.sidekick = sidekick;
    },
    selectAnswer(state, answerCorrect) {
      state.answer === answerCorrect
        ? (state.score += 10)
        : (state.score -= 10);
      if (state.storyIndex < state.stories.length - 1) {
        state.storyIndex++;
      } else {
        if ((state.score = 100)) {
          state.uiState = 'highscore';
        } else if (state.score > 40 && state.score < 90) {
          state.uiState = 'good';
        } else {
          state.uiState = 'poor';
        }
      }
    }
  },
  actions: {},
  modules: {}
});
