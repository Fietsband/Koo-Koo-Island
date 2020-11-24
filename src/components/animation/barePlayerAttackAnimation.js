import anime from 'animejs/lib/anime.es.js';

export const BarePlayerAttackAnimation = function () {
  const duration = 1000;
  const target = this.thing.querySelector('pre#graphic');
  const options = {
    targets: target,
    duration: duration,
    direction: 'alternate',
    easing: 'easeOutQuad',
    translateX: 500,
    translateY: -200,
    complete: function () {
      this.end.call(this.thing)
    }.bind(this)
  };

  anime(options);
};
