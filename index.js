const WINNING_CASES = {
    'rock' : 'paper',
    'paper' : 'scissors',
    'scissors' : 'rock'
}
let score = 0;
const userPicked = document.querySelectorAll('.user');

userPicked.forEach((item) => {
  document.querySelector('.header__score-value').textContent = score;
  item.addEventListener('click', () => {
    const userValue = item.children[1].name;
    removeDisplay();
    item.classList.add('show-selected-user');
    changeStyles();
    generateRandom(userValue, item);
  })
})

const removeDisplay = () => {
  document.querySelector('.game__triangle').classList.add('remove-display');
  userPicked.forEach((item) => item.classList.add('remove-display'))
}

const changeStyles = () => {
  document.querySelector('.game__h3-you').classList.add('show-display');
  document.querySelector('.game__h3-house').classList.add('show-display');
  document.querySelector('.game__h3-house').style.transition = "all .2s .5s";
}

const generateRandom = (userValue, item) => {
  const items = document.querySelectorAll('.computer');
  const random = items[Math.floor(Math.random() * 3)];
  random.classList.add('show-selected-computer');
  var scoreCase = checkWin(userValue, random.children[1].name);
  updateScore(scoreCase);
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
    score++;
  } else if(scoreCase === 'lose') {
    score--;
  }
  updateUI(score, scoreCase);
}

const updateUI = (score, scoreCase) => {
  document.querySelector('.header__score-value').textContent = score;
  const stat = document.querySelector('.gameStat');
  const playAgainBtn = document.querySelector('.btn-play');

  stat.classList.add('show-display');
  playAgainBtn.classList.add('show-display');

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