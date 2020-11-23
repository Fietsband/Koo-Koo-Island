import anime from 'animejs/lib/anime.es.js';

export const FishAnimation = function () {
  const duration = 15000 + Math.round(Math.random() * 3000);
  const moveToRight = this.thing.classList.contains('ltr');
  console.log(this.thing.classList);
  const width = document.querySelector('#level').offsetWidth;
  const direction = moveToRight ? 'left' : 'right';
  const finalPosition = (width + 100) + 'px';

  const options = {
    targets: this.thing,
    duration: duration,
    easing: 'easeInQuad',
    complete: this.end.bind(this.thing)
  };

  options[direction] = finalPosition;

  anime(options);
};
