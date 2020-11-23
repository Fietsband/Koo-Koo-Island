import anime from 'animejs/lib/anime.es.js';

export const Bar = (function () {
  Bar.prototype = {
    render: function (element) {
      this.element = element;
    },

    renderWithStats: function (element, attributes) {
      this.render();

      const statsLeft = element.querySelector('.' + this.key + '_stats_left');
      const totalLeft = element.querySelector('.total_' + this.key);
      statsLeft.innerHTML = attributes.current;
      totalLeft.innerHTML = attributes.max;
    },

    fill: function(end) {
      const targets = '.' + this.scope + ' .' + this.key + '.bar .inner_bar';

      anime({
        targets: targets,
        duration: this.options.duration,
        width: '100%',
        easing: 'linear',
        complete: end.bind(this)
      });
    }
  }

  function Bar(key, options) {
    const keys = key.split('.');
    this.scope = keys[0];
    this.key = keys[1];
    this.options = options;
  }

  return Bar;
})();
