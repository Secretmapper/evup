const TweenMax = require('gsap');

function randomSwipe(evupApp, evupCards) {
  (Math.random() < 0.5) ?
    swipeRight(evupApp, evupCards):
    swipeLeft(evupApp, evupCards);
}
function swipeRight(evupApp, evupCards) {
  evupCards[2].classList.add('evup-card-exit');
}

function swipeLeft(evupApp, evupCards) {
  evupCards[2].classList.add('evup-card-left-exit');
}

function addToQueue(evupApp, evupCards) {
  evupCards[0].classList.remove('evup-card-1');
  evupCards[0].classList.add('evup-card-2');
  evupCards[1].classList.remove('evup-card-2');
  evupCards[1].classList.add('evup-card-3');

  const temp = evupCards[3];
  temp.classList.remove('evup-card-3');
  temp.classList.remove('evup-card-4');
  temp.classList.remove('evup-card-exit');
  temp.classList.remove('evup-card-left-exit');
  temp.classList.remove('evup-card-back');
  window.setTimeout(() => {
    temp.classList.add('evup-card-1');
  }, 200);
  evupApp.insertBefore(temp, evupApp.firstChild);

  evupCards[3] = evupCards[2];
  evupCards[2] = evupCards[1];
  evupCards[1] = evupCards[0];
  evupCards[0] = temp;

}
ready(() => {
  const evupApp = document.querySelectorAll('.evup-app')[0];
  let evupCards = document.querySelectorAll('.evup-card');

  evupCards = toArray(evupCards);
  setTimeout(() => {
    const el = null;
    evupCards.forEach((el, i) => {
      i++;
      el.classList.add(`evup-card-${ i }`);
    });
    setTimeout(() => {
      (function mainAnimLoop() {
        timer(0).then(() => {
          randomSwipe(evupApp, evupCards);
          addToQueue(evupApp, evupCards);
          return timer(1000);
        }).then(() => {
          randomSwipe(evupApp, evupCards);
          addToQueue(evupApp, evupCards);
          return timer(1000);
        }).then((resolve) => {
          evupCards[2].classList.add('evup-card-show'); return timer(2000);
        }).then(()=> {
          evupCards[2].classList.add('evup-card-bar-collapse'); return timer(2000);
        }).then(()=> {
          evupCards[2].classList.remove('evup-card-bar-collapse');
          evupCards[2].classList.add('evup-card-back'); return timer(500);
        }).then(()=> {
          evupCards[2].classList.remove('evup-card-show');
          randomSwipe(evupApp, evupCards);
          addToQueue(evupApp, evupCards);
          return timer(1000);
        }).then(mainAnimLoop);
      })()
    }, 1000);

  }, 2000);
});

function toArray(obj) {
  const array = [];
  // iterate backwards ensuring that length is an UInt32
  for (let i = obj.length >>> 0; i--;) {
    array[i] = obj[i];
  }
  return array;
}
function ready(fn) {
  if (document.readyState != 'loading') {
    fn();
  } else {
    document.addEventListener('DOMContentLoaded', fn);
  }
}
function timer(t) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      resolve();
    }, t);
  });
}
