import { createStore } from 'vuex';

export default createStore({
  state: {
    uiState: 'welcome',
    player: '',
    sidekick: '',
    sidekickOptions: ['Fairy', 'Dwarf', 'Goblin', 'Wizard'],
    answer: '',
    score: 0,
    storyIndex: 0,
    stories: [
      {
        id: '1',
        time: '8 A.M.',
        story:
          'A glass of hot chocolate is a good beverage to start into a new day. It keeps you hydrated and supplies lots of energy. Did you know that milk has a pH? The pH indicates if a liquid is acidic, basic or neutral. For example, water has a neutral pH and lemon juice is acidic. I guess you can remember your facial expression as you have tried lemon juice last time. Well, how does milk taste? Is milk sour or basic? Or does milk taste rather neutral?',
        question: 'What is the pH of milk? ',
        answers: {
          answerWrong: 'Acidic',
          answerCorrect: 'Neutral',
          answerFalse: 'Basic'
        }
      },
      {
        id: '2',
        time: '9 A.M.',
        story:
          'After breakfast you should take care of your teeth. But wait a little bit before you brush your teeth. Your teeth are very sensitive. Toothpaste is a great invention. It contains a bunch of cleaning ingredients. The most import ones are abrasives and fluoride. Abrasives help remove plaque, a film of bacteria. Fluoride strengthens your teeth and prevents Karius and Baktus to settle in. These little trolls are responsible for tooth decay.',
        question: 'What is fluoride?',
        answers: {
          answerCorrect:
            'It is a natural mineral, which re-mineralizes your teeth.',
          answerFalse: 'It is a gas, which shields your teeth from cavities.',
          answerWrong: 'It is a natural mineral, which destroys bacteria.'
        }
      },
      {
        id: '3',
        time: '9:15 A.M.',
        story:
          'The bathroom offers so many discoveries. Since we do not only have bad germs in our mouth, but also on our skin, especially our hands, it is important to wash our hands regularly with soap. Soap exists in so many different shapes. It is made up from very little substances that contain two groups, one that loves fat and another one that loves water. Therefore, these substances can easily connect with the water and the fat on your hands, which hosts the bad germs. When you rinse your hands, the soap, fat, and germs are washed off.',
        question: 'These little substances are called ...',
        answers: {
          answerFalse: 'scrubbers',
          answerCorrect: 'surfactants',
          answerWrong: 'indicators'
        }
      },
      {
        id: '4',
        time: '10 A.M.',
        story:
          'Now it’s time to be creative and spin some pencils. What do we need? Yes, we need some coloured pencils and a piece of paper. And of course imagination. Did you know that the word paper comes from the word “papyrus”? The ancient Egyptians used the plant papyrus to make writing materials. Nowadays, paper is made from wood fibres. Fibres are very complex sugars, so-called complex carbohydrates. The scientific term is polysaccharides. Plants and trees contain large amounts of one specific fibre.',
        question: 'What is the name of that specific fibre?',
        answers: {
          answerCorrect: 'Cellulose',
          answerWrong: 'Starch',
          answerFalse: 'Chlorophyll'
        }
      },
      {
        id: '5',
        time: '12 P.M.',
        story:
          'Speaking of sugars, it’s time for a short break. Drawing makes hungry. To refill our energy level, we can eat some banana. Bananas are fruits. There are more than 100 different kinds of banana. Most of them taste very sweet. This sweet taste comes from a certain sugar. This sugar is called fructose. Fructose is a simple sugar, like glucose. Did you know that fructose and glucose are important blood sugars and sources of energy? Too much simple sugar, so-called simple carbohydrates, is not healthy for your body.',
        question: 'What is the scientific term for fructose?',
        answers: {
          answerFalse: 'Lipid',
          answerWrong: 'Protein',
          answerCorrect: 'Monosaccharide'
        }
      },
      {
        id: '6',
        time: '2 P.M.',
        story:
          'The weather is nice outside. Let’s go to the outdoor playground after lunch and have some fun. Should we play hide and seek? Or play in the sandpit? Maybe we should head for the swing? No, we should go sliding. After trying all that different kind of fun, our shoes might have got dirty. If we have a closer look at our shoes, we can see that this dirt is mostly soil. Soil is a mixture of various chemical substances, such as organic material, sand, silt, clay, minerals, and water, and even more. Soil plays a very important role for life on our Earth. The organic material is also called organic matter.',
        question: 'Where does this organic matter come from?',
        answers: {
          answerWrong:
            'It comes from rocks that have been crushed into tiny particles.',
          answerCorrect:
            'It comes from plants and animals that have died and decayed.',
          answerFalse:
            'It comes from atmospheric dust that has settled on the ground.'
        }
      },
      {
        id: '7',
        time: '4 P.M.',
        story:
          'After playing joyfully you must be thirsty. Luckily, we brought a reusable bottle of mineral water. Mineral water is called mineral water because it contains a lot of different minerals. Since these minerals are dissolved in the water, you can’t see them. Water is essential for life on Earth. It has many wonderful chemical and physical properties. For example, it exists in three different physical states: liquid (for example our drinking water), solid (ice), or gas (vapour). A major part of the human body is water. The amount various according to age.',
        question: 'How much water is in the human body?',
        answers: {
          answerFalse: 'On average, 40% of the human body is water.',
          answerWrong: 'On average, 80% of the human body is water.',
          answerCorrect: 'On average, 60% of the human body is water.'
        }
      },
      {
        id: '8',
        time: '5 P.M.',
        story:
          'We had a great time so far. Learning and laughing so much feels so good. I hope, you are quite happy now. When you are happy, your body produces a lot of feel-good hormones. Hormones are chemical messengers, so-called neurotransmitters that are sent around the body. They tell body parts and cells what to do. Think of a cycle courier who delivers boxes and parcels. There are a bunch of different feel-good hormones such as dopamine or serotonin.',
        question: 'Which of the following chemicals makes you also feel happy?',
        answers: {
          answerWrong: 'Insulin',
          answerCorrect: 'Endorphin',
          answerFalse: 'Vitamin C'
        }
      },
      {
        id: '9',
        time: '8 P.M.',
        story:
          'Before we go to bed, it would be great to rediscover the day and go through the photos of the day, which we took with our smartphone. Smartphones are mobile phones that are comparable to a computer. You can use them for emailing, reading, watching films, and of course for texting and calling friends. When you want to watch a film, you have to touch the display. This kind of display is called touchscreen. Touchscreens consist of layers of glass that conduct electricity. This electricity is the result of tiny particles moving around.',
        question: 'What do you call these tiny particles?',
        answers: {
          answerCorrect: 'Electrons',
          answerFalse: 'Atoms',
          answerWrong: 'Quarks'
        }
      },
      {
        id: '10',
        time: '9 P.M.',
        story:
          'A long and busy day is coming to an end. It’s time for a bedtime story. Make yourself cosy in your bed, grab your blanket and lay down on your pillow. Bed sheets are so comfy. Most bed sheets are made of cotton. Cotton is a natural product. It’s a soft, hair like fibre, which grows in fluffy balls on the cotton plant. Cotton plants like warm climate. You can find cotton plants in Asia, Australia, America, and Africa. Cotton can be dyed using natural or synthetic dyes. Dyes are organic compounds that are used to make coloured clothes such as bed linen. In ancient times, the colour Tyrian purple was very expensive and valuable so that it was the colour of royals and other mighty people.',
        question: 'Where does this purple colour come from?',
        answers: {
          answerWrong: 'Insects',
          answerFalse: 'Madder',
          answerCorrect: 'Snails '
        }
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
    selectAnswer(state, answer) {
      state.answer = answer;

      answer === state.stories[state.storyIndex].answers.answerCorrect
        ? (state.score += 10)
        : (state.score -= 0);

      if (state.storyIndex < state.stories.length - 1) {
        state.storyIndex++;
      } else {
        if (state.score === 100) {
          state.uiState = 'highscore';
        } else if (state.score > 40 && state.score <= 90) {
          state.uiState = 'good';
        } else {
          state.uiState = 'poor';
        }
      }
    },
    restartGame(state) {
      state.uiState = 'welcome';
      state.score = 0;
      state.storyIndex = 0;
    }
  },
  actions: {},
  modules: {}
});
