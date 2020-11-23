import anime from 'animejs/lib/anime.es.js';

export const SplashAttackAnimation = function () {
  const duration = 1500;

  const options = {
    targets: this.thing,
    duration: duration,
    easing: 'easeInQuad',
    complete: this.end.bind(this.thing)
  };

  anime(options);
};
