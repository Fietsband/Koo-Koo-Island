import anime from 'animejs/lib/anime.es.js';

export const SplashAttackAnimation = function () {
  const duration = 2500;
  const water = document.createElement('span');
  water.classList.add('attack', 'water');
  water.innerHTML = 'O';
  this.thing.prepend(water);

  const options = {
    targets: water,
    duration: duration,
    easing: 'easeOutSine',
    translateX: -500,
    translateY: 200,
    complete: function () {
      water.remove();
      this.end.call(this.thing)
    }.bind(this)
  };

  anime(options);
};
