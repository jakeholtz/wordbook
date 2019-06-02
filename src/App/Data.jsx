const cardData = [
  { date: 'June 1, 2019', word: 'serpentine', partSpeech: 'adjective',
    syllables: ['ser', 'pen', 'tine'], stress: 1, 
    definition: 'Of or resembling a serpent or snake'
  },
  { date: 'June 2, 2019', word: 'venom', partSpeech: 'noun',
    syllables: ['ven', 'om'], stress: 0, 
    definition: 'The poisonous fluid of certain snakes, designed to incapacitate or kill threats and prey'
  },
  { date: 'June 3, 2019', word: 'fang', partSpeech: 'noun',
    syllables: ['fang'], stress: -1, 
    definition: 'One of the long, sharp, hollow or grooved teeth of a venomous snake by which poison is injected.'
  },
  { date: 'June 4, 2019', word: 'elapid', partSpeech: 'noun',
    syllables: ['e', 'la', 'pid'], stress: 1,
    definition: 'A snake of the family Elapidae, having permanently erect fangs'
  },
  { date: 'June 5, 2019', word: 'boa', partSpeech: 'noun',
    syllables: ['bo', 'a'], stress: 0,
    definition: 'A snake of the family Boidae, having vestigial hind limbs near the tail.'
  },
  { date: 'June 6, 2019', word: 'viper', partSpeech: 'noun',
    syllables: ['vi', 'per'], stress: 0,
    definition: 'One of several venomous Old World snakes of the genus Vipera, native to Europe and Asia.'
  },
  { date: 'June 7, 2019', word: 'cobra', partSpeech: 'noun',
    syllables: ['co', 'bra'], stress: 1,
    definition: 'One of several highly-venomous Old World elapid snakes of the genera Naja, characterized by a hoodlike neck and fangs.'
  },
  { date: 'June 8, 2019', word: 'python', partSpeech: 'noun',
    syllables: ['py', 'thon'], stress: 0,
    definition: 'One of several venomous Old World boa constrictors, often growing to a length of 20 feet'
  },
  { date: 'June 9, 2019', word: 'ophiolatry',  partSpeech: 'noun',
    syllables: ['o', 'phi', 'ola', 'try'], stress: 2,
    definition: 'The worship of snakes or serpents'
  },
  { date: 'June 10, 2019', word: 'anguiped', partSpeech: 'adjective',
    syllables: ['ang', 'ui', 'ped'], stress: 1,
    definition: 'Having legs or feet in the form of snakes'
  },
];

const formatDate = (date) => {
  const options = { month: "long", day: 'numeric', year: 'numeric' }
  return new Intl.DateTimeFormat('en-US', options).format(date);
}

const currCardIndex = new Date().getDate() - 1;


export { cardData }