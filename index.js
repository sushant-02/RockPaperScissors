function myFunction(el) {
  var className = el.classList.item(0);

  document.querySelector('.game__triangle').style.display = 'none';
  for(var i = 0; i < document.querySelectorAll('.icon').length; i++) {
    document.querySelectorAll('.icon')[i].style.display = 'none';
  }

  document.querySelector('.game__h3-you').style.transition = 'all .2s .1s';
  document.querySelector('.game__h3-you').style.opacity = '1';
  document.querySelector('.game__h3-you').style.visibility = 'visible';

  document.querySelector('.' + className).style.display = 'block';
  document.querySelector('.' + className).style.transition = 'transform .5s .1s';
  document.querySelector('.' + className).style.transform = 'translate(-180%, 40%) scale(1.7)';

  var cList = ['rock', 'paper', 'scissors'];
  var index = Math.floor(Math.random() * 3);

  document.querySelector('.game__icon-' + cList[index] + '-1').style.display = 'block';
  document.querySelector('.game__icon-' + cList[index] + '-1').style.opacity = '1';
  document.querySelector('.game__icon-' + cList[index] + '-1').style.visibility = 'visible';
  document.querySelector('.game__icon-' + cList[index] + '-1').style.transition = 'all .2s .9s';

  document.querySelector('.game__h3-house').style.transition = 'all .2s .1s';
  document.querySelector('.game__h3-house').style.opacity = '1';
  document.querySelector('.game__h3-house').style.visibility = 'visible';
}
