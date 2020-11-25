import anime from 'animejs/lib/anime.es.js';

export const BarePlayerAttackAnimation = function () {
  const duration = 1000;
  const target = this.thing.querySelector('pre#graphic');
  const options = {
    targets: target,
    duration: duration,
    direction: 'alternate',
    easing: 'easeInQuad',
    translateX: 500,
    translateY: -200,
    complete: this.end.bind(this.thing)
  };

  return anime(options);
};
