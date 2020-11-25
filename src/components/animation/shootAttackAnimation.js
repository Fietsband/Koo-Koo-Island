import anime from 'animejs/lib/anime.es.js';

export const ShootAttackAnimation = function () {
  const duration = 1000;
  const bullet = document.createElement('span');
  bullet.classList.add('attack', 'bullet');
  bullet.innerHTML = '-';
  this.thing.prepend(bullet);

  const options = {
    targets: bullet,
    duration: duration,
    easing: 'linear',
    translateX: -500,
    translateY: 190,
    complete: function () {
      bullet.remove();
      this.end.call(this.thing);
    }.bind(this)
  };

  return anime(options);
};
