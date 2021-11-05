const WINNING_CASES = {
  'rock' : 'paper',
  'paper' : 'scissors',
  'scissors' : 'rock'
}
let turns = 0;
let score = [0, 0];       // score = [userScore, compScore]
const userPicked = document.querySelectorAll('.user');
userPicked.forEach((item) => {
  document.querySelector('.turns__value').textContent = turns;
  document.querySelector('.header__score-value--user').textContent = score[0];
  document.querySelector('.header__score-value--computer').textContent = score[1];
  item.addEventListener('click', () => {
    turns = turns + 1;
    const userValue = item.children[1].name;
    removeDisplay();
    item.classList.add('show-selected-user');
    changeStyles();
    generateRandom(userValue, item);
  })
})

const removeDisplay = () => {
  document.querySelector('.game__triangle').classList.add('remove-display');
  userPicked.forEach((item) => item.classList.add('remove-display'));
}

const changeStyles = () => {
  document.querySelector('.game__h3-you').classList.add('show-display');
  document.querySelector('.game__h3-house').classList.add('show-display');
}

const generateRandom = (userValue, item) => {
  const items = document.querySelectorAll('.computer');
  const random = items[Math.floor(Math.random() * 3)];
  random.classList.add('show-selected-computer');
  var scoreCase = checkWin(userValue, random.children[1].name);
  updateScore(scoreCase);
  preventAccidentalTouch(item, random);
  replay(item, random);
}

const checkWin = (userChoice, randomChoice) => {
  if (userChoice === randomChoice) {
    return ('draw');
  } else if (WINNING_CASES[userChoice] === randomChoice) {
    return ('lose');
  } else {
    return ('win');
  }
}

const updateScore = (scoreCase) => {
  if(scoreCase === 'win') {
    score[0] = score[0] + 1;
  } else if(scoreCase === 'lose') {
    score[1] = score[1] + 1;
  }
  updateUI(score, scoreCase);
}

const playAgainBtn = document.querySelector('.btn-play');
const stat = document.querySelector('.gameStat');

const updateUI = (score, scoreCase) => {
  document.querySelector('.turns__value').textContent = turns;
  document.querySelector('.header__score-value--user').textContent = score[0];
  document.querySelector('.header__score-value--computer').textContent = score[1];

  stat.classList.add('show-display-after');
  playAgainBtn.classList.add('show-display-after');

  if(scoreCase === 'lose') {
    playAgainBtn.classList.add('lose');
    stat.textContent = 'You Lose';
  } else if(scoreCase === 'win') {
    playAgainBtn.classList.add('win');
    stat.textContent = 'You Win';
  } else {
    playAgainBtn.classList.add('win');
    stat.textContent = 'Draw';
  }
}

const preventAccidentalTouch = (item, random) => {
  item.classList.add('disable');
  random.classList.add('disable');
}

const replay = (item, random) => {
  playAgainBtn.addEventListener('click', () => {
    stat.classList.remove('show-display-after');
    playAgainBtn.classList.remove('show-display-after');
    document.querySelector('.game__triangle').classList.remove('remove-display');
    userPicked.forEach((item) => item.classList.remove('remove-display'));
    document.querySelector('.game__h3-you').classList.remove('show-display');
    document.querySelector('.game__h3-house').classList.remove('show-display');
    item.classList.remove('show-selected-user');
    random.classList.remove('show-selected-computer');
    playAgainBtn.classList.remove('lose');
    playAgainBtn.classList.remove('win');
    item.classList.remove('disable');
    random.classList.remove('disable');
  });
}