const cardData = [
 { date: 'June 1, 2019',
   word: 'serpentine',
   syllables: ['ser', 'pen', 'tine'],
   stress: 1,
   partSpeech: 'adjective',
   definition: 'Of or resembling a serpent or snake'
  },
  { date: 'June 2, 2019',
    word: 'ophiolatry',
    syllables: ['o', 'phi', 'ah', 'la', 'try'],
    stress: 2,
    partSpeech: 'noun',
    definition: 'The worship of snakes or serpents'
 }
];

const dateIndices = {
  'June 1, 2019': 0,
  'June 2, 2019': 1
}

const formatDate = (date) => {
  const options = { month: "long", day: 'numeric', year: 'numeric' }
  return new Intl.DateTimeFormat('en-US', options).format(date);
}

const currDate = formatDate(new Date());
const currCardIndex = dateIndices[currDate];

export { cardData, currCardIndex }