const WINNING_CASES = {
  'rock' : 'paper',
  'paper' : 'scissors',
  'scissors' : 'rock'
}

var score = 0;

const userPicked = document.querySelectorAll('.user');

userPicked.forEach((item) => {
  document.querySelector('.header__score-value').textContent = score;
  item.addEventListener('click', () => {
    const userValue = item.children[1].name;
    console.log(item);
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
  console.log(random);
  var scoreCase = checkWin(userValue, random.children[1].name);
  updateScore(scoreCase);
  updateUI(scoreCase, item, random);
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
    if(score > 0) {
      score--;
    } else {
      score = 0;
    }
  }
}

const updateUI = (scoreCase, item, random) => {
  document.querySelector('.header__score-value').textContent = score;
  document.querySelector('.gameStat').classList.add('show-display');
  document.querySelector('.btn-play').classList.add('show-display');
  if(scoreCase === 'lose') {
    document.querySelector('.btn-play').classList.add('lose');
    document.querySelector('.gameStat').textContent = 'You Lose';
  } else if(scoreCase === 'win') {
    document.querySelector('.btn-play').classList.add('win');
    document.querySelector('.gameStat').textContent = 'You Win';
  } else {
    document.querySelector('.btn-play').classList.add('win');
    document.querySelector('.gameStat').textContent = 'Draw';
  }

  document.querySelector('.game__h3-you').classList.add('moveLeftText');
  document.querySelector('.game__h3-house').classList.add('moveRightText');

  item.classList.add('moveUser');
  random.classList.add('moveHouse');
}
